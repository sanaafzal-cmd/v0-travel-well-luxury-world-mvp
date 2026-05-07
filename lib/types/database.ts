// TravelWell Database Types
// Matches Supabase schema for type-safe queries

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

export interface Partner {
  id: number
  name: string
  slug?: string
  logo_url?: string
  description?: string
  website_url?: string
  affiliate_url?: string
  brand_color?: string
  regions?: string
  is_active?: boolean
  display_order?: number
  created_at: string
}

export interface Well {
  id: number
  name: string
  slug?: string
  description?: string
  icon?: string
  hero_image?: string
  is_active?: boolean
  display_order?: number
  created_at: string
}

// Junction table types
export interface RegionSpecialInterest {
  id: number
  region_id: number
  special_interest_id: number
  is_featured?: boolean
  display_order?: number
  created_at: string
}

export interface WellPartner {
  id: number
  well_id: number
  partner_id: number
  partner_type?: string
  display_order?: number
  created_at: string
}

// Joined/enriched types for UI consumption
export interface SpecialInterestWithDetails extends SpecialInterest {
  regions?: Region[]
}

export interface RegionWithInterests extends Region {
  special_interests?: SpecialInterest[]
}

export interface WellWithPartners extends Well {
  partners?: Partner[]
}
