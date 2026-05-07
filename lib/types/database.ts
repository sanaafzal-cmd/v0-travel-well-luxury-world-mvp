// =============================================================================
// TravelWell OS Database Types
// Matches Supabase schema for type-safe queries
// =============================================================================

// -----------------------------------------------------------------------------
// CORE ENTITIES
// -----------------------------------------------------------------------------

export interface SpecialInterest {
  id: number
  name: string
  slug?: string
  hero_image?: string
  tile_image?: string
  guide_text?: string
  partner_name?: string
  cta_label?: string
  partner_deep_link?: string
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface Region {
  id: number
  name: string
  slug?: string
  description?: string
  hero_image?: string
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface SubRegion {
  id: number
  name: string
  slug?: string
  description?: string
  hero_image?: string
  region_id?: number
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface MicroDestination {
  id: number
  name: string
  slug?: string
  description?: string
  hero_image?: string
  sub_region_id?: number
  latitude?: number
  longitude?: number
  is_active?: boolean
  display_order?: number
  created_at: string
}

// -----------------------------------------------------------------------------
// PARTNER ENTITIES
// -----------------------------------------------------------------------------

export interface StayPartner {
  id: number
  name: string
  slug?: string
  logo_url?: string
  description?: string
  website_url?: string
  affiliate_url?: string
  brand_color?: string
  tier?: 'mega' | 'boutique' | 'local' // Stay tier grouping
  micro_destination_id?: number
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface Activity {
  id: number
  name: string
  slug?: string
  description?: string
  image_url?: string
  partner_source?: 'viator' | 'getyourguide' | 'local' // Activity source grouping
  affiliate_url?: string
  price_from?: number
  currency?: string
  duration_hours?: number
  micro_destination_id?: number
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface LocalSpecialist {
  id: number
  name: string
  slug?: string
  bio?: string
  photo_url?: string
  specialty?: string
  contact_email?: string
  contact_phone?: string
  micro_destination_id?: number
  is_verified?: boolean
  is_active?: boolean
  display_order?: number
  created_at: string
}

// -----------------------------------------------------------------------------
// USER-RELATED ENTITIES
// -----------------------------------------------------------------------------

export interface ItineraryItem {
  id: number
  name: string
  user_id?: string
  itinerary_day?: number
  item_type?: 'stay' | 'activity' | 'transport' | 'dining' | 'note'
  reference_id?: number // ID of the related entity (stay_partner, activity, etc.)
  reference_type?: string
  start_time?: string
  end_time?: string
  notes?: string
  is_confirmed?: boolean
  display_order?: number
  created_at: string
}

// -----------------------------------------------------------------------------
// JUNCTION TABLE TYPES
// -----------------------------------------------------------------------------

export interface RegionSpecialInterest {
  id: number
  region_id: number
  special_interest_id: number
  is_featured?: boolean
  display_order?: number
  created_at: string
}

// -----------------------------------------------------------------------------
// ENRICHED/JOINED TYPES FOR UI CONSUMPTION
// -----------------------------------------------------------------------------

export interface SpecialInterestWithRegions extends SpecialInterest {
  regions: Region[]
}

export interface RegionWithSubRegions extends Region {
  sub_regions: SubRegion[]
}

export interface SubRegionWithMicroDestinations extends SubRegion {
  micro_destinations: MicroDestination[]
}

export interface MicroDestinationWithDetails extends MicroDestination {
  stay_partners: StayPartner[]
  activities: Activity[]
  local_specialists: LocalSpecialist[]
}

// Full hierarchy type for deep nesting
export interface SpecialInterestHierarchy extends SpecialInterest {
  regions: (Region & {
    sub_regions: (SubRegion & {
      micro_destinations: MicroDestination[]
    })[]
  })[]
}

// -----------------------------------------------------------------------------
// UI-READY GROUPED TYPES
// -----------------------------------------------------------------------------

export interface GroupedStayPartners {
  mega: StayPartner[]
  boutique: StayPartner[]
  local: StayPartner[]
}

export interface GroupedActivities {
  viator: Activity[]
  getyourguide: Activity[]
  local: Activity[]
}

export interface UserItinerary {
  user_id: string
  items: ItineraryItem[]
  total_days: number
}
