// Monetization data - Single source of truth for affiliate partnerships
// Data from CJ Affiliate + Amazon partner matrix

export interface AffiliatePartner {
  commissionRange: string
  partners: string[]
  source: string
}

export interface WellPopup {
  title: string
  description: string
  commissionRange: string
  partners: string[]
  credibilityLine: string
}

export const affiliatePartners: Record<string, AffiliatePartner> = {
  "Stay-Well": {
    commissionRange: "3–10%",
    partners: [
      "Fairmont",
      "Sofitel",
      "Raffles",
      "InterContinental",
      "Kimpton",
      "Hyatt",
      "Preferred Hotels",
      "Langham"
    ],
    source: "CJ Affiliate"
  },
  "Eat-Well": {
    commissionRange: "5–20%",
    partners: [
      "OpenTable",
      "Viator",
      "GetYourGuide",
      "Wine.com",
      "Goldbelly"
    ],
    source: "CJ Affiliate"
  },
  "Move-Well": {
    commissionRange: "4–10%",
    partners: [
      "Sixt",
      "Hertz",
      "Avis",
      "Europcar",
      "Blacklane",
      "Welcome Pickups"
    ],
    source: "CJ Affiliate"
  },
  "Activity-Well": {
    commissionRange: "10–20%",
    partners: [
      "Viator",
      "GetYourGuide",
      "Tiqets",
      "Luxury Escapes"
    ],
    source: "CJ Affiliate"
  },
  "Experience-Well": {
    commissionRange: "5–20%",
    partners: [
      "Ticketmaster",
      "Tiqets",
      "Saks Fifth Avenue",
      "Neiman Marcus",
      "Nordstrom"
    ],
    source: "CJ Affiliate"
  }
}

export const popups: Record<string, WellPopup> = {
  "Stay-Well": {
    title: "Luxury Hotels",
    description: "TravelWell earns on luxury hotel bookings through our CJ Affiliate partners.",
    commissionRange: "3–10%",
    partners: ["Fairmont", "Sofitel", "InterContinental", "Kimpton", "Hyatt", "Preferred Hotels", "Langham"],
    credibilityLine: "These are real commission ranges from our live CJ program. Global expansion will unlock region-specific luxury hotel partners across 9+ languages."
  },
  "Eat-Well": {
    title: "Fine Dining & Culinary",
    description: "TravelWell earns on premium dining experiences, wine tastings, and culinary tours through CJ partners.",
    commissionRange: "5–20%",
    partners: ["OpenTable", "Viator", "GetYourGuide", "Wine.com", "Goldbelly"],
    credibilityLine: "These ranges reflect real CJ commission structures. Global dining partners will be added as we expand into additional regions."
  },
  "Move-Well": {
    title: "Luxury Transport",
    description: "TravelWell earns on luxury car rentals and private driver services through CJ partners.",
    commissionRange: "4–10%",
    partners: ["Sixt", "Hertz", "Avis", "Europcar", "Blacklane", "Welcome Pickups"],
    credibilityLine: "These are real commission ranges from our CJ integration. Premium airline partners provide additional credibility for future expansion."
  },
  "Activity-Well": {
    title: "Premium Experiences",
    description: "TravelWell earns on premium experiences such as private tours, yacht charters, spa days, and cultural excursions.",
    commissionRange: "10–20%",
    partners: ["Viator", "GetYourGuide", "Tiqets", "Luxury Escapes"],
    credibilityLine: "These are among the highest-margin categories in luxury travel. Global expansion will unlock region-specific premium experiences."
  },
  "Experience-Well": {
    title: "VIP Access & Luxury Events",
    description: "TravelWell earns on VIP tours, premium events, and luxury add-ons through CJ partners.",
    commissionRange: "5–20%",
    partners: ["Ticketmaster", "Tiqets", "Saks Fifth Avenue", "Neiman Marcus", "Nordstrom"],
    credibilityLine: "These commission ranges come directly from our CJ Affiliate program. Future global partners will be added as we expand into 9+ languages."
  }
}

// Helper to get commission range for a category
export function getCommissionRange(category: string): string {
  // Normalize category name
  const normalizedCategory = category.replace(/\s+/g, '-')
  
  // Map from data.ts category names to monetization keys
  const categoryMap: Record<string, string> = {
    'Stay-Well': 'Stay-Well',
    'Eat-Well': 'Eat-Well',
    'Move-Well': 'Move-Well',
    'Activity-Well': 'Activity-Well',
    'Experience-Well': 'Experience-Well',
    'NightLife-Well': 'Experience-Well', // Fallback
  }
  
  const key = categoryMap[normalizedCategory] || categoryMap[category]
  return affiliatePartners[key]?.commissionRange || '5–15%'
}

// Helper to get popup data for a category
export function getPopupData(categoryId: string): WellPopup | null {
  // Map from category IDs to Well names
  const idToWell: Record<string, string> = {
    'stay-well': 'Stay-Well',
    'eat-well': 'Eat-Well',
    'move-well': 'Move-Well',
    'activity-well': 'Activity-Well',
    'experience-well': 'Experience-Well',
  }
  
  const wellName = idToWell[categoryId]
  return wellName ? popups[wellName] : null
}
