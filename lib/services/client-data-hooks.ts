'use client'

import useSWR from 'swr'
import { createClient } from '@/lib/supabase/client'
import type { SpecialInterest, Region, Partner, Well } from '@/lib/types/database'

// Generic fetcher for Supabase queries
async function supabaseFetcher<T>(
  table: string,
  options?: { 
    column?: string
    value?: string | number | boolean
    orderBy?: string
    ascending?: boolean
  }
): Promise<T[]> {
  const supabase = createClient()
  let query = supabase.from(table).select('*')
  
  if (options?.column && options?.value !== undefined) {
    query = query.eq(options.column, options.value)
  }
  
  if (options?.orderBy) {
    query = query.order(options.orderBy, { ascending: options.ascending ?? true })
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error(`[v0] Error fetching from ${table}:`, error)
    throw error
  }
  
  return data || []
}

// =============================================================================
// SPECIAL INTERESTS HOOKS
// =============================================================================

export function useSpecialInterests() {
  return useSWR<SpecialInterest[]>(
    'special_interests',
    () => supabaseFetcher<SpecialInterest>('special_interests', {
      column: 'is_active',
      value: true,
      orderBy: 'display_order',
      ascending: true
    }),
    { revalidateOnFocus: false }
  )
}

export function useSpecialInterest(slug: string) {
  return useSWR<SpecialInterest | null>(
    slug ? `special_interests/${slug}` : null,
    async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('special_interests')
        .select('*')
        .eq('slug', slug)
        .single()
      
      if (error) {
        console.error('[v0] Error fetching special interest:', error)
        return null
      }
      return data
    },
    { revalidateOnFocus: false }
  )
}

// =============================================================================
// REGIONS HOOKS
// =============================================================================

export function useRegions() {
  return useSWR<Region[]>(
    'regions',
    () => supabaseFetcher<Region>('regions', {
      column: 'is_active',
      value: true,
      orderBy: 'display_order',
      ascending: true
    }),
    { revalidateOnFocus: false }
  )
}

export function useRegion(slug: string) {
  return useSWR<Region | null>(
    slug ? `regions/${slug}` : null,
    async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('regions')
        .select('*')
        .eq('slug', slug)
        .single()
      
      if (error) {
        console.error('[v0] Error fetching region:', error)
        return null
      }
      return data
    },
    { revalidateOnFocus: false }
  )
}

// =============================================================================
// PARTNERS HOOKS
// =============================================================================

export function usePartners() {
  return useSWR<Partner[]>(
    'partners',
    () => supabaseFetcher<Partner>('partners', {
      column: 'is_active',
      value: true,
      orderBy: 'display_order',
      ascending: true
    }),
    { revalidateOnFocus: false }
  )
}

// =============================================================================
// WELLS HOOKS
// =============================================================================

export function useWells() {
  return useSWR<Well[]>(
    'wells',
    () => supabaseFetcher<Well>('wells', {
      column: 'is_active',
      value: true,
      orderBy: 'display_order',
      ascending: true
    }),
    { revalidateOnFocus: false }
  )
}

export function useWell(slug: string) {
  return useSWR<Well | null>(
    slug ? `wells/${slug}` : null,
    async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('wells')
        .select('*')
        .eq('slug', slug)
        .single()
      
      if (error) {
        console.error('[v0] Error fetching well:', error)
        return null
      }
      return data
    },
    { revalidateOnFocus: false }
  )
}
