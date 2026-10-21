export const site = {
  name: "Marlow House",
  title: "Marlow House, Fremantle. One, two and three bedroom residences by Harbour & Lane",
  description:
    "Marlow House is a boutique development of 48 apartments above Fremantle's working harbour. One, two and three bedrooms plus four penthouses, designed by Studio Reeve. Now selling off the plan, completion late 2027.",
  ogTitle: "Marlow House, Fremantle",
  ogDescription:
    "Forty-eight residences above Fremantle's working harbour. Register interest for first access to pricing and floor plans.",
  phone: "+61 8 9555 0142",
  phoneHref: "tel:+61895550142",
  phoneSchema: "+61-8-9555-0142",
  email: "hello@marlowhouse.com.au",
  address: {
    street: "14 Marine Terrace",
    locality: "Fremantle",
    region: "WA",
    postcode: "6160",
    country: "AU",
  },
};

export const announcement = {
  strong: "Display suite now open",
  rest: "Saturdays 10am to 2pm, 14 Marine Terrace, Fremantle",
};

export const navLinks = [
  { href: "#residences", label: "Residences" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#design", label: "Design" },
  { href: "#register", label: "Register" },
];

export type ImageAsset = { src: string; alt: string; width: number; height: number };

export const images = {
  heroExterior: {
    src: "/images/hero-exterior.jpg",
    alt: "Contemporary apartment building facade in concrete and glass, daylight",
    width: 1600,
    height: 2000,
  },
  locationAerial: {
    src: "/images/location-aerial.jpg",
    alt: "Aerial view over Fremantle, Western Australia",
    width: 1200,
    height: 1500,
  },
  locationHarbour: {
    src: "/images/location-harbour.jpg",
    alt: "Harbour with fishing boats moored in calm water",
    width: 1200,
    height: 1500,
  },
  designKitchen: {
    src: "/images/design-kitchen.jpg",
    alt: "Kitchen with white stone benchtop and light oak joinery",
    width: 1920,
    height: 1080,
  },
  designLiving: {
    src: "/images/design-living.jpg",
    alt: "Minimalist living room in oak and white with soft daylight",
    width: 1200,
    height: 1500,
  },
  designBathroom: {
    src: "/images/design-bathroom.jpg",
    alt: "Bathroom in light stone with an oak vanity",
    width: 1200,
    height: 1500,
  },
  designTerrace: {
    src: "/images/design-terrace.jpg",
    alt: "Apartment balcony terrace with chairs and a city view",
    width: 1920,
    height: 1080,
  },
} satisfies Record<string, ImageAsset>;

export const hero = {
  eyebrow: "Fremantle, Western Australia · Now selling off the plan",
  titleLine: "Leave the upkeep.",
  titleAccent: "Keep the life.",
  lead: "Forty-eight residences above Fremantle's working harbour. One, two and three bedrooms, plus four penthouses.",
  stats: [
    { value: "48", label: "Residences" },
    { value: "68 to 214", label: "Square metres" },
    { value: "4 min", label: "Walk to the harbour" },
  ],
};

export const intro = {
  eyebrow: "01 / The idea",
  title: "A home that runs itself.",
  paragraphs: [
    "Marlow House is built for people who want the ease of an apartment without giving up the feeling of a house. Wide floor plates, deep balconies and a building team that handles the rest.",
    "Every residence faces either the harbour or the courtyard garden. None face a corridor.",
  ],
};

export type BedFilter = "1" | "2" | "3" | "ph";

export type Residence = {
  id: string;
  beds: BedFilter;
  title: string;
  bed: string;
  bath: string;
  area: string;
  priceLabel: string;
  price: string;
  note: string;
};

export const residencesSection = {
  eyebrow: "02 / Residences",
  title: "Four ways to live here.",
  lead: "Choose by bedrooms. Every plan has a deep balcony or terrace and faces the harbour or the courtyard.",
  empty: "No residences match that filter.",
  filters: [
    { value: "all", label: "All" },
    { value: "1", label: "1 bedroom" },
    { value: "2", label: "2 bedroom" },
    { value: "3", label: "3 bedroom" },
    { value: "ph", label: "Penthouse" },
  ] as { value: "all" | BedFilter; label: string }[],
};

export const residences: Residence[] = [
  {
    id: "one-bedroom",
    beds: "1",
    title: "One bedroom",
    bed: "1 bed",
    bath: "1 bath",
    area: "68 to 74 sqm",
    priceLabel: "From",
    price: "$720,000",
    note: "Courtyard facing, with a study nook and 12 sqm balcony.",
  },
  {
    id: "two-bedroom",
    beds: "2",
    title: "Two bedroom",
    bed: "2 bed",
    bath: "2 bath",
    area: "96 to 118 sqm",
    priceLabel: "From",
    price: "$1,150,000",
    note: "Harbour or courtyard. Separate laundry, walk-in robe to main.",
  },
  {
    id: "three-bedroom",
    beds: "3",
    title: "Three bedroom",
    bed: "3 bed",
    bath: "2 bath",
    area: "142 to 160 sqm",
    priceLabel: "From",
    price: "$1,780,000",
    note: "Corner residences with dual aspect and a 28 sqm wraparound terrace.",
  },
  {
    id: "penthouse",
    beds: "ph",
    title: "Penthouse",
    bed: "3 bed",
    bath: "3 bath",
    area: "198 to 214 sqm",
    priceLabel: "Price",
    price: "On application",
    note: "Four only. Full-floor living, private rooftop garden, two car bays.",
  },
];

export type AmenityIcon = "pool" | "dining" | "gym" | "garden" | "parking" | "concierge";

export const amenitiesSection = {
  eyebrow: "03 / Amenities",
  title: "Everything you need. Nothing you don't.",
  items: [
    { icon: "pool", title: "Rooftop pool and sun deck", body: "Heated lap pool with harbour views, cabanas and outdoor shower." },
    { icon: "dining", title: "Residents' lounge and dining room", body: "Private dining for twelve with a catering kitchen, bookable by residents." },
    { icon: "gym", title: "Gym and yoga studio", body: "Equipped gym, dedicated yoga room and change rooms on level one." },
    { icon: "garden", title: "Courtyard garden with mature olives", body: "A sheltered garden at the centre of the building, planted with established trees." },
    { icon: "parking", title: "Secure parking with EV charging", body: "Basement parking with EV chargers to every bay and secure bike storage." },
    { icon: "concierge", title: "Concierge, Monday to Saturday", body: "Parcels, bookings, keys and the quiet jobs that keep a home running." },
  ] as { icon: AmenityIcon; title: string; body: string }[],
};

export const locationSection = {
  eyebrow: "04 / Fremantle",
  title: "Four minutes to the water, two to coffee.",
  body: "Marine Terrace sits between the harbour and the West End. Everything is on foot.",
  distances: [
    { place: "Fishing Boat Harbour", time: "4 min walk" },
    { place: "Fremantle Markets", time: "6 min walk" },
    { place: "South Beach", time: "12 min cycle" },
    { place: "Fremantle Station", time: "9 min walk" },
    { place: "Perth CBD", time: "28 min train" },
    { place: "Fremantle Hospital", time: "5 min drive" },
  ],
  images: [images.locationAerial, images.locationHarbour],
};

export type SchemeId = "harbour" | "dune";

export type InteriorImages = {
  kitchen: ImageAsset;
  living: ImageAsset;
  bathroom: ImageAsset;
  terrace: ImageAsset;
};

export type Scheme = {
  id: SchemeId;
  name: string;
  desc: string;
  swatches: { hex: string; name: string; use: string }[];
  /** Optional per-scheme photos. Schemes without their own set fall back to Harbour. */
  images?: InteriorImages;
};

const harbourInteriors: InteriorImages = {
  kitchen: images.designKitchen,
  living: images.designLiving,
  bathroom: images.designBathroom,
  terrace: images.designTerrace,
};

export const designSection = {
  eyebrow: "05 / Design",
  title: "Details you feel before you notice.",
  body: "Two finish schemes by Studio Reeve. Choose one, and the whole residence follows.",
  defaultImages: harbourInteriors,
};

export const schemes: Scheme[] = [
  {
    id: "harbour",
    name: "Harbour",
    desc: "Pale timber, white stone and cool metal for a bright, coastal room.",
    swatches: [
      { hex: "#D9C7A8", name: "Light oak", use: "Floors and joinery" },
      { hex: "#EDEBE5", name: "White stone", use: "Benchtops" },
      { hex: "#B9BCBF", name: "Brushed nickel", use: "Tapware" },
    ],
    images: harbourInteriors,
  },
  {
    id: "dune",
    name: "Dune",
    desc: "Smoked timber, warm travertine and bronze for a deeper, softer room.",
    swatches: [
      { hex: "#6E5A4A", name: "Smoked oak", use: "Floors and joinery" },
      { hex: "#D8C9B4", name: "Warm travertine", use: "Benchtops" },
      { hex: "#8A6A48", name: "Bronze", use: "Tapware" },
    ],
    // Add `images` here once the Dune set (design-*-dune.jpg) is generated. See README.
  },
];

export const teamSection = {
  eyebrow: "The team",
  title: "Built by people who build here.",
  members: [
    { role: "Developer", name: "Harbour & Lane", body: "Twelve completed buildings across Perth and Fremantle since 2009." },
    { role: "Architect", name: "Studio Reeve", body: "Award-winning practice, Australian Institute of Architects WA Chapter, 2024." },
  ],
};

export const faqSection = {
  eyebrow: "Questions",
  title: "Good to know.",
};

export const faqs = [
  {
    q: "When is completion?",
    a: "Construction starts early 2026 with completion scheduled for the fourth quarter of 2027.",
  },
  {
    q: "What is the deposit?",
    a: "A 10% deposit on exchange, with the balance due on settlement. Deposits are held in a trust account.",
  },
  {
    q: "Are pets allowed?",
    a: "Yes. Marlow House is pet friendly, with a wash station in the basement and the courtyard garden steps from the lobby.",
  },
  {
    q: "Can I see a display suite?",
    a: "The display suite at 14 Marine Terrace is open Saturdays 10am to 2pm, or by appointment any weekday.",
  },
];

export const registerSection = {
  eyebrow: "06 / Register",
  title: "Register your interest.",
  residenceTypes: ["One bedroom", "Two bedroom", "Three bedroom", "Penthouse", "Not sure yet"],
  defaultResidenceType: "Not sure yet",
  buyerTypes: ["Owner occupier", "Investor"],
  brochureLabel: "Send me the brochure and floor plans",
  footnote: "Registered buyers receive pricing and floor plans first, before public release.",
  submit: "Register",
  errors: {
    fname: "Please enter your first name.",
    lname: "Please enter your last name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a phone number.",
  },
  success: {
    title: "Thank you, you're registered.",
    body: "We'll send pricing and floor plans to your inbox shortly, and the display suite team will be in touch.",
  },
};

export const footer = {
  legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Disclaimer" },
  ],
  team: ["Developer: Harbour & Lane", "Architect: Studio Reeve"],
  disclaimer: "Images are artist impressions. Finishes, dimensions and availability subject to change.",
  copyright: "© 2026 Marlow House",
};
