// Special Interests CMS/Data Structure
// Each interest has its own hero, guidance text, and partner deep link

export interface SpecialInterest {
  id: string
  title: string
  heroImage: string
  guideText: string
  partnerName: string
  ctaLabel: string
  partnerDeepLink: string
  // Tile image for discover page
  tileImage: string
}

export const specialInterestsData: SpecialInterest[] = [
  {
    id: "beaches",
    title: "Beaches",
    heroImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=80",
    guideText: "Explore Places to See, Things to Do, and Trip Inspiration — the fastest way to unlock the best beach experiences.",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=beach&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "adventure",
    title: "Adventure",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    guideText: "Start with Choose Activity and Choose Destination — the quickest way to find top adventure tours.",
    partnerName: "Viator",
    ctaLabel: "Continue to Viator",
    partnerDeepLink: "https://www.viator.com/tours/Adventure",
    tileImage: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
  },
  {
    id: "culinary",
    title: "Culinary",
    heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    guideText: "Start with Choose Activity and Choose Destination to explore the best food tours and tastings.",
    partnerName: "Viator",
    ctaLabel: "Continue to Viator",
    partnerDeepLink: "https://www.viator.com/searchResults/all?text=food%20tour",
    tileImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "culture-history",
    title: "Culture & History",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    guideText: "Start with Choose Activity and Choose Destination to discover cultural tours and historic experiences.",
    partnerName: "Viator",
    ctaLabel: "Continue to Viator",
    partnerDeepLink: "https://www.viator.com/searchResults/all?text=cultural%20tour",
    tileImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
  },
  {
    id: "photography",
    title: "Photography",
    heroImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80",
    guideText: "Explore Places to See, Things to Do, and Trip Inspiration — perfect for photographers seeking iconic shots.",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=photography&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  },
  {
    id: "wellness",
    title: "Wellness",
    heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80",
    guideText: "Explore Retreat Types, Destinations, and Dates to find your perfect wellness escape.",
    partnerName: "BookRetreats",
    ctaLabel: "Continue to BookRetreats",
    partnerDeepLink: "https://www.bookretreats.com/",
    tileImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    id: "nightlife",
    title: "Nightlife",
    heroImage: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80",
    guideText: "Explore Places to See, Things to Do, and Trip Inspiration — the best way to dive into nightlife experiences.",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=nightlife&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: "romance",
    title: "Romance & Honeymoons",
    heroImage: "https://images.unsplash.com/photo-1529519195486-16945f97b3e1?w=1600&q=80",
    guideText: "Explore Places to See, Things to Do, and Trip Inspiration — perfect for romantic escapes.",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=romantic&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
  },
  {
    id: "family",
    title: "Family",
    heroImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&q=80",
    guideText: "Explore Places to See, Things to Do, and Trip Inspiration — ideal for family-friendly adventures.",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=family&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  },
  {
    id: "winter-ski",
    title: "Winter & Ski",
    heroImage: "https://images.unsplash.com/photo-1520443240718-fce21901db79?w=1600&q=80",
    guideText: "Explore Ski Packages, Resorts, and Mountain Destinations for the perfect winter escape.",
    partnerName: "Ski.com",
    ctaLabel: "Continue to Ski.com",
    partnerDeepLink: "https://www.ski.com/",
    tileImage: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
  },
]

// Helper to get a special interest by ID
export function getSpecialInterestById(id: string): SpecialInterest | undefined {
  return specialInterestsData.find((interest) => interest.id === id)
}

// Signature intro copy - same across all pages
export const signatureIntroCopy = `Choose your adventures and your destinations — and we'll turn your dream vacation into a magnificent journey.

This is where the fun begins, and your Worlds of Adventures start to come alive!`
