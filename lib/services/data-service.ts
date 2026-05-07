import { createClient } from '@/lib/supabase/server'
import type { 
  SpecialInterest, 
  Region, 
  Partner, 
  Well,
  WellWithPartners 
} from '@/lib/types/database'

// =============================================================================
// SPECIAL INTERESTS
// =============================================================================

export async function getSpecialInterests(): Promise<SpecialInterest[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[v0] Error fetching special interests:', error)
    return []
  }
  return data || []
}

export async function getSpecialInterestBySlug(slug: string): Promise<SpecialInterest | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[v0] Error fetching special interest by slug:', error)
    return null
  }
  return data
}

export async function getSpecialInterestById(id: number): Promise<SpecialInterest | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('special_interests')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('[v0] Error fetching special interest by id:', error)
    return null
  }
  return data
}

// =============================================================================
// REGIONS
// =============================================================================

export async function getRegions(): Promise<Region[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[v0] Error fetching regions:', error)
    return []
  }
  return data || []
}

export async function getRegionBySlug(slug: string): Promise<Region | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('regions')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[v0] Error fetching region by slug:', error)
    return null
  }
  return data
}

// =============================================================================
// PARTNERS
// =============================================================================

export async function getPartners(): Promise<Partner[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[v0] Error fetching partners:', error)
    return []
  }
  return data || []
}

export async function getPartnerBySlug(slug: string): Promise<Partner | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[v0] Error fetching partner by slug:', error)
    return null
  }
  return data
}

// =============================================================================
// WELLS (5 Wells: Fly, Stay, Eat, Move, Insure)
// =============================================================================

export async function getWells(): Promise<Well[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('wells')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  if (error) {
    console.error('[v0] Error fetching wells:', error)
    return []
  }
  return data || []
}

export async function getWellBySlug(slug: string): Promise<Well | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('wells')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  
  if (error) {
    console.error('[v0] Error fetching well by slug:', error)
    return null
  }
  return data
}

export async function getWellWithPartners(wellSlug: string): Promise<WellWithPartners | null> {
  const supabase = await createClient()
  
  // First get the well
  const { data: well, error: wellError } = await supabase
    .from('wells')
    .select('*')
    .eq('slug', wellSlug)
    .eq('is_active', true)
    .single()
  
  if (wellError || !well) {
    console.error('[v0] Error fetching well:', wellError)
    return null
  }

  // Then get associated partners via junction table
  const { data: wellPartners, error: partnersError } = await supabase
    .from('well_partners')
    .select(`
      partner_id,
      partner_type,
      display_order,
      partners (*)
    `)
    .eq('well_id', well.id)
    .order('display_order', { ascending: true })

  if (partnersError) {
    console.error('[v0] Error fetching well partners:', partnersError)
    return { ...well, partners: [] }
  }

  // Extract partners from the joined data
  const partners = wellPartners
    ?.map((wp: { partners: Partner }) => wp.partners)
    .filter(Boolean) || []

  return { ...well, partners }
}

// =============================================================================
// REGION-INTEREST RELATIONSHIPS
// =============================================================================

export async function getInterestsByRegion(regionSlug: string): Promise<SpecialInterest[]> {
  const supabase = await createClient()
  
  // First get the region
  const { data: region, error: regionError } = await supabase
    .from('regions')
    .select('id')
    .eq('slug', regionSlug)
    .single()
  
  if (regionError || !region) {
    console.error('[v0] Error fetching region:', regionError)
    return []
  }

  // Then get associated interests via junction table
  const { data: regionInterests, error: interestsError } = await supabase
    .from('region_special_interests')
    .select(`
      special_interest_id,
      is_featured,
      display_order,
      special_interests (*)
    `)
    .eq('region_id', region.id)
    .order('display_order', { ascending: true })

  if (interestsError) {
    console.error('[v0] Error fetching region interests:', interestsError)
    return []
  }

  return regionInterests
    ?.map((ri: { special_interests: SpecialInterest }) => ri.special_interests)
    .filter(Boolean) || []
}
