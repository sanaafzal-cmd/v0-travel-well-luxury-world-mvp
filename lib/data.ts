// Mock data for TravelWell LuxuryWorld

export type BudgetTier = 'luxury' | 'high-end' | 'mid-range' | 'family-friendly' | 'budget-conscious'

export interface IdentityOption {
  id: string
  title: string
  subtitle: string
  image: string
  tier?: BudgetTier
  icon?: string
}

export interface IdentityStepData {
  id: number
  question: string
  subtitle: string
  options: IdentityOption[]
  isBudgetTier?: boolean
  layout?: 'cards' | 'chips' | 'dual-image'
}

export const budgetTierLabels: Record<BudgetTier, { label: string; tag: string }> = {
  'luxury': { label: 'Luxury', tag: 'Exclusive' },
  'high-end': { label: 'High End', tag: 'Premium' },
  'mid-range': { label: 'Mid-Range', tag: 'Curated' },
  'family-friendly': { label: 'Family Friendly', tag: 'Family Pick' },
  'budget-conscious': { label: 'Budget Conscious', tag: 'Value' },
}

export const identitySteps: IdentityStepData[] = [
  // Step 1: Traveler Profile
  {
    id: 1,
    question: "Who is traveling?",
    subtitle: "Tell us about your travel party",
    layout: 'cards',
    options: [
      { id: "age-0-4", title: "Infant (0-4)", subtitle: "Little ones need special care", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80" },
      { id: "age-5-12", title: "Child (5-12)", subtitle: "Young explorers on adventure", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" },
      { id: "age-13-17", title: "Teen (13-17)", subtitle: "Curious minds seeking discovery", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80" },
      { id: "age-18-29", title: "Young Adult (18-29)", subtitle: "Bold spirits, endless energy", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80" },
      { id: "age-30-45", title: "Adult (30-45)", subtitle: "Prime years for exploration", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" },
      { id: "age-46-60", title: "Mature (46-60)", subtitle: "Seasoned travelers with taste", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "age-60-75", title: "Senior (60-75)", subtitle: "Wisdom meets wanderlust", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
      { id: "age-75+", title: "Elder (75+)", subtitle: "Timeless journeys await", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
    ],
  },
  // Step 2: Travel Companions
  {
    id: 2,
    question: "How do you prefer to travel?",
    subtitle: "Your journey style defines your experience",
    layout: 'cards',
    options: [
      { id: "solo", title: "Solo Explorer", subtitle: "Freedom & self-discovery", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" },
      { id: "couple", title: "Romantic Duo", subtitle: "Intimate moments together", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80" },
      { id: "family", title: "Family Journey", subtitle: "Creating lasting memories", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" },
      { id: "group", title: "Friends Getaway", subtitle: "Adventure with companions", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80" },
      { id: "multi-gen", title: "Multi-generational", subtitle: "Connecting across ages", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" },
    ]
  },
  // Step 3: Budget Tier
  {
    id: 3,
    question: "What level of experience do you prefer?",
    subtitle: "Your journey, your style",
    isBudgetTier: true,
    layout: 'cards',
    options: [
      { id: "luxury", title: "Luxury", subtitle: "The pinnacle of refinement", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", tier: "luxury" as BudgetTier },
      { id: "high-end", title: "High End", subtitle: "Elevated experiences with style", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", tier: "high-end" as BudgetTier },
      { id: "mid-range", title: "Mid-Range", subtitle: "Quality and comfort, balanced", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", tier: "mid-range" as BudgetTier },
      { id: "family-friendly", title: "Family Friendly", subtitle: "Memorable moments for all ages", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80", tier: "family-friendly" as BudgetTier },
      { id: "budget-conscious", title: "Budget Conscious", subtitle: "Smart choices, great experiences", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", tier: "budget-conscious" as BudgetTier },
    ]
  },
  // Step 4: Travel Worlds
  {
    id: 4,
    question: "What worlds call to you?",
    subtitle: "Choose the world that resonates most",
    layout: 'cards',
    options: [
      { id: "adventure", title: "Adventure", subtitle: "Thrill & adrenaline", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80" },
      { id: "culinary", title: "Culinary", subtitle: "Taste the world", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
      { id: "romance", title: "Romance", subtitle: "Love & connection", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80" },
      { id: "wellness", title: "Wellness", subtitle: "Mind, body & spirit", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
      { id: "culture", title: "Culture", subtitle: "Art, history & heritage", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" },
      { id: "cruise", title: "Cruise", subtitle: "Sail the seas", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" },
      { id: "nature", title: "Nature", subtitle: "Earth's wonders", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" },
      { id: "sports", title: "Sports", subtitle: "Active pursuits", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
    ]
  },
  // Step 5: Comfort & Pace
  {
    id: 5,
    question: "What's your travel rhythm?",
    subtitle: "Define your ideal pace",
    layout: 'dual-image',
    options: [
      { id: "pace-slow", title: "Slow & Deliberate", subtitle: "Savor every moment", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
      { id: "pace-balanced", title: "Balanced Flow", subtitle: "Mix of rest & exploration", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "pace-fast", title: "Fast & Dynamic", subtitle: "Packed with experiences", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
      { id: "structure-flexible", title: "Flexible", subtitle: "Go with the flow", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" },
      { id: "structure-semi", title: "Semi-Planned", subtitle: "Some plans, some freedom", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80" },
      { id: "structure-structured", title: "Structured", subtitle: "Every detail mapped", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80" },
    ],
  },
  // Step 6: Scenario Preferences  
  {
    id: 6,
    question: "Set the scene for your journey",
    subtitle: "Choose your ideal destination vibe",
    layout: 'cards',
    options: [
      { id: "scene-tropical", title: "Tropical Paradise", subtitle: "Warm beaches & palm trees", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80" },
      { id: "scene-alpine", title: "Alpine Escape", subtitle: "Mountains & fresh air", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" },
      { id: "scene-urban", title: "Urban Adventure", subtitle: "City lights & culture", image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80" },
      { id: "scene-countryside", title: "Countryside Retreat", subtitle: "Rolling hills & vineyards", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "scene-desert", title: "Desert Mystique", subtitle: "Golden dunes & starry nights", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80" },
    ]
  },
  // Step 7: Emotional Drivers
  {
    id: 7,
    question: "What drives your desire to travel?",
    subtitle: "Choose the emotion that resonates most",
    layout: 'cards',
    options: [
      { id: "emotion-relaxation", title: "Relaxation", subtitle: "Unwind & recharge", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
      { id: "emotion-exploration", title: "Exploration", subtitle: "Discover the unknown", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" },
      { id: "emotion-luxury", title: "Luxury & Status", subtitle: "Experience the finest", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80" },
      { id: "emotion-connection", title: "Connection", subtitle: "Bond with loved ones", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" },
      { id: "emotion-escape", title: "Escape", subtitle: "Leave it all behind", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" },
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
      { id: "s1", title: "Aman Tokyo", subtitle: "Urban sanctuary in the clouds", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "s2", title: "Four Seasons Bali", subtitle: "Tropical elegance", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "s3", title: "Rosewood Paris", subtitle: "Parisian grandeur", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "s4", title: "Kimpton Hotels", subtitle: "Boutique comfort for families", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "s5", title: "Mandarin Oriental", subtitle: "Legendary Asian hospitality", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
    ]
  },
  {
    id: "eat-well",
    name: "Eat-Well",
    subtitle: "Culinary excellence",
    icon: "utensils",
    options: [
      { id: "e1", title: "Eleven Madison Park", subtitle: "Plant-forward fine dining", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "e2", title: "Narisawa", subtitle: "Innovative Japanese cuisine", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "e3", title: "Osteria Francescana", subtitle: "Italian artistry", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "e4", title: "Local Trattorias", subtitle: "Authentic neighborhood gems", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "e5", title: "Family Table", subtitle: "Kid-approved dining", image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", rating: 4, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
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
      { id: "m3", title: "First Class Rail", subtitle: "Scenic luxury journeys", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "m4", title: "Family Van Rental", subtitle: "Space for everyone", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", rating: 4, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "m5", title: "Airport Transfer", subtitle: "Seamless arrivals & departures", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "activity-well",
    name: "Activity-Well",
    subtitle: "Experiences that transform",
    icon: "compass",
    options: [
      { id: "a1", title: "Glamping Retreat", subtitle: "Luxury in the wilderness", image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "a2", title: "Mountain Lodge", subtitle: "Alpine serenity awaits", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "a3", title: "Desert Dome", subtitle: "Stars & sand", image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "a4", title: "Kayaking Adventure", subtitle: "Explore by water", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80", rating: 5, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "a5", title: "Hot Springs", subtitle: "Natural rejuvenation", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
  {
    id: "experience-well",
    name: "Experience-Well",
    subtitle: "Moments to remember",
    icon: "sparkles",
    options: [
      { id: "x1", title: "Theater Performance", subtitle: "World-class shows", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80", rating: 5, priceLevel: "$$$$$", tier: "luxury", tierTag: "Exclusive" },
      { id: "x2", title: "Museum Private Tour", subtitle: "Art & history unveiled", image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80", rating: 5, priceLevel: "$$$$", tier: "high-end", tierTag: "Premium" },
      { id: "x3", title: "Festival Experience", subtitle: "Local celebrations", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", rating: 4, priceLevel: "$$$", tier: "mid-range", tierTag: "Curated" },
      { id: "x4", title: "Iconic Landmarks", subtitle: "Must-see destinations", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", rating: 5, priceLevel: "$$", tier: "family-friendly", tierTag: "Family Pick" },
      { id: "x5", title: "Guided Walking Tour", subtitle: "Stories of the city", image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8f4a4?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
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
      { id: "d1m1", time: "08:00", title: "Arrival & Private Transfer", location: "Narita International Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", price: 450, commission: "8-12%", badges: ["Transport Included"], walkingIntensity: "low", transportIncluded: true },
      { id: "d1m2", time: "10:30", title: "Hotel Check-in", location: "Aman Tokyo, Otemachi", category: "Stay-Well", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80", price: 2400, commission: "10-15%", badges: ["Stroller Friendly"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d1a1", time: "13:00", title: "Private Sushi Omakase", location: "Sukiyabashi Jiro", category: "Eat-Well", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", price: 800, commission: "5-8%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d1a2", time: "15:30", title: "Imperial Palace Gardens", location: "Chiyoda, Tokyo", category: "Activity-Well", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", price: 150, commission: "12-18%", badges: ["Low Walking", "Senior Friendly"], walkingIntensity: "low", accessible: true },
    ],
    evening: [
      { id: "d1e1", time: "19:00", title: "Rooftop Kaiseki Dinner", location: "Aman Tokyo Restaurant", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 650, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
    ]
  },
  {
    day: 2,
    date: "Tuesday, March 16",
    morning: [
      { id: "d2m1", time: "07:00", title: "Meditation at Senso-ji", location: "Asakusa Temple", category: "Activity-Well", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", price: 200, commission: "15-20%", badges: ["Senior Friendly", "Low Walking"], walkingIntensity: "low", accessible: true },
      { id: "d2m2", time: "09:30", title: "Traditional Breakfast", location: "Tsukiji Outer Market", category: "Eat-Well", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", price: 120, commission: "8-10%", badges: ["Kid Friendly"], walkingIntensity: "moderate" },
    ],
    afternoon: [
      { id: "d2a1", time: "12:00", title: "Private Tea Ceremony", location: "Happo-en Garden", category: "Activity-Well", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80", price: 350, commission: "12-15%", badges: ["Seated Activity", "Kid Friendly"], walkingIntensity: "low" },
      { id: "d2a2", time: "15:00", title: "Ginza Shopping Experience", location: "Ginza District", category: "Experience-Well", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80", price: 0, commission: "0%", badges: ["Teen Friendly"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d2e1", time: "18:30", title: "Wagyu Tasting Experience", location: "Ukai-tei Omotesando", category: "Eat-Well", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", price: 550, commission: "8-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d2e2", time: "21:00", title: "Tokyo Tower Night View", location: "Minato City", category: "Experience-Well", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", price: 80, commission: "15-20%", badges: ["Kid Friendly", "Senior Friendly"], walkingIntensity: "low", accessible: true },
    ]
  },
  {
    day: 3,
    date: "Wednesday, March 17",
    morning: [
      { id: "d3m1", time: "08:30", title: "Bullet Train to Kyoto", location: "Tokyo Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", price: 280, commission: "5-8%", badges: ["Transport Included", "Stroller Friendly"], walkingIntensity: "low", transportIncluded: true },
      { id: "d3m2", time: "11:00", title: "Kyoto Arrival", location: "Kyoto Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 0, commission: "0%", badges: [], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d3a1", time: "12:30", title: "Kaiseki Lunch", location: "Kikunoi Honten", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 450, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d3a2", time: "15:00", title: "Fushimi Inari Shrine", location: "Fushimi, Kyoto", category: "Activity-Well", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80", price: 0, commission: "0%", badges: ["Moderate Walking"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d3e1", time: "18:00", title: "Geisha District Walk", location: "Gion, Kyoto", category: "Experience-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 200, commission: "15-18%", badges: ["Low Walking", "Cultural"], walkingIntensity: "low" },
      { id: "d3e2", time: "20:00", title: "Traditional Ryokan Stay", location: "Hoshinoya Kyoto", category: "Stay-Well", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", price: 1800, commission: "10-15%", badges: ["Unique Stay"], walkingIntensity: "low" },
    ]
  },
]
