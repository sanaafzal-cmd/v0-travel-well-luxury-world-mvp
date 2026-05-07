// Server-side data services (use in Server Components, Route Handlers, Server Actions)
export {
  getSpecialInterests,
  getSpecialInterestBySlug,
  getSpecialInterestById,
  getRegions,
  getRegionBySlug,
  getPartners,
  getPartnerBySlug,
  getWells,
  getWellBySlug,
  getWellWithPartners,
  getInterestsByRegion,
} from './data-service'

// Re-export types for convenience
export type {
  SpecialInterest,
  Region,
  Partner,
  Well,
  WellWithPartners,
  RegionWithInterests,
  SpecialInterestWithDetails,
} from '@/lib/types/database'
