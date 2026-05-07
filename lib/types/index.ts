// =============================================================================
// TravelWell OS Types - Barrel Exports
// =============================================================================

export type {
  // Core entities
  SpecialInterest,
  Region,
  SubRegion,
  MicroDestination,
  
  // Partner entities
  StayPartner,
  Activity,
  LocalSpecialist,
  
  // User entities
  ItineraryItem,
  
  // Junction tables
  RegionSpecialInterest,
  
  // Enriched/joined types
  SpecialInterestWithRegions,
  RegionWithSubRegions,
  SubRegionWithMicroDestinations,
  MicroDestinationWithDetails,
  
  // UI-ready grouped types
  GroupedStayPartners,
  GroupedActivities,
  UserItinerary
} from './database'
