// Paris 7-Day Springsteen Trip - VC Demo Itinerary
// Two couples (4 people) - Private Jet Miami → Paris → Miami
// All 5 Wells monetizing daily with real commission ranges

export interface TravelerInfo {
  firstName: string
  lastName: string
}

export interface TravelParty {
  partyType: 'solo' | 'couple' | 'family' | 'group' | 'multi-couple'
  adults: TravelerInfo[]
  children: TravelerInfo[]
  groupName: string
}

export interface CommissionRange {
  low: number
  high: number
}

export interface ItineraryItem {
  id: string
  time: string
  title: string
  location: string
  well: 'StayWell' | 'EatWell' | 'MoveWell' | 'ExperienceWell' | 'ActivityWell'
  image: string
  price: number
  pricePerPerson?: boolean
  commissionRange: CommissionRange
  badges?: string[]
  description?: string
}

export interface ParisItineraryDay {
  day: number
  date: string
  headline: string
  items: ItineraryItem[]
}

// Commission ranges per Well (canonical schema)
export const wellCommissionRanges: Record<string, CommissionRange> = {
  StayWell: { low: 0.08, high: 0.15 },
  EatWell: { low: 0.00, high: 0.05 },
  MoveWell: { low: 0.05, high: 0.12 },
  ExperienceWell: { low: 0.10, high: 0.20 },
  ActivityWell: { low: 0.10, high: 0.25 },
}

// Default travel party for VC demo
export const defaultTravelParty: TravelParty = {
  partyType: 'multi-couple',
  adults: [
    { firstName: 'James', lastName: 'Mitchell' },
    { firstName: 'Sarah', lastName: 'Mitchell' },
    { firstName: 'Michael', lastName: 'Chen' },
    { firstName: 'Emily', lastName: 'Chen' },
  ],
  children: [],
  groupName: 'Two Couples — Paris Springsteen Trip'
}

// Full 7-Day Paris Itinerary
export const parisItinerary: ParisItineraryDay[] = [
  {
    day: 1,
    date: "Friday, July 11",
    headline: "Arrival in Paris",
    items: [
      {
        id: "d1-1",
        time: "06:00",
        title: "Private Jet — Miami to Paris",
        location: "Miami Opa-locka Executive → Le Bourget",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
        price: 120000,
        commissionRange: { low: 0.10, high: 0.15 },
        badges: ["Private Aviation", "Luxury"],
        description: "Gulfstream G650 roundtrip charter"
      },
      {
        id: "d1-2",
        time: "18:00",
        title: "Check-in at Hôtel Plaza Athénée",
        location: "25 Avenue Montaigne, 8th Arrondissement",
        well: "StayWell",
        image: "/images/wells/stay/plaza-ethenee.jpg",
        price: 32400,
        commissionRange: { low: 0.08, high: 0.15 },
        badges: ["Palace Hotel", "Eiffel View"],
        description: "3 luxury suites × 6 nights ($1,800/night)"
      },
      {
        id: "d1-3",
        time: "20:30",
        title: "Welcome Dinner at Alain Ducasse",
        location: "Hôtel Plaza Athénée",
        well: "EatWell",
        image: "/images/wells/stay/plaza-ethenee.jpg",
        price: 340,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["3 Michelin Stars", "Fine Dining"],
        description: "Chef's tasting menu with wine pairing"
      },
      {
        id: "d1-4",
        time: "23:00",
        title: "Champagne Nightcap at Bar Hemingway",
        location: "Ritz Paris",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1624388621606-9f837720c14c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["Iconic Bar", "VIP Access"],
        description: "Private corner reservation"
      }
    ]
  },
  {
    day: 2,
    date: "Saturday, July 12",
    headline: "Art & Culture",
    items: [
      {
        id: "d2-1",
        time: "09:00",
        title: "Breakfast at Café de Flore",
        location: "172 Boulevard Saint-Germain",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1651894515323-f357fc6777ff?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 65,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["Historic Café", "Literary Landmark"]
      },
      {
        id: "d2-2",
        time: "10:30",
        title: "Private Louvre Tour",
        location: "Musée du Louvre",
        well: "ActivityWell",
        image: "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 180,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.25 },
        badges: ["Skip the Line", "Private Guide"],
        description: "3-hour expert-led tour"
      },
      {
        id: "d2-3",
        time: "14:00",
        title: "Lunch at L'Ambroisie",
        location: "Place des Vosges",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1605371151056-32e1a6198376?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 280,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["3 Michelin Stars"]
      },
      {
        id: "d2-4",
        time: "16:30",
        title: "Seine River Private Cruise",
        location: "Pont de l'Alma",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1684356090943-10759a24e6f5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 450,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["Champagne Included", "Sunset Views"]
      },
      {
        id: "d2-5",
        time: "20:00",
        title: "Dinner at Le Cinq",
        location: "Four Seasons George V",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        price: 320,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["3 Michelin Stars"]
      },
      {
        id: "d2-6",
        time: "All Day",
        title: "Private Chauffeur Service",
        location: "Paris",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1680451553374-09d8d6a1ca58?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Mercedes S-Class", "On Demand"]
      }
    ]
  },
  {
    day: 3,
    date: "Sunday, July 13",
    headline: "Wellness & Relaxation",
    items: [
      {
        id: "d3-1",
        time: "09:00",
        title: "Spa Morning at Dior Institut",
        location: "Hôtel Plaza Athénée",
        well: "ActivityWell",
        image: "/images/wells/stay/plaza-ethenee.jpg",
        price: 380,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.25 },
        badges: ["Luxury Spa", "Signature Treatment"]
      },
      {
        id: "d3-2",
        time: "12:30",
        title: "Brunch at Girafe",
        location: "Palais de Chaillot",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        price: 95,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["Eiffel View", "Seafood"]
      },
      {
        id: "d3-3",
        time: "15:00",
        title: "Shopping at Avenue Montaigne",
        location: "Dior, Chanel, Louis Vuitton",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
        price: 0,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["VIP Shopping", "Personal Stylist"],
        description: "Commission on purchases"
      },
      {
        id: "d3-4",
        time: "19:30",
        title: "Dinner at Epicure",
        location: "Le Bristol Paris",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        price: 350,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["3 Michelin Stars", "Garden Terrace"]
      },
      {
        id: "d3-5",
        time: "All Day",
        title: "Private Chauffeur Service",
        location: "Paris",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1680451553374-09d8d6a1ca58?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Mercedes S-Class"]
      }
    ]
  },
  {
    day: 4,
    date: "Monday, July 14",
    headline: "Bastille Day & Springsteen",
    items: [
      {
        id: "d4-1",
        time: "10:00",
        title: "Bastille Day Parade Viewing",
        location: "Champs-Élysées VIP Terrace",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
        price: 250,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["VIP Access", "National Holiday"]
      },
      {
        id: "d4-2",
        time: "13:00",
        title: "Lunch at Le Jules Verne",
        location: "Eiffel Tower",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        price: 280,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["1 Michelin Star", "Eiffel Tower"]
      },
      {
        id: "d4-3",
        time: "16:00",
        title: "Pre-Concert Styling & Prep",
        location: "Hotel Suite",
        well: "ActivityWell",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
        price: 200,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.25 },
        badges: ["Private Stylist", "Hair & Makeup"]
      },
      {
        id: "d4-4",
        time: "19:00",
        title: "Bruce Springsteen Concert",
        location: "Stade de France",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1430232324554-8f4aebd06683?w=800&q=80",
        price: 850,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["VIP Pit Access", "Backstage Lounge"],
        description: "The Boss live in Paris!"
      },
      {
        id: "d4-5",
        time: "All Day",
        title: "Private Chauffeur Service",
        location: "Paris & Stade de France",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1638874085157-91988ffd3fe5?w=800&q=80",
        price: 350,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Concert Transfer", "VIP Parking"]
      }
    ]
  },
  {
    day: 5,
    date: "Tuesday, July 15",
    headline: "Champagne Country",
    items: [
      {
        id: "d5-1",
        time: "09:00",
        title: "Day Trip to Champagne Region",
        location: "Reims & Épernay",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1607587677370-7cd697023bbd?w=800&q=80",
        price: 400,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Luxury Van", "Full Day"],
        description: "Private luxury van with guide"
      },
      {
        id: "d5-2",
        time: "11:00",
        title: "Dom Pérignon Private Tasting",
        location: "Épernay",
        well: "ActivityWell",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        price: 350,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.25 },
        badges: ["Exclusive Access", "Cellar Tour"]
      },
      {
        id: "d5-3",
        time: "13:30",
        title: "Lunch at Les Crayères",
        location: "Reims",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1581211653431-310ba15ff9bf?w=800&q=80",
        price: 220,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["2 Michelin Stars", "Château Setting"]
      },
      {
        id: "d5-4",
        time: "15:30",
        title: "Veuve Clicquot Caves Tour",
        location: "Reims",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1581211653431-310ba15ff9bf?w=800&q=80",
        price: 180,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["Historic Caves", "Premium Tasting"]
      },
      {
        id: "d5-5",
        time: "20:00",
        title: "Casual Dinner at Frenchie",
        location: "2nd Arrondissement",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        price: 110,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["Modern French", "Wine Bar"]
      }
    ]
  },
  {
    day: 6,
    date: "Wednesday, July 16",
    headline: "Versailles & Farewell",
    items: [
      {
        id: "d6-1",
        time: "08:30",
        title: "Private Transfer to Versailles",
        location: "Paris to Versailles",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?w=800&q=80",
        price: 180,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Private Vehicle"]
      },
      {
        id: "d6-2",
        time: "09:30",
        title: "Private Versailles Tour",
        location: "Palace of Versailles",
        well: "ActivityWell",
        image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?w=800&q=80",
        price: 220,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.25 },
        badges: ["Skip the Line", "Expert Guide"],
        description: "4-hour comprehensive tour"
      },
      {
        id: "d6-3",
        time: "13:30",
        title: "Lunch at Ore — Ducasse",
        location: "Palace of Versailles",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?w=800&q=80",
        price: 140,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["Inside Palace", "Garden View"]
      },
      {
        id: "d6-4",
        time: "16:00",
        title: "Marie Antoinette's Estate",
        location: "Petit Trianon",
        well: "ExperienceWell",
        image: "https://images.unsplash.com/photo-1696889984047-1f38e8315a21?w=800&q=80",
        price: 90,
        pricePerPerson: true,
        commissionRange: { low: 0.10, high: 0.20 },
        badges: ["Hidden Gardens", "Historical"]
      },
      {
        id: "d6-5",
        time: "20:00",
        title: "Farewell Dinner at Guy Savoy",
        location: "Monnaie de Paris",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1663789005655-f73e36285b97?w=800&q=80",
        price: 420,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["3 Michelin Stars", "Seine View"]
      },
      {
        id: "d6-6",
        time: "All Day",
        title: "Private Chauffeur Service",
        location: "Paris & Versailles",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1638874085157-91988ffd3fe5?w=800&q=80",
        price: 280,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Full Day"]
      }
    ]
  },
  {
    day: 7,
    date: "Thursday, July 17",
    headline: "Departure",
    items: [
      {
        id: "d7-1",
        time: "09:00",
        title: "Breakfast in Suite",
        location: "Hôtel Plaza Athénée",
        well: "EatWell",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        price: 85,
        pricePerPerson: true,
        commissionRange: { low: 0.00, high: 0.05 },
        badges: ["Room Service", "Leisurely"]
      },
      {
        id: "d7-2",
        time: "11:00",
        title: "Hotel Checkout",
        location: "Hôtel Plaza Athénée",
        well: "StayWell",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        price: 0,
        commissionRange: { low: 0.08, high: 0.15 },
        badges: ["Final Night Included Above"]
      },
      {
        id: "d7-3",
        time: "12:00",
        title: "Private Transfer to Airport",
        location: "Plaza Athénée to Le Bourget",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1589641057224-21736e83bdaa?w=800&q=80",
        price: 180,
        commissionRange: { low: 0.05, high: 0.12 },
        badges: ["Mercedes S-Class"]
      },
      {
        id: "d7-4",
        time: "14:00",
        title: "Private Jet — Paris to Miami",
        location: "Le Bourget → Miami Opa-locka Executive",
        well: "MoveWell",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
        price: 0,
        commissionRange: { low: 0.10, high: 0.15 },
        badges: ["Return Flight", "Included in D1"]
      }
    ]
  }
]

// Calculate revenue for an item
export function calculateItemRevenue(
  item: ItineraryItem,
  partySize: number
): { low: number; high: number } {
  const basePrice = item.pricePerPerson ? item.price * partySize : item.price
  return {
    low: basePrice * item.commissionRange.low,
    high: basePrice * item.commissionRange.high
  }
}

// Calculate total revenue for the entire trip
export function calculateTripRevenue(
  itinerary: ParisItineraryDay[],
  partySize: number
): {
  low: number
  high: number
  totalItems: number
  byWell: Record<string, { low: number; high: number; items: number }>
} {
  let totalLow = 0
  let totalHigh = 0
  let totalItems = 0

  const byWell: Record<string, { low: number; high: number; items: number }> = {
    StayWell: { low: 0, high: 0, items: 0 },
    EatWell: { low: 0, high: 0, items: 0 },
    MoveWell: { low: 0, high: 0, items: 0 },
    ExperienceWell: { low: 0, high: 0, items: 0 },
    ActivityWell: { low: 0, high: 0, items: 0 },
  }

  for (const day of itinerary) {
    for (const item of day.items) {
      if (item.price > 0) {
        const revenue = calculateItemRevenue(item, partySize)
        totalLow += revenue.low
        totalHigh += revenue.high
        totalItems++

        byWell[item.well].low += revenue.low
        byWell[item.well].high += revenue.high
        byWell[item.well].items++
      }
    }
  }

  return { low: totalLow, high: totalHigh, totalItems, byWell }
}
