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
    guideText: "Explore Places to See, Beach Activities, and Coastal Escapes to find your perfect shoreline paradise...",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=beach&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "adventure",
    title: "Adventure",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80",
    guideText: "Explore Outdoor Adventures, Extreme Sports, and Adrenaline Experiences to ignite your explorer spirit...",
    partnerName: "Viator",
    ctaLabel: "Continue to Viator",
    partnerDeepLink: "https://www.viator.com/tours/Adventure",
    tileImage: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
  },
  {
    id: "culinary",
    title: "Culinary",
    heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    guideText: "Explore Food Tours, Cooking Classes, and Wine Tastings to savor authentic local flavors...",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=food%20tour&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "culture-history",
    title: "Culture & History",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    guideText: "Explore Museums, Historic Sites, and Cultural Landmarks to immerse yourself in heritage...",
    partnerName: "Tiqets",
    ctaLabel: "Continue to Tiqets",
    partnerDeepLink: "https://www.tiqets.com/en/search/?q=museum",
    tileImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
  },
  {
    id: "photography",
    title: "Photography",
    heroImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80",
    guideText: "Explore Photo Tours, Scenic Viewpoints, and Golden Hour Experiences to capture breathtaking moments...",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=photography&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
  },
  {
    id: "wellness",
    title: "Wellness",
    heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80",
    guideText: "Explore Spa Retreats, Yoga Sessions, and Mindfulness Experiences to rejuvenate body and soul...",
    partnerName: "Klook",
    ctaLabel: "Continue to Klook",
    partnerDeepLink: "https://www.klook.com/en-US/search/?keyword=spa",
    tileImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    id: "nightlife",
    title: "Nightlife",
    heroImage: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1600&q=80",
    guideText: "Explore Club Experiences, Bar Crawls, and Evening Entertainment to discover the city after dark...",
    partnerName: "Viator",
    ctaLabel: "Continue to Viator",
    partnerDeepLink: "https://www.viator.com/searchResults/all?text=nightlife",
    tileImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: "romance",
    title: "Romance & Honeymoons",
    heroImage: "https://images.unsplash.com/photo-1529519195486-16945f97b3e1?w=1600&q=80",
    guideText: "Explore Romantic Getaways, Couple Experiences, and Intimate Escapes to celebrate love...",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=romantic&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
  },
  {
    id: "family",
    title: "Family",
    heroImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&q=80",
    guideText: "Explore Family Activities, Kid-Friendly Tours, and Theme Parks to create lasting memories together...",
    partnerName: "GetYourGuide",
    ctaLabel: "Continue to GetYourGuide",
    partnerDeepLink: "https://www.getyourguide.com/s/?q=family&searchSource=3",
    tileImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
  },
  {
    id: "winter-ski",
    title: "Winter & Ski",
    heroImage: "https://images.unsplash.com/photo-1520443240718-fce21901db79?w=1600&q=80",
    guideText: "Explore Ski Resorts, Winter Sports, and Alpine Adventures to embrace the magic of snow...",
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
