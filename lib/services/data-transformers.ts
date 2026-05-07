// =============================================================================
// TravelWell OS Data Transformation Layer
// Transforms raw Supabase data into UI-ready structures
// =============================================================================

import type {
  SpecialInterest,
  Region,
  SubRegion,
  MicroDestination,
  StayPartner,
  Activity,
  LocalSpecialist,
  ItineraryItem,
  GroupedStayPartners,
  GroupedActivities,
  UserItinerary,
  SpecialInterestWithRegions,
  RegionWithSubRegions,
  SubRegionWithMicroDestinations,
  MicroDestinationWithDetails
} from '@/lib/types/database'

// =============================================================================
// STAY PARTNER TRANSFORMATIONS
// =============================================================================

/**
 * Groups stay partners by tier (mega, boutique, local)
 * UI-ready structure for displaying tiered accommodation options
 */
export function groupStayPartnersByTier(partners: StayPartner[]): GroupedStayPartners {
  return {
    mega: partners.filter(p => p.tier === 'mega'),
    boutique: partners.filter(p => p.tier === 'boutique'),
    local: partners.filter(p => p.tier === 'local' || !p.tier) // Default to local if no tier
  }
}

/**
 * Sorts stay partners by display order within each tier
 */
export function sortStayPartnersByOrder(partners: StayPartner[]): StayPartner[] {
  return [...partners].sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
}

/**
 * Filters stay partners by availability in a specific micro-destination
 */
export function filterStayPartnersByDestination(
  partners: StayPartner[], 
  microDestinationId: number
): StayPartner[] {
  return partners.filter(p => p.micro_destination_id === microDestinationId)
}

// =============================================================================
// ACTIVITY TRANSFORMATIONS
// =============================================================================

/**
 * Groups activities by partner source (viator, getyourguide, local)
 * UI-ready structure for displaying categorized activities
 */
export function groupActivitiesBySource(activities: Activity[]): GroupedActivities {
  return {
    viator: activities.filter(a => a.partner_source === 'viator'),
    getyourguide: activities.filter(a => a.partner_source === 'getyourguide'),
    local: activities.filter(a => a.partner_source === 'local' || !a.partner_source)
  }
}

/**
 * Sorts activities by price (ascending)
 */
export function sortActivitiesByPrice(activities: Activity[]): Activity[] {
  return [...activities].sort((a, b) => (a.price_from || 0) - (b.price_from || 0))
}

/**
 * Sorts activities by duration (ascending)
 */
export function sortActivitiesByDuration(activities: Activity[]): Activity[] {
  return [...activities].sort((a, b) => (a.duration_hours || 0) - (b.duration_hours || 0))
}

/**
 * Filters activities by price range
 */
export function filterActivitiesByPriceRange(
  activities: Activity[],
  minPrice: number,
  maxPrice: number
): Activity[] {
  return activities.filter(a => {
    const price = a.price_from || 0
    return price >= minPrice && price <= maxPrice
  })
}

// =============================================================================
// PARTNER TRANSFORMATIONS (General)
// =============================================================================

/**
 * Combines mega partners and local specialists into a unified partner list
 * UI-ready structure for displaying all partners together
 */
export function combinePartnersAndSpecialists(
  stayPartners: StayPartner[],
  localSpecialists: LocalSpecialist[]
): { type: 'partner' | 'specialist'; data: StayPartner | LocalSpecialist }[] {
  const combined: { type: 'partner' | 'specialist'; data: StayPartner | LocalSpecialist }[] = []
  
  // Add mega partners first
  stayPartners
    .filter(p => p.tier === 'mega')
    .forEach(p => combined.push({ type: 'partner', data: p }))
  
  // Add local specialists
  localSpecialists.forEach(s => combined.push({ type: 'specialist', data: s }))
  
  // Add remaining partners
  stayPartners
    .filter(p => p.tier !== 'mega')
    .forEach(p => combined.push({ type: 'partner', data: p }))
  
  return combined
}

// =============================================================================
// HIERARCHY TRANSFORMATIONS
// =============================================================================

/**
 * Builds the full SI → Region → Sub-region → Micro-destination hierarchy
 * Used for navigation trees and breadcrumbs
 */
export function buildHierarchyBreadcrumb(
  specialInterest?: SpecialInterest | null,
  region?: Region | null,
  subRegion?: SubRegion | null,
  microDestination?: MicroDestination | null
): { label: string; slug: string; type: string }[] {
  const breadcrumb: { label: string; slug: string; type: string }[] = []
  
  if (specialInterest) {
    breadcrumb.push({
      label: specialInterest.name,
      slug: specialInterest.slug || '',
      type: 'special_interest'
    })
  }
  
  if (region) {
    breadcrumb.push({
      label: region.name,
      slug: region.slug || '',
      type: 'region'
    })
  }
  
  if (subRegion) {
    breadcrumb.push({
      label: subRegion.name,
      slug: subRegion.slug || '',
      type: 'sub_region'
    })
  }
  
  if (microDestination) {
    breadcrumb.push({
      label: microDestination.name,
      slug: microDestination.slug || '',
      type: 'micro_destination'
    })
  }
  
  return breadcrumb
}

/**
 * Flattens a nested hierarchy into a searchable list
 */
export function flattenHierarchy(
  interests: SpecialInterestWithRegions[]
): { name: string; type: string; slug: string; parentSlug?: string }[] {
  const flattened: { name: string; type: string; slug: string; parentSlug?: string }[] = []
  
  for (const interest of interests) {
    flattened.push({
      name: interest.name,
      type: 'special_interest',
      slug: interest.slug || ''
    })
    
    for (const region of interest.regions || []) {
      flattened.push({
        name: region.name,
        type: 'region',
        slug: region.slug || '',
        parentSlug: interest.slug
      })
    }
  }
  
  return flattened
}

// =============================================================================
// ITINERARY TRANSFORMATIONS
// =============================================================================

/**
 * Groups itinerary items by day
 * UI-ready structure for day-by-day itinerary display
 */
export function groupItineraryByDay(items: ItineraryItem[]): Map<number, ItineraryItem[]> {
  const grouped = new Map<number, ItineraryItem[]>()
  
  for (const item of items) {
    const day = item.itinerary_day || 1
    if (!grouped.has(day)) {
      grouped.set(day, [])
    }
    grouped.get(day)!.push(item)
  }
  
  // Sort items within each day by display_order
  grouped.forEach((dayItems, day) => {
    grouped.set(day, dayItems.sort((a, b) => (a.display_order || 0) - (b.display_order || 0)))
  })
  
  return grouped
}

/**
 * Transforms itinerary items into a structured user itinerary
 */
export function transformToUserItinerary(userId: string, items: ItineraryItem[]): UserItinerary {
  const groupedByDay = groupItineraryByDay(items)
  const totalDays = groupedByDay.size > 0 ? Math.max(...groupedByDay.keys()) : 0
  
  return {
    user_id: userId,
    items: items.sort((a, b) => {
      // Sort by day first, then by display_order
      const dayDiff = (a.itinerary_day || 1) - (b.itinerary_day || 1)
      if (dayDiff !== 0) return dayDiff
      return (a.display_order || 0) - (b.display_order || 0)
    }),
    total_days: totalDays
  }
}

/**
 * Calculates itinerary statistics
 */
export function calculateItineraryStats(items: ItineraryItem[]): {
  totalItems: number
  confirmedItems: number
  itemsByType: Record<string, number>
} {
  const itemsByType: Record<string, number> = {}
  let confirmedItems = 0
  
  for (const item of items) {
    const type = item.item_type || 'note'
    itemsByType[type] = (itemsByType[type] || 0) + 1
    if (item.is_confirmed) confirmedItems++
  }
  
  return {
    totalItems: items.length,
    confirmedItems,
    itemsByType
  }
}

// =============================================================================
// UI FORMATTING HELPERS
// =============================================================================

/**
 * Formats a price with currency symbol
 */
export function formatPrice(price: number | undefined, currency: string = 'USD'): string {
  if (price === undefined || price === null) return 'Price on request'
  
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    AUD: 'A$',
    CAD: 'C$'
  }
  
  const symbol = symbols[currency] || currency + ' '
  return `${symbol}${price.toLocaleString()}`
}

/**
 * Formats duration in hours to a readable string
 */
export function formatDuration(hours: number | undefined): string {
  if (!hours) return ''
  
  if (hours < 1) {
    return `${Math.round(hours * 60)} min`
  } else if (hours === 1) {
    return '1 hour'
  } else if (hours < 24) {
    return `${hours} hours`
  } else {
    const days = Math.floor(hours / 24)
    return days === 1 ? '1 day' : `${days} days`
  }
}

/**
 * Generates a URL-friendly slug from a name
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
