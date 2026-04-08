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
  isMultiSelect?: boolean
  layout?: 'cards' | 'chips' | 'scale'
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
    isMultiSelect: true,
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
  // Step 4: Travel Worlds (Multi-select)
  {
    id: 4,
    question: "What worlds call to you?",
    subtitle: "Select all that inspire your wanderlust",
    isMultiSelect: true,
    layout: 'cards',
    options: [
      { id: "adventure", title: "Adventure", subtitle: "Thrill & adrenaline", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80" },
      { id: "culinary", title: "Culinary", subtitle: "Taste the world", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
      { id: "romance", title: "Romance", subtitle: "Love & connection", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80" },
      { id: "wellness", title: "Wellness", subtitle: "Mind, body & spirit", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
      { id: "culture", title: "Culture", subtitle: "Art, history & heritage", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" },
      { id: "cruise", title: "Cruise", subtitle: "Sail the seas", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" },
      { id: "nature", title: "Nature", subtitle: "Earth's wonders", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80" },
      { id: "sports", title: "Sports", subtitle: "Active pursuits", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
    ]
  },
  // Step 5: Comfort & Pace
  {
    id: 5,
    question: "What's your travel rhythm?",
    subtitle: "Define your pace and structure",
    layout: 'scale',
    options: [
      { id: "pace-slow", title: "Slow & Deliberate", subtitle: "Savor every moment", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
      { id: "pace-balanced", title: "Balanced Flow", subtitle: "Mix of rest & exploration", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "pace-fast", title: "Fast & Dynamic", subtitle: "Packed with experiences", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
      { id: "structure-flexible", title: "Flexible", subtitle: "Go with the flow", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80" },
      { id: "structure-balanced", title: "Semi-Planned", subtitle: "Some plans, some freedom", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80" },
      { id: "structure-structured", title: "Structured", subtitle: "Every detail mapped", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80" },
    ],
    isMultiSelect: true,
  },
  // Step 6: Scenario Preferences  
  {
    id: 6,
    question: "Set the scene for your journey",
    subtitle: "Climate, season, and trip length",
    layout: 'chips',
    isMultiSelect: true,
    options: [
      { id: "climate-tropical", title: "Tropical", subtitle: "Warm & humid", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80" },
      { id: "climate-temperate", title: "Temperate", subtitle: "Mild & pleasant", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
      { id: "climate-cold", title: "Alpine/Cold", subtitle: "Crisp & refreshing", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" },
      { id: "climate-desert", title: "Desert", subtitle: "Sun & sand", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80" },
      { id: "season-spring", title: "Spring", subtitle: "Renewal & bloom", image: "https://images.unsplash.com/photo-1462275646964-a0e3571f4f8c?w=800&q=80" },
      { id: "season-summer", title: "Summer", subtitle: "Peak travel season", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" },
      { id: "season-autumn", title: "Autumn", subtitle: "Golden hues", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
      { id: "season-winter", title: "Winter", subtitle: "Festive & serene", image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80" },
      { id: "length-weekend", title: "Weekend Escape", subtitle: "2-4 days", image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80" },
      { id: "length-week", title: "Week Away", subtitle: "5-7 days", image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" },
      { id: "length-extended", title: "Extended Journey", subtitle: "2+ weeks", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" },
    ]
  },
  // Step 7: Emotional Drivers
  {
    id: 7,
    question: "What drives your desire to travel?",
    subtitle: "The emotions behind every journey",
    layout: 'cards',
    isMultiSelect: true,
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
      { id: "d3m2", time: "11:00", title: "Kyoto Arrival", location: "Kyoto Station", category: "Move-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 0, commission: "0%", badges: [], walkingIntensity: "low" },
    ],
    afternoon: [
      { id: "d3a1", time: "12:30", title: "Kaiseki Lunch", location: "Kikunoi Honten", category: "Eat-Well", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80", price: 450, commission: "10-12%", badges: ["Seated Activity"], walkingIntensity: "low" },
      { id: "d3a2", time: "15:00", title: "Fushimi Inari Shrine", location: "Fushimi, Kyoto", category: "Activity-Well", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80", price: 0, commission: "0%", badges: ["Moderate Walking"], walkingIntensity: "moderate" },
    ],
    evening: [
      { id: "d3e1", time: "18:00", title: "Geisha District Walk", location: "Gion, Kyoto", category: "Activity-Well", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: 200, commission: "15-18%", badges: ["Low Walking", "Cultural"], walkingIntensity: "low" },
      { id: "d3e2", time: "20:00", title: "Traditional Ryokan Stay", location: "Hoshinoya Kyoto", category: "Stay-Well", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80", price: 1800, commission: "10-15%", badges: ["Unique Stay"], walkingIntensity: "low" },
    ]
  },
]
