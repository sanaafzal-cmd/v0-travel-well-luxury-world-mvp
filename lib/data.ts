// Mock data for TravelWell LuxuryWorld

export type BudgetTier = 'luxury' | 'high-end' | 'mid-range' | 'family-friendly' | 'budget-conscious'

export interface IdentityOption {
  id: string
  title: string
  subtitle: string
  image: string
  tier?: BudgetTier
}

export interface IdentityStepData {
  id: number
  question: string
  subtitle: string
  options: IdentityOption[]
  isBudgetTier?: boolean
}

export const budgetTierLabels: Record<BudgetTier, { label: string; tag: string }> = {
  'luxury': { label: 'Luxury', tag: 'Exclusive' },
  'high-end': { label: 'High End', tag: 'Premium' },
  'mid-range': { label: 'Mid-Range', tag: 'Curated' },
  'family-friendly': { label: 'Family Friendly', tag: 'Family Pick' },
  'budget-conscious': { label: 'Budget Conscious', tag: 'Value' },
}

export const identitySteps: IdentityStepData[] = [
  {
    id: 1,
    question: "What defines your ideal escape?",
    subtitle: "Select the atmosphere that speaks to your soul",
    options: [
      { id: "1a", title: "Coastal Serenity", subtitle: "Ocean waves & horizon views", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" },
      { id: "1b", title: "Mountain Retreat", subtitle: "Alpine air & majestic peaks", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" },
      { id: "1c", title: "Urban Sophistication", subtitle: "City lights & culture", image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80" },
      { id: "1d", title: "Desert Mystique", subtitle: "Endless sands & starlit skies", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80" },
      { id: "1e", title: "Tropical Paradise", subtitle: "Lush greenery & warmth", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80" },
    ]
  },
  {
    id: 2,
    question: "How do you prefer to travel?",
    subtitle: "Your journey style defines your experience",
    options: [
      { id: "2a", title: "Solo Explorer", subtitle: "Freedom & self-discovery", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" },
      { id: "2b", title: "Romantic Duo", subtitle: "Intimate moments together", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80" },
      { id: "2c", title: "Family Journey", subtitle: "Creating lasting memories", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" },
      { id: "2d", title: "Friends Getaway", subtitle: "Adventure with companions", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80" },
      { id: "2e", title: "Multi-generational", subtitle: "Connecting across ages", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" },
    ]
  },
  {
    id: 3,
    question: "What pace suits you best?",
    subtitle: "Find your rhythm of travel",
    options: [
      { id: "3a", title: "Leisurely Slow", subtitle: "Savor every moment", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
      { id: "3b", title: "Balanced Flow", subtitle: "Mix of rest & exploration", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "3c", title: "Active Discovery", subtitle: "Packed with experiences", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
      { id: "3d", title: "Wellness Focus", subtitle: "Rejuvenation & healing", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
      { id: "3e", title: "Spontaneous", subtitle: "Go with the flow", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" },
    ]
  },
  {
    id: 4,
    question: "What culinary journey excites you?",
    subtitle: "Taste is a gateway to culture",
    options: [
      { id: "4a", title: "Fine Dining", subtitle: "Michelin stars & artistry", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
      { id: "4b", title: "Local Authentic", subtitle: "Street food & markets", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" },
      { id: "4c", title: "Farm to Table", subtitle: "Fresh & sustainable", image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80" },
      { id: "4d", title: "Coastal Fresh", subtitle: "Seafood & ocean views", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" },
      { id: "4e", title: "Private Chef", subtitle: "Exclusive & personalized", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" },
    ]
  },
  {
    id: 5,
    question: "What experiences move you?",
    subtitle: "Moments that become memories",
    options: [
      { id: "5a", title: "Cultural Immersion", subtitle: "Art, history & heritage", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" },
      { id: "5b", title: "Nature & Wildlife", subtitle: "Earth's wonders", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80" },
      { id: "5c", title: "Spa & Wellness", subtitle: "Mind, body & spirit", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
      { id: "5d", title: "Adventure Sports", subtitle: "Thrill & adrenaline", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80" },
      { id: "5e", title: "Culinary Tours", subtitle: "Taste your way through", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80" },
    ]
  },
  {
    id: 6,
    question: "What ambiance suits your evenings?",
    subtitle: "As the sun sets, the magic begins",
    options: [
      { id: "6a", title: "Rooftop Lounges", subtitle: "City skyline & cocktails", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80" },
      { id: "6b", title: "Beach Bonfires", subtitle: "Stars & ocean sounds", image: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=800&q=80" },
      { id: "6c", title: "Private Dining", subtitle: "Intimate & exclusive", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
      { id: "6d", title: "Live Performance", subtitle: "Music & theater", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80" },
      { id: "6e", title: "Quiet Retreat", subtitle: "Early nights & rest", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
    ]
  },
  {
    id: 7,
    question: "What level of travel experience do you prefer?",
    subtitle: "Your journey, your style",
    isBudgetTier: true,
    options: [
      { id: "7a", title: "Luxury", subtitle: "The pinnacle of refinement", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", tier: "luxury" as BudgetTier },
      { id: "7b", title: "High End", subtitle: "Elevated experiences with style", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", tier: "high-end" as BudgetTier },
      { id: "7c", title: "Mid-Range", subtitle: "Quality and comfort, balanced", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", tier: "mid-range" as BudgetTier },
      { id: "7d", title: "Family Friendly", subtitle: "Memorable moments for all ages", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80", tier: "family-friendly" as BudgetTier },
      { id: "7e", title: "Budget Conscious", subtitle: "Smart choices, great experiences", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", tier: "budget-conscious" as BudgetTier },
    ]
  },
]

export interface CategoryData {
  id: string
  name: string
  subtitle: string
  icon: string
  options: CategoryOption[]
}

export interface CategoryOption {
  id: string
  title: string
  subtitle: string
  image: string
  rating: number
  priceLevel: string
  tier?: BudgetTier
  tierTag?: string
}

export const categories: CategoryData[] = [
  {
    id: "stay-well",
    name: "Stay-Well",
    subtitle: "Where dreams rest",
    icon: "bed",
    options: [
      { id: "s1", title: "Aman Tokyo", subtitle: "Urban sanctuary in the clouds", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "s2", title: "Four Seasons Bali", subtitle: "Tropical elegance", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "s3", title: "Rosewood Paris", subtitle: "Parisian grandeur", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "s4", title: "Kimpton Hotels", subtitle: "Boutique comfort for families", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "s5", title: "Mandarin Oriental", subtitle: "Legendary Asian hospitality", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "s6", title: "Hyatt Regency", subtitle: "Reliable comfort worldwide", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "s7", title: "Generator Hostels", subtitle: "Social stays, smart prices", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", rating: 4, priceLevel: "$$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "eat-well",
    name: "Eat-Well",
    subtitle: "Culinary excellence",
    icon: "utensils",
    options: [
      { id: "e1", title: "Eleven Madison Park", subtitle: "Plant-forward fine dining", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "e2", title: "Narisawa", subtitle: "Innovative Japanese cuisine", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "e3", title: "Osteria Francescana", subtitle: "Italian artistry", image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "e4", title: "Local Trattorias", subtitle: "Authentic neighborhood gems", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "e5", title: "Family Table", subtitle: "Kid-approved dining", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80", rating: 4, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "e6", title: "Street Food Tours", subtitle: "Flavor without the price tag", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "activity-well",
    name: "Activity-Well",
    subtitle: "Experiences that transform",
    icon: "compass",
    options: [
      { id: "a1", title: "Private Yacht Charter", subtitle: "Sail the Mediterranean", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "a2", title: "Hot Air Balloon", subtitle: "Sunrise over Cappadocia", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "a3", title: "Private Art Tour", subtitle: "Behind the scenes at the Louvre", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "a4", title: "Theme Park Adventure", subtitle: "Fun for the whole family", image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80", rating: 5, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "a5", title: "Walking Food Tours", subtitle: "Taste the city on foot", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "nightlife-well",
    name: "NightLife-Well",
    subtitle: "After dark elegance",
    icon: "moon",
    options: [
      { id: "n1", title: "Skybar Bangkok", subtitle: "Rooftop cocktails", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "n2", title: "Jazz at Lincoln Center", subtitle: "World-class performances", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "n3", title: "Live Music Venues", subtitle: "Local bands & atmosphere", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "n4", title: "Family Night Shows", subtitle: "Entertainment for all ages", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80", rating: 4, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "n5", title: "Night Markets", subtitle: "Street vibes after dark", image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "move-well",
    name: "Move-Well",
    subtitle: "Travel in style",
    icon: "car",
    options: [
      { id: "m1", title: "Private Jet", subtitle: "Ultimate freedom", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "m2", title: "Luxury Car Service", subtitle: "Chauffeur-driven elegance", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "m3", title: "First Class Rail", subtitle: "Scenic luxury journeys", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "m4", title: "Family Van Rental", subtitle: "Space for everyone", image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80", rating: 4, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "m5", title: "Public Transit Pass", subtitle: "Navigate like a local", image: "https://images.unsplash.com/photo-1534321238895-da3ab632df3e?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
]

export interface ItineraryActivity {
  id: string
  time: string
  title: string
  location: string
  category: string
  image: string
  price?: number
  commission?: string
  badges?: string[]
  walkingIntensity?: 'low' | 'moderate' | 'high'
  transportIncluded?: boolean
  accessible?: boolean
}

export interface ItineraryDay {
  day: number
  date: string
  morning: ItineraryActivity[]
  afternoon: ItineraryActivity[]
  evening: ItineraryActivity[]
}

export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    date: "Monday, March 15",
    morning: [
      { id: "d1m1", time: "08:00", title: "Arrival & Private Transfer", location: "Narita International Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", price: 450, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d1m2", time: "10:30", title: "Hotel Check-in", location: "Aman Tokyo, Otemachi", category: "Stay-Well", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", price: 2400, commission: "10-15%", badges: ["Stroller Friendly"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d1a1", time: "13:00", title: "Private Sushi Omakase", location: "Sukiyabashi Jiro", category: "Eat-Well", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80", price: 800, commission: "5-8%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d1a2", time: "15:30", title: "Imperial Palace Gardens", location: "Chiyoda, Tokyo", category: "Activity-Well", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80", price: 150, commission: "12-18%", badges: ["Low Walking", "Senior Friendly"], walkingIntensity: "low", accessible: true },
    ],
    evening: [
      { id: "d1e1", time: "19:00", title: "Rooftop Kaiseki Dinner", location: "Aman Tokyo Restaurant", category: "Eat-Well", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", price: 650, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 2,
    date: "Tuesday, March 16",
    morning: [
      { id: "d2m1", time: "07:00", title: "Meditation at Senso-ji", location: "Asakusa Temple", category: "Activity-Well", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", price: 200, commission: "15-20%", badges: ["Senior Friendly", "Low Walking"], walkingIntensity: "low", accessible: true },
      { id: "d2m2", time: "09:30", title: "Traditional Breakfast", location: "Tsukiji Outer Market", category: "Eat-Well", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", price: 120, commission: "8-10%", badges: ["Kid Friendly"], walkingIntensity: "moderate" },
    ],
    afternoon: [
      { id: "d2a1", time: "12:00", title: "Private Tea Ceremony", location: "Happo-en Garden", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80", price: 350, commission: "12-15%", badges: ["Seated Activity", "Kid Friendly"], walkingIntensity: "low" },
      { id: "d2a2", time: "15:00", title: "Ginza Shopping Experience", location: "Ginza District", category: "Activity-Well", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80", price: 0, commission: "0%", badges: ["Teen Friendly"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d2e1", time: "18:30", title: "Wagyu Tasting Experience", location: "Ukai-tei Omotesando", category: "Eat-Well", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", price: 550, commission: "8-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d2e2", time: "21:00", title: "Tokyo Tower Night View", location: "Minato City", category: "NightLife-Well", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", price: 80, commission: "15-20%", badges: ["Kid Friendly", "Senior Friendly"], walkingIntensity: "low", accessible: true },
    ]
  },
  {
    day: 3,
    date: "Wednesday, March 17",
    morning: [
      { id: "d3m1", time: "08:30", title: "Bullet Train to Kyoto", location: "Tokyo Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", price: 280, commission: "5-8%", badges: ["Transport Included", "Stroller Friendly"], walkingIntensity: "low", transportIncluded: true },
      { id: "d3m2", time: "11:00", title: "Kyoto Arrival", location: "Kyoto Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 150, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
    ],
    afternoon: [
      { id: "d3a1", time: "12:30", title: "Lunch at Kikunoi", location: "Higashiyama, Kyoto", category: "Eat-Well", image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80", price: 450, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d3a2", time: "15:00", title: "Kinkaku-ji Temple", location: "Golden Pavilion", category: "Activity-Well", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80", price: 100, commission: "18-22%", badges: ["Low Walking", "Kid Friendly"], walkingIntensity: "low", accessible: true },
    ],
    evening: [
      { id: "d3e1", time: "17:30", title: "Geisha District Walk", location: "Gion, Kyoto", category: "Activity-Well", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80", price: 200, commission: "15-18%", badges: ["Teen Friendly"], walkingIntensity: "moderate" },
      { id: "d3e2", time: "19:30", title: "Private Ryokan Dinner", location: "Gion Hatanaka", category: "Stay-Well", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", price: 1800, commission: "12-15%", badges: ["Seated Activity", "Senior Friendly"], walkingIntensity: "low" },
    ]
  },
  {
    day: 4,
    date: "Thursday, March 18",
    morning: [
      { id: "d4m1", time: "06:00", title: "Fushimi Inari Sunrise", location: "Fushimi Inari Shrine", category: "Activity-Well", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80", price: 0, commission: "0%", badges: ["Teen Friendly"], walkingIntensity: "high" },
      { id: "d4m2", time: "09:00", title: "Traditional Japanese Breakfast", location: "Gion Hatanaka", category: "Eat-Well", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", price: 80, commission: "8-10%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d4a1", time: "11:00", title: "Bamboo Grove Walk", location: "Arashiyama", category: "Activity-Well", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80", price: 50, commission: "20-25%", badges: ["Kid Friendly", "Stroller Friendly"], walkingIntensity: "moderate", accessible: true },
      { id: "d4a2", time: "14:00", title: "Monkey Park Visit", location: "Iwatayama", category: "Activity-Well", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", price: 80, commission: "15-18%", badges: ["Kid Friendly", "Teen Friendly"], walkingIntensity: "high" },
    ],
    evening: [
      { id: "d4e1", time: "17:00", title: "Boat Ride on Hozu River", location: "Arashiyama", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", price: 200, commission: "12-15%", badges: ["Seated Activity", "Senior Friendly"], walkingIntensity: "low", accessible: true },
      { id: "d4e2", time: "19:30", title: "Tofu Kaiseki Dinner", location: "Shoraian Restaurant", category: "Eat-Well", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", price: 280, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 5,
    date: "Friday, March 19",
    morning: [
      { id: "d5m1", time: "08:00", title: "Private Transfer to Nara", location: "Kyoto", category: "Move-Well", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", price: 180, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d5m2", time: "09:30", title: "Todai-ji Temple", location: "Nara Park", category: "Activity-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 100, commission: "18-20%", badges: ["Kid Friendly", "Senior Friendly"], walkingIntensity: "moderate", accessible: true },
    ],
    afternoon: [
      { id: "d5a1", time: "12:00", title: "Deer Park Experience", location: "Nara Park", category: "Activity-Well", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", price: 20, commission: "25-30%", badges: ["Kid Friendly", "Stroller Friendly"], walkingIntensity: "low", accessible: true },
      { id: "d5a2", time: "14:30", title: "Lunch at Naramachi", location: "Traditional District", category: "Eat-Well", image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80", price: 120, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d5e1", time: "17:00", title: "Return to Osaka", location: "Nara Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", price: 80, commission: "5-8%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d5e2", time: "19:00", title: "Dotonbori Night Walk", location: "Osaka", category: "NightLife-Well", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", price: 0, commission: "0%", badges: ["Teen Friendly", "Kid Friendly"], walkingIntensity: "moderate" },
      { id: "d5e3", time: "20:30", title: "Street Food Tasting", location: "Dotonbori", category: "Eat-Well", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", price: 80, commission: "8-10%", badges: ["Kid Friendly"], walkingIntensity: "low" },
    ]
  },
  {
    day: 6,
    date: "Saturday, March 20",
    morning: [
      { id: "d6m1", time: "09:00", title: "Osaka Castle Visit", location: "Chuo Ward", category: "Activity-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 100, commission: "18-20%", badges: ["Kid Friendly"], walkingIntensity: "moderate" },
      { id: "d6m2", time: "11:30", title: "Kuromon Market", location: "Osaka", category: "Activity-Well", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", price: 50, commission: "15-18%", badges: ["Kid Friendly", "Teen Friendly"], walkingIntensity: "moderate" },
    ],
    afternoon: [
      { id: "d6a1", time: "13:30", title: "Takoyaki Cooking Class", location: "Osaka", category: "Activity-Well", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", price: 150, commission: "12-15%", badges: ["Kid Friendly", "Teen Friendly", "Seated Activity"], walkingIntensity: "low" },
      { id: "d6a2", time: "16:00", title: "Shinsaibashi Shopping", location: "Osaka", category: "Activity-Well", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80", price: 0, commission: "0%", badges: ["Teen Friendly"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d6e1", time: "18:30", title: "Michelin Star Kappo", location: "Kashiwaya Osaka", category: "Eat-Well", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", price: 600, commission: "8-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d6e2", time: "21:30", title: "Jazz Bar Experience", location: "Osaka", category: "NightLife-Well", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", price: 100, commission: "15-18%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 7,
    date: "Sunday, March 21",
    morning: [
      { id: "d7m1", time: "08:00", title: "Flight to Okinawa", location: "Kansai Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", price: 350, commission: "5-8%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d7m2", time: "11:00", title: "Resort Check-in", location: "Busena Marine Park", category: "Stay-Well", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", price: 800, commission: "10-15%", badges: ["Stroller Friendly", "Senior Friendly"], walkingIntensity: "low", accessible: true },
    ],
    afternoon: [
      { id: "d7a1", time: "13:00", title: "Beachside Lunch", location: "Resort Restaurant", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 180, commission: "10-12%", badges: ["Kid Friendly", "Seated Activity"], walkingIntensity: "low" },
      { id: "d7a2", time: "15:00", title: "Snorkeling Experience", location: "Busena Beach", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", price: 200, commission: "15-18%", badges: ["Kid Friendly", "Teen Friendly"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d7e1", time: "18:00", title: "Sunset Cruise", location: "Okinawa Coast", category: "Activity-Well", image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80", price: 250, commission: "12-15%", badges: ["Senior Friendly", "Seated Activity"], walkingIntensity: "low", accessible: true },
      { id: "d7e2", time: "20:00", title: "Okinawan Ryukyu Cuisine", location: "Resort Fine Dining", category: "Eat-Well", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", price: 350, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 8,
    date: "Monday, March 22",
    morning: [
      { id: "d8m1", time: "08:00", title: "Spa & Wellness Morning", location: "Resort Spa", category: "Activity-Well", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", price: 400, commission: "15-20%", badges: ["Senior Friendly", "Seated Activity"], walkingIntensity: "low" },
      { id: "d8m2", time: "11:00", title: "Pool & Relaxation", location: "Resort Infinity Pool", category: "Activity-Well", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", price: 0, commission: "0%", badges: ["Kid Friendly", "Senior Friendly"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d8a1", time: "13:00", title: "Sushi Making Class", location: "Resort Kitchen", category: "Activity-Well", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", price: 180, commission: "12-15%", badges: ["Kid Friendly", "Teen Friendly", "Seated Activity"], walkingIntensity: "low" },
      { id: "d8a2", time: "16:00", title: "Churaumi Aquarium", location: "Motobu", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", price: 120, commission: "18-22%", badges: ["Kid Friendly", "Senior Friendly", "Stroller Friendly"], walkingIntensity: "moderate", accessible: true },
    ],
    evening: [
      { id: "d8e1", time: "19:00", title: "Private Beach BBQ", location: "Resort Beach", category: "Eat-Well", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", price: 280, commission: "10-12%", badges: ["Kid Friendly", "Teen Friendly"], walkingIntensity: "low" },
    ]
  },
  {
    day: 9,
    date: "Tuesday, March 23",
    morning: [
      { id: "d9m1", time: "07:00", title: "Sunrise Yoga", location: "Resort Beach", category: "Activity-Well", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80", price: 80, commission: "18-22%", badges: ["Senior Friendly"], walkingIntensity: "low" },
      { id: "d9m2", time: "09:00", title: "Healthy Breakfast", location: "Resort", category: "Eat-Well", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", price: 60, commission: "8-10%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d9a1", time: "11:00", title: "Kayaking Adventure", location: "Kerama Islands", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", price: 250, commission: "15-18%", badges: ["Teen Friendly"], walkingIntensity: "moderate" },
      { id: "d9a2", time: "14:00", title: "Island Lunch", location: "Zamami Island", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 100, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d9e1", time: "17:00", title: "Return to Resort", location: "Boat Transfer", category: "Move-Well", image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80", price: 100, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d9e2", time: "19:30", title: "Farewell Dinner", location: "Resort Teppanyaki", category: "Eat-Well", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", price: 400, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 10,
    date: "Wednesday, March 24",
    morning: [
      { id: "d10m1", time: "08:00", title: "Final Breakfast", location: "Resort", category: "Eat-Well", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", price: 60, commission: "8-10%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d10m2", time: "10:00", title: "Hotel Checkout", location: "Resort Lobby", category: "Stay-Well", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", price: 0, commission: "0%", badges: ["Stroller Friendly"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d10a1", time: "12:00", title: "Airport Transfer", location: "Naha Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", price: 150, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d10a2", time: "14:00", title: "Departure", location: "Naha International Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", price: 0, commission: "0%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
    ],
    evening: []
  },
]
