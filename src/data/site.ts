export const site = {
  brand: "Arcade Digital Galaxy",
  brandShort: "AdGalaxy",
  founder: "Mr. Rajendra Malhotra",
  foundedYear: 1986,
  tagline:
    "Capturing love, light, and legacy — Delhi's storytelling studio since 1986.",
  description:
    "A Delhi-based photography & cinematography studio specializing in genuine emotions and candid moments at weddings, maternity shoots, newborns, anniversaries, birthdays and corporate celebrations.",
  contact: {
    phone: "+91 98110 89656",
    phoneRaw: "9811089656",
    email: "Admin@adgalaxy.in",
    address: "C-172 Hari Nagar West, New Delhi, 110064",
  },
  social: [
    { name: "Instagram", url: "https://www.instagram.com/arcadedigitalgalaxy" },
    { name: "Facebook", url: "https://facebook.com/" },
    { name: "YouTube", url: "https://www.youtube.com/@arcadedigitalgalaxy" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; children: { label: string; href: string }[]; href?: never };

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  {
    label: "Work",
    children: [
      { label: "Collections", href: "#collections" },
      { label: "Little Ones", href: "#kids" },
      { label: "Films", href: "#films" },
    ],
  },
  { label: "Live", href: "#live" },
  {
    label: "Stories",
    children: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "Journal", href: "#journal" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Wedding Photography",
    short: "Full-day cinematic wedding storytelling.",
    description:
      "Pre-wedding sessions, bridal portraits, candid coverage, album design, highlight reels and family photography — the whole arc of your big day, told beautifully.",
    image: "/photos/ring-ceremony-staircase-portrait-couple.jpg",
  },
  {
    title: "Pre-Wedding & Couples",
    short: "Romantic, location-led shoots before the big day.",
    description:
      "Cinematic couple sessions in heritage, urban or natural settings — tailored to your story, your wardrobe and the mood you want to remember forever.",
    image: "/photos/pre-wedding-photoshoot.jpg",
  },
  {
    title: "Maternity Photography",
    short: "Soft, glowing portraits of the in-between.",
    description:
      "Solo and couple maternity sessions — indoor or outdoor, with multiple outfit changes, candid and posed photography, and intimate bump detail shots.",
    image: "/photos/maternity-shoot-image.jpg",
  },
  {
    title: "Newborn & Baby Shoots",
    short: "Tender, safe, beautifully styled newborn sessions.",
    description:
      "Posed and lifestyle newborn photography with safe handling, themed props, parent portraits and detailed close-up shots that you'll treasure for a lifetime.",
    image: "/photos/baby-shoot.jpg",
  },
  {
    title: "Birthday Photography",
    short: "First birthdays, cake smashes, milestone parties.",
    description:
      "Themed décor coverage, kids' parties, cake-smash sessions and adult milestone events — captured with genuine joy, candid moments and styled portraits.",
    image: "/photos/baby-birthday-celebration.jpg",
  },
  {
    title: "Anniversary Sessions",
    short: "Years together, rendered in light.",
    description:
      "Couple portrait sessions, family celebration coverage, surprise event documentation and styled romantic setups for the milestones that matter.",
    image: "/photos/25-anniversary-couple.jpg",
  },
  {
    title: "Corporate & Branding",
    short: "Headshots, events, LinkedIn-ready imagery.",
    description:
      "Executive portraits, LinkedIn personal branding, workplace coverage, team interaction shots, marketing imagery and full event photography for businesses.",
    image: "/photos/bride-red-dupatta-veil-portrait.jpg",
  },
  {
    title: "Customised Keepsakes",
    short: "Albums, frames and gifts from your shoot.",
    description:
      "Hand-finished wedding albums, framed portraits, photo books and bespoke keepsakes — designed in-studio so the best frames from your shoot live somewhere you can hold them.",
    image: "/photos/engagement-couple-closeup-pose.jpg",
  },
];

// Curated collections — every shoot has its own visual chapter.
export const collections = [
  {
    id: "harmanjeet-tavleen",
    title: "Harmanjeet & Tavleen",
    subtitle: "A Sikh wedding · New Delhi",
    category: "Wedding",
    cover: "/photos/ring-ceremony-staircase-portrait-couple.jpg",
    images: [
      "/photos/ring-ceremony-staircase-portrait-couple.jpg",
      "/photos/groom-full-portrait1.jpg",
      "/photos/couple-portrait-ring-ceremony.jpg",
      "/photos/engagement-groom-staircase-portrait.jpg",
      "/photos/bride-solo-portrait-ring-ceremony.jpg",
      "/photos/ring-ceremony-groom-portrait.jpg",
      "/photos/engagement-couple-closeup-pose.jpg",
      "/photos/engagement-couple-portrait.jpg",
    ],
  },
  {
    id: "deepanshu-bandana",
    title: "Deepanshu & Bandana",
    subtitle: "A grand North-Indian wedding",
    category: "Wedding",
    cover: "/photos/bridal-wedding-portrait.jpg",
    images: [
      "/photos/bridal-wedding-portrait.jpg",
      "/photos/wedding-couple-full-portrait.jpg",
      "/photos/wedding-bride-full-portrait.jpg",
      "/photos/bridal-side-profile-portrait.jpg",
      "/photos/engagement-couple-close-portrait.jpg",
      "/photos/groom-portrait.jpg",
      "/photos/ring-ceremony-bride-portrait.jpg",
      "/photos/wedding-varmala-moment.jpg",
      "/photos/bride-lehenga-royal-portrait.jpg",
      "/photos/bride-groom-nose-to-nose-portrait.jpg",
      "/photos/bride-red-dupatta-veil-portrait.jpg",
      "/photos/close-up-shot-bride-groom.jpg",
      "/photos/mirror-shot-bride.jpg",
      "/photos/bride-groom-portrait.jpg",
    ],
  },
  {
    id: "karan-lavisa",
    title: "Karan & Lavisa",
    subtitle: "Pre-wedding · Glasshouse + night",
    category: "Pre-Wedding",
    cover: "/photos/pre-wedding-photoshoot.jpg",
    images: [
      "/photos/pre-wedding-photoshoot.jpg",
      "/photos/pre-wedding-couple-portrait-night-shoot.jpg",
      "/photos/pre-wedding-candid-indoor-shoot.jpg",
      "/photos/pre-wedding-couple-glasshouse-shoot.jpg",
      "/photos/couple-portrait.jpg",
    ],
  },
  {
    id: "tilt-gallery",
    title: "Tilt Gallery",
    subtitle: "Editorial portraits, pulled from the archive",
    category: "Editorial",
    cover: "/photos/Bride-light-beam-portrait.jpg",
    images: [
      "/photos/Bride-light-beam-portrait.jpg",
      "/photos/bride-groom-candid-moment.jpg",
      "/photos/black-white-couple-closeup.jpg",
      "/photos/bride-groom-portrait-wedding.jpg",
      "/photos/artistic-indian-bridal-portrait.jpg",
      "/photos/bride-black-white-portrait.jpg",
      "/photos/bride-royal-photoshoot.jpg",
      "/photos/bride-groom-candid.jpg",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle Sessions",
    subtitle: "Maternity · anniversaries · birthdays",
    category: "Lifestyle",
    cover: "/photos/maternity-shoot-image.jpg",
    images: [
      "/photos/maternity-shoot-image.jpg",
      "/photos/baby-shoot.jpg",
      "/photos/25-anniversary-couple.jpg",
      "/photos/baby-birthday-celebration.jpg",
    ],
  },
];

export const portfolio = collections.flatMap((c) =>
  c.images.map((image, i) => ({
    title: i === 0 ? c.title : `${c.title} · ${i + 1}`,
    category: c.category,
    image,
  }))
);

export const whyUs = [
  {
    n: "01",
    title: "Cinematic Craft",
    body: "Decades of experience, creative vision and technical precision — delivered through cinematic photography standards and meticulous editing.",
  },
  {
    n: "02",
    title: "Transparent Pricing",
    body: "Clear, flexible, and fully transparent packages with no hidden fees — across every budget range.",
  },
  {
    n: "03",
    title: "Personalised Service",
    body: "We take time to understand your vision, style and the people in the room — then design coverage around it.",
  },
  {
    n: "04",
    title: "Reliability & Trust",
    body: "Punctual, professional and proven — a track record built across Delhi and India over almost four decades.",
  },
  {
    n: "05",
    title: "Eye for Detail",
    body: "We capture the little things — the décor, the outfits, the half-smile across the room — that make the day yours.",
  },
  {
    n: "06",
    title: "Flexible & End-to-End",
    body: "Consultations, shoots, edits, delivery — and a flexible schedule that respects how real events actually unfold.",
  },
];

export const testimonials = [
  {
    quote:
      "Professional, punctual, and incredibly talented. The entire process was smooth from booking to delivery.",
    name: "Recent Wedding Client",
    role: "Wedding, New Delhi",
  },
  {
    quote:
      "From the moment we met, we felt completely comfortable. The shoot was so relaxed and fun.",
    name: "Maternity Session",
    role: "Maternity, Delhi NCR",
  },
  {
    quote:
      "I was nervous about being in front of the camera, but the experience was amazing.",
    name: "Pre-Wedding Couple",
    role: "Pre-Wedding Shoot",
  },
  {
    quote:
      "The attention to detail is incredible. Every shot was thoughtfully composed and beautifully edited.",
    name: "Anniversary Client",
    role: "25th Anniversary",
  },
];

export const stats = [
  { k: "39+", v: "Years of craft" },
  { k: "1500+", v: "Weddings filmed" },
  { k: "50k+", v: "Frames delivered" },
  { k: "100%", v: "Stories, not stock" },
];

export const kidsGallery = [
  {
    src: "/photos/baby-girl-running-in-park.jpg",
    caption: "Park run · golden hour",
  },
  {
    src: "/photos/Baby-Shoot-Edit-38.jpg",
    caption: "Studio · soft light",
  },
  {
    src: "/photos/baby-girl-pink-dress-photoshoot.jpg",
    caption: "Pink dress · candid",
  },
  {
    src: "/photos/cute-girl-playground-portrait.jpg",
    caption: "Playground · play day",
  },
];

export const liveTelecast = {
  intro:
    "Bring distant family into the front row. We stream weddings, ceremonies and corporate events live to YouTube, Facebook, Instagram and private links — in HD, with multi-camera coverage and professional audio.",
  features: [
    {
      title: "Multi-camera production",
      body: "Two- to four-camera HD/4K setups with professional vision mixing — never a single static angle.",
    },
    {
      title: "Watch from any device",
      body: "Phone, tablet, laptop or smart TV. No app or download required for your guests.",
    },
    {
      title: "Replay & archive",
      body: "Every stream is recorded and handed back to you, so the moment is yours to revisit.",
    },
    {
      title: "Multi-platform delivery",
      body: "YouTube, Facebook, Instagram, Twitter and private links — broadcast simultaneously to wherever your people are.",
    },
    {
      title: "Custom event production",
      body: "Virtual, hybrid and large-scale event production with on-site graphics, lower-thirds and branded overlays.",
    },
    {
      title: "Reliable connectivity",
      body: "Bonded mobile uplinks and on-site backup so the broadcast doesn't drop when it matters most.",
    },
  ],
  platforms: ["YouTube", "Facebook", "Instagram", "Twitter / X", "Private link"],
};

// YouTube embed IDs (extracted from the studio's video gallery).
export const films = [
  { id: "krYpMM-8GHw", title: "First Birthday Teaser | Cinematic Family Celebrations" },
  { id: "us91I1dYYZ4", title: "Best Pre-Wedding Cinematic Teaser" },
  { id: "gipvVadFNhA", title: "Factory Tour Cinematic Teaser" },
  { id: "SbvSyNwk9jo", title: "Cinematic Wedding Teaser" },
  { id: "-iW745kVZNQ", title: "Cinematic Sagan Teaser" },
];

export const journal = [
  {
    title: "Why wedding photography & videography matter on the big day",
    excerpt:
      "Décor goes back in boxes, the food gets eaten, the music ends — your photos and your film are what stay. Here's how to think about coverage so you actually live the day.",
    date: "2026 · Weddings",
    image: "/photos/engagement-couple-portrait.jpg",
    href: "#contact",
  },
  {
    title: "Mistakes to avoid when choosing your wedding photographer",
    excerpt:
      "From booking on price alone to forgetting to ask about delivery timelines — a short checklist of things couples wish they'd known before signing the contract.",
    date: "2026 · Weddings",
    image: "/photos/bride-groom-portrait.jpg",
    href: "#contact",
  },
];
