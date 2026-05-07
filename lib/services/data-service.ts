// =============================================================================
// TravelWell OS Data Service Layer
// Server-side Supabase query functions for the entire platform
// =============================================================================

import { createClient } from '@/lib/supabase/server'
import type { 
  SpecialInterest, 
  Region,
  SubRegion,
  MicroDestination,
  StayPartner,
  Activity,
  LocalSpecialist,
  ItineraryItem,
  SpecialInterestWithRegions,
  RegionWithSubRegions,
  SubRegionWithMicroDestinations,
  MicroDestinationWithDetails,
  GroupedStayPartners,
  GroupedActivities,
  UserItinerary
} from '@/lib/types/database'

// =============================================================================
// SPECIAL INTERESTS
// =============================================================================

export async function fetchSpecialInterests(): Promise<SpecialInterest[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching special interests:', error)
    return []
  }
  return data || []
}

export async function fetchSpecialInterestBySlug(slug: string): Promise<SpecialInterest | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[TravelWell] Error fetching special interest by slug:', error)
    return null
  }
  return data
}

export async function fetchSpecialInterestById(id: number): Promise<SpecialInterest | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('[TravelWell] Error fetching special interest by id:', error)
    return null
  }
  return data
}

// =============================================================================
// REGIONS (by Special Interest)
// =============================================================================

export async function fetchRegionsBySpecialInterest(specialInterestId: number): Promise<Region[]> {
  const supabase = await createClient()
  
  // Query via junction table with join
  const { data, error } = await supabase
    .from('region_special_interests')
    .select(`
      region_id,
      is_featured,
      display_order,
      regions (*)
    `)
    .eq('special_interest_id', specialInterestId)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('[TravelWell] Error fetching regions by special interest:', error)
    return []
  }

  // Extract regions from joined data
  return data
    ?.map((item: { regions: Region }) => item.regions)
    .filter(Boolean) || []
}

export async function fetchRegionBySlug(slug: string): Promise<Region | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[TravelWell] Error fetching region by slug:', error)
    return null
  }
  return data
}

export async function fetchAllRegions(): Promise<Region[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching all regions:', error)
    return []
  }
  return data || []
}

// =============================================================================
// SUB-REGIONS (by Region)
// =============================================================================

export async function fetchSubRegionsByRegion(regionId: number): Promise<SubRegion[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('sub_regions')
    .select('*')
    .eq('region_id', regionId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching sub-regions by region:', error)
    return []
  }
  return data || []
}

export async function fetchSubRegionBySlug(slug: string): Promise<SubRegion | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('sub_regions')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[TravelWell] Error fetching sub-region by slug:', error)
    return null
  }
  return data
}

// =============================================================================
// MICRO-DESTINATIONS (by Sub-Region)
// =============================================================================

export async function fetchMicroDestinationsBySubRegion(subRegionId: number): Promise<MicroDestination[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('micro_destinations')
    .select('*')
    .eq('sub_region_id', subRegionId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching micro-destinations by sub-region:', error)
    return []
  }
  return data || []
}

export async function fetchMicroDestinationBySlug(slug: string): Promise<MicroDestination | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('micro_destinations')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[TravelWell] Error fetching micro-destination by slug:', error)
    return null
  }
  return data
}

// =============================================================================
// STAY PARTNERS (by Micro-Destination)
// =============================================================================

export async function fetchStayPartnersByMicroDestination(microDestinationId: number): Promise<StayPartner[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('stay_partners')
    .select('*')
    .eq('micro_destination_id', microDestinationId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching stay partners by micro-destination:', error)
    return []
  }
  return data || []
}

// =============================================================================
// ACTIVITIES (by Micro-Destination)
// =============================================================================

export async function fetchActivitiesByMicroDestination(microDestinationId: number): Promise<Activity[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('activities')
    .select('*')
    .eq('micro_destination_id', microDestinationId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching activities by micro-destination:', error)
    return []
  }
  return data || []
}

// =============================================================================
// LOCAL SPECIALISTS (by Micro-Destination)
// =============================================================================

export async function fetchLocalSpecialistsByMicroDestination(microDestinationId: number): Promise<LocalSpecialist[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('local_specialists')
    .select('*')
    .eq('micro_destination_id', microDestinationId)
    .eq('is_verified', true)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching local specialists by micro-destination:', error)
    return []
  }
  return data || []
}

// =============================================================================
// ITINERARY (by User)
// =============================================================================

export async function fetchItineraryByUser(userId: string): Promise<ItineraryItem[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('itinerary_items')
    .select('*')
    .eq('user_id', userId)
    .order('itinerary_day', { ascending: true })
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[TravelWell] Error fetching itinerary by user:', error)
    return []
  }
  return data || []
}

export async function addItineraryItem(item: Partial<ItineraryItem>): Promise<ItineraryItem | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('itinerary_items')
    .insert(item)
    .select()
    .single()
  
  if (error) {
    console.error('[TravelWell] Error adding itinerary item:', error)
    return null
  }
  return data
}

export async function removeItineraryItem(itemId: number): Promise<boolean> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('itinerary_items')
    .delete()
    .eq('id', itemId)
  
  if (error) {
    console.error('[TravelWell] Error removing itinerary item:', error)
    return false
  }
  return true
}

// =============================================================================
// COMPOSITE QUERIES (Optimized for hierarchy fetching)
// =============================================================================

/**
 * Fetches a special interest with all its associated regions in a single query
 */
export async function fetchSpecialInterestWithRegions(slug: string): Promise<SpecialInterestWithRegions | null> {
  const interest = await fetchSpecialInterestBySlug(slug)
  if (!interest) return null

  const regions = await fetchRegionsBySpecialInterest(interest.id)
  return { ...interest, regions }
}

/**
 * Fetches a region with all its sub-regions in a single query
 */
export async function fetchRegionWithSubRegions(regionId: number): Promise<RegionWithSubRegions | null> {
  const supabase = await createClient()
  
  const { data: region, error: regionError } = await supabase
    .from('regions')
    .select('*')
    .eq('id', regionId)
    .single()

  if (regionError || !region) {
    console.error('[TravelWell] Error fetching region:', regionError)
    return null
  }

  const subRegions = await fetchSubRegionsByRegion(regionId)
  return { ...region, sub_regions: subRegions }
}

/**
 * Fetches a sub-region with all its micro-destinations
 */
export async function fetchSubRegionWithMicroDestinations(subRegionId: number): Promise<SubRegionWithMicroDestinations | null> {
  const supabase = await createClient()
  
  const { data: subRegion, error } = await supabase
    .from('sub_regions')
    .select('*')
    .eq('id', subRegionId)
    .single()

  if (error || !subRegion) {
    console.error('[TravelWell] Error fetching sub-region:', error)
    return null
  }

  const microDestinations = await fetchMicroDestinationsBySubRegion(subRegionId)
  return { ...subRegion, micro_destinations: microDestinations }
}

/**
 * Fetches a micro-destination with all its associated content (stays, activities, specialists)
 * Uses parallel queries for performance
 */
export async function fetchMicroDestinationWithDetails(microDestinationId: number): Promise<MicroDestinationWithDetails | null> {
  const supabase = await createClient()
  
  const { data: microDest, error } = await supabase
    .from('micro_destinations')
    .select('*')
    .eq('id', microDestinationId)
    .single()

  if (error || !microDest) {
    console.error('[TravelWell] Error fetching micro-destination:', error)
    return null
  }

  // Parallel fetch for performance (avoid N+1)
  const [stayPartners, activities, localSpecialists] = await Promise.all([
    fetchStayPartnersByMicroDestination(microDestinationId),
    fetchActivitiesByMicroDestination(microDestinationId),
    fetchLocalSpecialistsByMicroDestination(microDestinationId)
  ])

  return {
    ...microDest,
    stay_partners: stayPartners,
    activities: activities,
    local_specialists: localSpecialists
  }
}
