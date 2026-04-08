// Monetization data for TravelWell LuxuryWorld MVP
// Single source of truth for affiliate partners and popup content

export type WellCategory = 'Stay-Well' | 'Eat-Well' | 'Move-Well' | 'Activity-Well' | 'Experience-Well'

export interface AffiliatePartner {
  commissionRange: string
  partners: string[]
  source: string
}

export interface PopupContent {
  title: string
  description: string
  commissionRange: string
  partners: string[]
  credibilityLine: string
}

export const affiliatePartners: Record<WellCategory, AffiliatePartner> = {
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

export const popups: Record<WellCategory, PopupContent> = {
  "Stay-Well": {
    title: "Luxury Hotels",
    description: "TravelWell earns commission on luxury hotel bookings through our curated affiliate partnerships, ensuring you receive only the finest accommodations.",
    commissionRange: "3–10%",
    partners: ["Fairmont", "Sofitel", "Raffles", "InterContinental", "Kimpton", "Hyatt", "Preferred Hotels", "Langham"],
    credibilityLine: "Integrated with CJ Affiliate network. Future expansion into 9+ languages and regional luxury hotel partners."
  },
  "Eat-Well": {
    title: "Fine Dining & Culinary Experiences",
    description: "TravelWell earns commission on premium dining experiences, wine tastings, and culinary tours through our trusted partners.",
    commissionRange: "5–20%",
    partners: ["OpenTable", "Viator", "GetYourGuide", "Wine.com", "Goldbelly"],
    credibilityLine: "Real commission structures from CJ Affiliate. Global dining partners expanding across regions."
  },
  "Move-Well": {
    title: "Luxury Transport",
    description: "TravelWell earns commission on luxury car rentals and private driver services, ensuring seamless travel between experiences.",
    commissionRange: "4–10%",
    partners: ["Sixt", "Hertz", "Avis", "Europcar", "Blacklane", "Welcome Pickups"],
    credibilityLine: "Premium airline partners (Qatar, Etihad, Lufthansa) provide additional credibility for future expansion."
  },
  "Activity-Well": {
    title: "Premium Experiences",
    description: "TravelWell earns commission on premium experiences including private tours, yacht charters, spa days, and cultural excursions.",
    commissionRange: "10–20%",
    partners: ["Viator", "GetYourGuide", "Tiqets", "Luxury Escapes"],
    credibilityLine: "Highest-margin categories in luxury travel. Global expansion unlocks region-specific premium experiences."
  },
  "Experience-Well": {
    title: "VIP Access & Luxury Events",
    description: "TravelWell earns commission on VIP tours, premium events, and luxury add-ons that elevate every journey.",
    commissionRange: "5–20%",
    partners: ["Ticketmaster", "Tiqets", "Saks Fifth Avenue", "Neiman Marcus", "Nordstrom"],
    credibilityLine: "Commission ranges from CJ Affiliate program. Future global partners expanding into 9+ languages."
  }
}

// Helper to get commission range for a category
export function getCommissionRange(category: string): string {
  const wellCategory = category as WellCategory
  return affiliatePartners[wellCategory]?.commissionRange || "4–12%"
}

// Helper to map category ID to Well name
export function categoryIdToWellName(categoryId: string): WellCategory {
  const mapping: Record<string, WellCategory> = {
    'stay-well': 'Stay-Well',
    'eat-well': 'Eat-Well',
    'move-well': 'Move-Well',
    'activity-well': 'Activity-Well',
    'experience-well': 'Experience-Well'
  }
  return mapping[categoryId] || 'Activity-Well'
}
