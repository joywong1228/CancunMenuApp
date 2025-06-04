export type Restaurant = {
  id: string;
  name: string;
  description: string;
  image: string;
  style: "Buffet" | "À la Carte" | "Bar" | "Cafe" | "Counter";
  openTime: string; // e.g. '07:00–11:30' or '00:00–23:59'
  mealPeriod:
    | "Breakfast"
    | "Lunch"
    | "Dinner"
    | "All Day"
    | "Breakfast, Dinner"
    | "Lunch, Dinner";
  location: "Sunrise" | "Nizuc";
  dressCode?: string;
};

export const moonPalaceRestaurants: Restaurant[] = [
  // 🌅 SUNRISE
  {
    id: "sun-01",
    name: "Gondola",
    description:
      "Italian cuisine with breakfast buffet and à la carte dinner. Stunning stained glass ceiling.",
    image: require("@/assets/lagondola.jpg"),
    style: "Buffet / À la Carte",
    openTime: "07:00–11:30, 18:00–23:00",
    mealPeriod: "Breakfast, Dinner",
    location: "Sunrise",
    dressCode: "Casual (Breakfast), Smart Casual (Dinner)",
  },
  {
    id: "sun-02",
    name: "Momo",
    description:
      "Asian cuisine with teppanyaki tables and à la carte sushi. Reservations required for teppanyaki.",
    image: require("@/assets/momo.jpg"),
    style: "À la Carte / Teppanyaki",
    openTime: "17:45–23:00",
    mealPeriod: "Dinner",
    location: "Sunrise",
    dressCode: "Smart Casual",
  },
  {
    id: "sun-03",
    name: "Bugambilias",
    description:
      "Mexican dinner buffet and international buffet for breakfast and lunch. Known for pool views.",
    image: require("@/assets/bugambilias.jpg"),
    style: "Buffet",
    openTime: "06:45–11:00, 12:30–17:00, 18:00–23:00",
    mealPeriod: "All Day",
    location: "Sunrise",
    dressCode: "Casual",
  },
  {
    id: "sun-04",
    name: "Palapa Asadero",
    description:
      "Grilled meats and international buffet by the pool. Great for families.",
    image: require("@/assets/asadero.jpg"),
    style: "Buffet / À la Carte",
    openTime: "11:30–16:30, 18:00–23:00",
    mealPeriod: "Lunch, Dinner",
    location: "Sunrise",
    dressCode: "Casual (Lunch), Smart Casual (Dinner)",
  },
  {
    id: "sun-05",
    name: "Pier 8",
    description:
      "Seafood restaurant with daytime poolside service and refined dinner options.",
    image: require("@/assets/pier8.jpg"),
    style: "À la Carte",
    openTime: "12:00–16:30, 18:00–23:00",
    mealPeriod: "Lunch, Dinner",
    location: "Sunrise",
    dressCode: "Casual (Lunch), Smart Casual (Dinner)",
  },
  {
    id: "sun-06",
    name: "Pepe’s Pizza",
    description: "Wood-fired pizza counter located near Gondola Terrace.",
    image: require("@/assets/pepespizza.jpg"),
    style: "À la Carte",
    openTime: "12:30–22:00",
    mealPeriod: "Lunch, Dinner",
    location: "Sunrise",
    dressCode: "Casual",
  },
  {
    id: "sun-07",
    name: "Smoked",
    description:
      "Texan-style BBQ restaurant next to the Flowrider. Great for quick bites.",
    image: require("@/assets/smoked.jpg"),
    style: "À la Carte",
    openTime: "12:00–17:00",
    mealPeriod: "Lunch",
    location: "Sunrise",
    dressCode: "Casual",
  },
  {
    id: "sun-08",
    name: "Agra",
    description:
      "North Indian cuisine including curries, naan, and samosas. Very popular—book ahead.",
    image: require("@/assets/agra.jpg"),
    style: "À la Carte",
    openTime: "18:00–23:00",
    mealPeriod: "Dinner",
    location: "Sunrise",
    dressCode: "Smart Casual",
  },
  {
    id: "sun-09",
    name: "Bistro Café",
    description:
      "24-hour café with coffee, ice cream, paninis, and desserts. Top pick for snacks.",
    image: require("@/assets/bistro.jpg"),
    style: "Cafe",
    openTime: "00:00–23:59",
    mealPeriod: "All Day",
    location: "Sunrise",
    dressCode: "Casual",
  },
  {
    id: "sun-10",
    name: "Poolside Pizza",
    description:
      "Wood-fired pizza station next to Los Columpios Bar. Convenient but varies in quality.",
    image: require("@/assets/poolsidepizza.jpg"),
    style: "Counter",
    openTime: "10:00–16:00",
    mealPeriod: "Lunch",
    location: "Sunrise",
    dressCode: "Casual",
  },

  // 🌴 NIZUC
  {
    id: "niz-01",
    name: "El Manglar",
    description: "International buffet for breakfast, lunch, and dinner.",
    image: require("@/assets/elmanglar.jpg"),
    style: "Buffet",
    openTime: "07:00–23:00",
    mealPeriod: "All Day",
    location: "Nizuc",
    dressCode: "Casual",
  },
  {
    id: "niz-02",
    name: "Arrecifes",
    description: "Brazilian steakhouse with rodizio-style dinner.",
    image: require("@/assets/arrceifes.jpg"),
    style: "À la Carte",
    openTime: "17:30–23:00",
    mealPeriod: "Dinner",
    location: "Nizuc",
    dressCode: "Smart Casual",
  },
  {
    id: "niz-03",
    name: "Los Caporales",
    description: "Traditional Mexican cuisine à la carte.",
    image: require("@/assets/caporales.jpg"),
    style: "À la Carte",
    openTime: "17:00–23:00",
    mealPeriod: "Dinner",
    location: "Nizuc",
    dressCode: "Smart Casual",
  },
  {
    id: "niz-04",
    name: "Palapa Delfines",
    description: "Poolside grill with bar snacks and drinks.",
    image: require("@/assets/palapa.jpg"),
    style: "Bar",
    openTime: "12:00–17:00",
    mealPeriod: "Lunch",
    location: "Nizuc",
    dressCode: "Casual",
  },
  {
    id: "niz-05",
    name: "Palapa Pelicanos",
    description: "Buffet lunch and sushi à la carte for dinner.",
    image: require("@/assets/pelicanos.jpg"),
    style: "Buffet / À la Carte",
    openTime: "12:00–16:00, 18:00–22:00",
    mealPeriod: "Lunch, Dinner",
    location: "Nizuc",
    dressCode: "Casual (Lunch), Smart Casual (Dinner)",
  },
  {
    id: "niz-06",
    name: "Sweet & Coffee",
    description: "Coffee and pastry shop open 24/7.",
    image: require("@/assets/sweetncoffee.jpg"),
    style: "Cafe",
    openTime: "00:00–23:59",
    mealPeriod: "All Day",
    location: "Nizuc",
    dressCode: "Casual",
  },
];
