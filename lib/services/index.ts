// =============================================================================
// TravelWell OS Services - Barrel Exports
// =============================================================================

// Server-side data fetching functions
export {
  // Special Interests
  fetchSpecialInterests,
  fetchSpecialInterestBySlug,
  fetchSpecialInterestById,
  fetchSpecialInterestWithRegions,
  
  // Regions
  fetchRegionsBySpecialInterest,
  fetchRegionBySlug,
  fetchAllRegions,
  fetchRegionWithSubRegions,
  
  // Sub-Regions
  fetchSubRegionsByRegion,
  fetchSubRegionBySlug,
  fetchSubRegionWithMicroDestinations,
  
  // Micro-Destinations
  fetchMicroDestinationsBySubRegion,
  fetchMicroDestinationBySlug,
  fetchMicroDestinationWithDetails,
  
  // Stay Partners
  fetchStayPartnersByMicroDestination,
  
  // Activities
  fetchActivitiesByMicroDestination,
  
  // Local Specialists
  fetchLocalSpecialistsByMicroDestination,
  
  // Itinerary
  fetchItineraryByUser,
  addItineraryItem,
  removeItineraryItem
} from './data-service'

// Data transformation functions
export {
  // Stay Partner transformations
  groupStayPartnersByTier,
  sortStayPartnersByOrder,
  filterStayPartnersByDestination,
  
  // Activity transformations
  groupActivitiesBySource,
  sortActivitiesByPrice,
  sortActivitiesByDuration,
  filterActivitiesByPriceRange,
  
  // Partner transformations
  combinePartnersAndSpecialists,
  
  // Hierarchy transformations
  buildHierarchyBreadcrumb,
  flattenHierarchy,
  
  // Itinerary transformations
  groupItineraryByDay,
  transformToUserItinerary,
  calculateItineraryStats,
  
  // UI formatting helpers
  formatPrice,
  formatDuration,
  generateSlug
} from './data-transformers'

// Client-side hooks (for components that need real-time data)
export {
  useSpecialInterests,
  useSpecialInterest,
  useRegions,
  usePartners,
  useWells
} from './client-data-hooks'

// Re-export types for convenience
export type {
  SpecialInterest,
  Region,
  SubRegion,
  MicroDestination,
  StayPartner,
  Activity,
  LocalSpecialist,
  ItineraryItem,
  RegionSpecialInterest,
  SpecialInterestWithRegions,
  RegionWithSubRegions,
  SubRegionWithMicroDestinations,
  MicroDestinationWithDetails,
  GroupedStayPartners,
  GroupedActivities,
  UserItinerary
} from '@/lib/types/database'
