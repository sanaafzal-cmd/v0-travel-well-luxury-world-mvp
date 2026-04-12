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
      { id: "age-30-45", title: "Adult (30-45)", subtitle: "Prime years for exploration", image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80" },
      { id: "age-46-60", title: "Mature (46-60)", subtitle: "Seasoned travelers with taste", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80" },
      { id: "age-60-75", title: "Senior (60-75)", subtitle: "Wisdom meets wanderlust", image: "https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=800&q=80" },
      { id: "age-75+", title: "Elder (75+)", subtitle: "Timeless journeys await", image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=800&q=80" },
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
      { id: "x5", title: "Guided Walking Tour", subtitle: "Stories of the city", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80", rating: 4, priceLevel: "$", tier: "budget-conscious", tierTag: "Value" },
    ]
  },
]

export interface CommissionRange {
  low: number
  high: number
}

export interface ItineraryActivity {
  id: string
  time: string
  title: string
  location: string
  category: string
  image: string
  price?: number
  commission?: string
  commissionRange?: CommissionRange
  badges?: string[]
  walkingIntensity?: 'low' | 'moderate' | 'high'
  transportIncluded?: boolean
  accessible?: boolean
  description?: string
}

export interface ItineraryDay {
  day: number
  date: string
  morning: ItineraryActivity[]
  afternoon: ItineraryActivity[]
  evening: ItineraryActivity[]
}

// Canonical Commission Ranges per Well (from Trifecta Engine Spec)
export const COMMISSION_RANGES: Record<string, CommissionRange> = {
  "Stay-Well": { low: 0.08, high: 0.15 },
  "Eat-Well": { low: 0.00, high: 0.05 },
  "Move-Well": { low: 0.05, high: 0.12 },
  "Experience-Well": { low: 0.10, high: 0.20 },
  "Activity-Well": { low: 0.10, high: 0.25 },
}

// 7-Day Paris Itinerary - Trifecta Engine Compliant
// Two Couples Trip: Private Jet Miami → Paris, Springsteen Concert Anchor
// 4-6 monetizable items per day across all 5 Wells
export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    date: "Saturday, June 14",
    morning: [
      { id: "d1m1", time: "06:00", title: "Private Jet Departure", location: "Miami Opa-Locka Executive Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", price: 85000, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Private Aviation"], walkingIntensity: "low", transportIncluded: true, description: "Gulfstream G650 roundtrip" },
    ],
    afternoon: [
      { id: "d1a1", time: "18:00", title: "Check-in at Hôtel Plaza Athénée", location: "25 Avenue Montaigne, 8th Arr.", category: "Stay-Well", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80", price: 32400, commissionRange: { low: 0.08, high: 0.15 }, badges: ["Palace Hotel", "Eiffel View"], walkingIntensity: "low", description: "3 suites × 6 nights" },
    ],
    evening: [
      { id: "d1e1", time: "20:00", title: "Welcome Dinner at Alain Ducasse", location: "Hôtel Plaza Athénée", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 1600, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars"], walkingIntensity: "low" },
    ]
  },
  {
    day: 2,
    date: "Sunday, June 15",
    morning: [
      { id: "d2m1", time: "09:00", title: "Private Louvre Tour", location: "Musée du Louvre, 1st Arr.", category: "Experience-Well", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80", price: 2400, commissionRange: { low: 0.10, high: 0.20 }, badges: ["VIP Access", "Private Guide"], walkingIntensity: "moderate" },
    ],
    afternoon: [
      { id: "d2a1", time: "13:00", title: "Lunch at Le Cinq", location: "Four Seasons George V", category: "Eat-Well", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", price: 1200, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars"], walkingIntensity: "low" },
      { id: "d2a2", time: "15:30", title: "Seine River Cruise", location: "Port de la Conférence", category: "Activity-Well", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", price: 1200, commissionRange: { low: 0.10, high: 0.25 }, badges: ["Private Yacht", "Champagne"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d2e1", time: "19:30", title: "Dinner at L'Ambroisie", location: "Place des Vosges, 4th Arr.", category: "Eat-Well", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", price: 1400, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars"], walkingIntensity: "low" },
      { id: "d2e2", time: "22:00", title: "Chauffeur Return", location: "Paris", category: "Move-Well", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", price: 200, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Mercedes S-Class"], walkingIntensity: "low", transportIncluded: true },
    ]
  },
  {
    day: 3,
    date: "Monday, June 16",
    morning: [
      { id: "d3m1", time: "10:00", title: "Spa Morning at Dior Institut", location: "Hôtel Plaza Athénée", category: "Activity-Well", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", price: 1600, commissionRange: { low: 0.10, high: 0.25 }, badges: ["Couples Spa", "Luxury"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d3a1", time: "13:00", title: "Lunch at Epicure", location: "Le Bristol Paris", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 1100, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars"], walkingIntensity: "low" },
      { id: "d3a2", time: "15:00", title: "Private Shopping at Dior", location: "30 Avenue Montaigne", category: "Experience-Well", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", price: 0, commissionRange: { low: 0.10, high: 0.20 }, badges: ["VIP Access", "Personal Stylist"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d3e1", time: "19:00", title: "Dinner at Guy Savoy", location: "Monnaie de Paris, 6th Arr.", category: "Eat-Well", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", price: 1600, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars"], walkingIntensity: "low" },
      { id: "d3e2", time: "22:00", title: "Chauffeur Service", location: "Paris", category: "Move-Well", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", price: 200, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Mercedes S-Class"], walkingIntensity: "low", transportIncluded: true },
    ]
  },
  {
    day: 4,
    date: "Tuesday, June 17",
    morning: [
      { id: "d4m1", time: "09:30", title: "Versailles Palace VIP Tour", location: "Palace of Versailles", category: "Experience-Well", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80", price: 2000, commissionRange: { low: 0.10, high: 0.20 }, badges: ["Skip the Line", "Private Guide"], walkingIntensity: "moderate" },
      { id: "d4m2", time: "08:30", title: "Chauffeur to Versailles", location: "Paris → Versailles", category: "Move-Well", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", price: 400, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Luxury Van"], walkingIntensity: "low", transportIncluded: true },
    ],
    afternoon: [
      { id: "d4a1", time: "13:30", title: "Lunch at Ore Ducasse", location: "Palace of Versailles", category: "Eat-Well", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", price: 800, commissionRange: { low: 0.00, high: 0.05 }, badges: ["Palace Dining"], walkingIntensity: "low" },
      { id: "d4a2", time: "15:30", title: "Marie Antoinette's Estate", location: "Petit Trianon, Versailles", category: "Activity-Well", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", price: 400, commissionRange: { low: 0.10, high: 0.25 }, badges: ["Private Access"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d4e1", time: "20:00", title: "Dinner at Arpège", location: "7th Arrondissement", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 1400, commissionRange: { low: 0.00, high: 0.05 }, badges: ["3 Michelin Stars", "Vegetable Forward"], walkingIntensity: "low" },
    ]
  },
  {
    day: 5,
    date: "Wednesday, June 18",
    morning: [
      { id: "d5m1", time: "10:00", title: "Champagne Day Trip", location: "Reims & Épernay", category: "Activity-Well", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80", price: 2400, commissionRange: { low: 0.10, high: 0.25 }, badges: ["Dom Pérignon", "Moët & Chandon"], walkingIntensity: "low" },
      { id: "d5m2", time: "08:00", title: "Luxury Van Transfer", location: "Paris → Champagne", category: "Move-Well", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", price: 600, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Mercedes V-Class"], walkingIntensity: "low", transportIncluded: true },
    ],
    afternoon: [
      { id: "d5a1", time: "13:00", title: "Lunch at Les Crayères", location: "Reims", category: "Eat-Well", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", price: 1000, commissionRange: { low: 0.00, high: 0.05 }, badges: ["2 Michelin Stars"], walkingIntensity: "low" },
      { id: "d5a2", time: "15:30", title: "Private Cellar Tasting", location: "Krug, Reims", category: "Experience-Well", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80", price: 800, commissionRange: { low: 0.10, high: 0.20 }, badges: ["Rare Vintages"], walkingIntensity: "low" },
    ],
    evening: [
      { id: "d5e1", time: "20:30", title: "Dinner at Le Clarence", location: "8th Arrondissement", category: "Eat-Well", image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", price: 1400, commissionRange: { low: 0.00, high: 0.05 }, badges: ["2 Michelin Stars"], walkingIntensity: "low" },
    ]
  },
  {
    day: 6,
    date: "Thursday, June 19",
    morning: [
      { id: "d6m1", time: "11:00", title: "Leisurely Morning", location: "Hôtel Plaza Athénée", category: "Stay-Well", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", price: 0, commissionRange: { low: 0.08, high: 0.15 }, badges: ["Suite Breakfast"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d6a1", time: "12:30", title: "Lunch at Le Meurice", location: "1st Arrondissement", category: "Eat-Well", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", price: 1200, commissionRange: { low: 0.00, high: 0.05 }, badges: ["2 Michelin Stars", "Dalí Décor"], walkingIntensity: "low" },
      { id: "d6a2", time: "15:00", title: "Moulin Rouge Backstage", location: "Montmartre, 18th Arr.", category: "Experience-Well", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80", price: 1200, commissionRange: { low: 0.10, high: 0.20 }, badges: ["Private Access", "Champagne"], walkingIntensity: "low" },
      { id: "d6a3", time: "17:00", title: "Chauffeur to Stade de France", location: "Paris → Saint-Denis", category: "Move-Well", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80", price: 300, commissionRange: { low: 0.05, high: 0.12 }, badges: ["VIP Transfer"], walkingIntensity: "low", transportIncluded: true },
    ],
    evening: [
      { id: "d6e1", time: "19:30", title: "Bruce Springsteen Concert", location: "Stade de France, Saint-Denis", category: "Experience-Well", image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80", price: 4400, commissionRange: { low: 0.10, high: 0.20 }, badges: ["VIP Box", "The Boss"], walkingIntensity: "low", description: "4 VIP tickets @ $1,100 each" },
      { id: "d6e2", time: "23:30", title: "Late Night Supper", location: "Le Comptoir, 6th Arr.", category: "Eat-Well", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", price: 600, commissionRange: { low: 0.00, high: 0.05 }, badges: ["Post-Concert"], walkingIntensity: "low" },
    ]
  },
  {
    day: 7,
    date: "Friday, June 20",
    morning: [
      { id: "d7m1", time: "10:00", title: "Farewell Brunch", location: "Hôtel Plaza Athénée Terrace", category: "Eat-Well", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", price: 600, commissionRange: { low: 0.00, high: 0.05 }, badges: ["Eiffel View", "Champagne"], walkingIntensity: "low" },
      { id: "d7m2", time: "12:00", title: "Hotel Check-out", location: "Hôtel Plaza Athénée", category: "Stay-Well", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80", price: 0, commissionRange: { low: 0.08, high: 0.15 }, badges: ["Late Check-out"], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d7a1", time: "13:00", title: "Final Shopping at Le Bon Marché", location: "7th Arrondissement", category: "Activity-Well", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", price: 0, commissionRange: { low: 0.10, high: 0.25 }, badges: ["Luxury Department Store"], walkingIntensity: "moderate" },
      { id: "d7a2", time: "15:00", title: "Chauffeur to Le Bourget", location: "Paris → Le Bourget Airport", category: "Move-Well", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", price: 300, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Private Terminal"], walkingIntensity: "low", transportIncluded: true },
    ],
    evening: [
      { id: "d7e1", time: "17:00", title: "Private Jet Departure", location: "Le Bourget Airport → Miami", category: "Move-Well", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80", price: 0, commissionRange: { low: 0.05, high: 0.12 }, badges: ["Return Flight"], walkingIntensity: "low", transportIncluded: true, description: "Included in outbound booking" },
    ]
  },
]
