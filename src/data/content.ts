/**
 * Single source of truth for every design.
 *
 * All 12 homepage designs import this module and render the SAME copy, so the only
 * thing that differs between them is the visual design. Copy is drawn from the
 * approved WinWin deck (Crown Moulding Website Plan + Copy.pdf) plus a few agreed
 * conversion enhancements (stat counters, guarantee, "done in a day").
 *
 * House rules: brand name, phone, email, photos are placeholders (client has no
 * assets yet). NO EM DASHES anywhere in copy. Phone routes to "dad" once confirmed.
 */

export const meta = {
  brandName: "[Company Name]",
  phone: "(647) 000-0000",
  phoneHref: "tel:+16470000000",
  email: "hello@example.com",
  tagline: "Crown Moulding & Finish Carpentry",
  serviceRegion: "Greater Toronto Area",
  year: 2026,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Crown Moulding & Finish Carpentry in the GTA",
  headline: "Crown Moulding That Makes Your Home Look Custom-Built",
  subhead:
    "Premium crown moulding and finish carpentry across the Greater Toronto Area. Over 15 years of craftsmanship, measured and installed on-site to a flawless, paint-ready finish.",
  primaryCta: { label: "Get a Free Quote", href: "#contact" },
  secondaryCta: { label: "Call (647) 000-0000", href: "tel:+16470000000" },
  imageCaption: "Finished living room with custom crown moulding",
};

export const trustBar = [
  "15+ Years Experience",
  "5-Star Rated",
  "Fully Insured & WSIB",
  "Family-Owned",
  "Free In-Home Consultation",
];

/** Animated count-up stats. `value` is the final number, `suffix` the unit. */
export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 250000, suffix: "+", label: "Linear Ft of Trim Installed" },
  { value: 9, suffix: "", label: "GTA Cities Served" },
];

export const about = {
  heading: "Finish Carpentry Built on 15 Years of Craftsmanship",
  body: "[Company Name] is a family-run finish carpentry company serving homeowners across the Greater Toronto Area. For over 15 years we have specialized in crown moulding, wainscoting, waffle ceilings, and trim, the details that make a house feel custom-built. Every job is measured and cut on-site, finished with filled nail holes and caulking, and left clean and paint-ready. We treat your home like our own: on time, tidy, and done right the first time.",
  tiles: [
    { title: "15+ Years of Craftsmanship", icon: "hammer" },
    { title: "Fully Insured & WSIB", icon: "shield" },
    { title: "Clean, On-Time Installs", icon: "sparkle" },
    { title: "Free Design Consultation", icon: "compass" },
  ],
  imageCaption: "Photo of the owner / crew on a job site",
};

export const services = {
  heading: "What We Do",
  items: [
    {
      title: "Crown Moulding",
      blurb:
        "Elegant, precision-fitted moulding where your walls meet the ceiling. Most rooms done in a single day.",
      icon: "crown",
    },
    {
      title: "Wainscoting",
      blurb:
        "Classic wall panelling that adds depth and character to dining rooms, hallways, and stairwells.",
      icon: "panel",
    },
    {
      title: "Waffle & Coffered Ceilings",
      blurb:
        "Statement ceilings with recessed panels that bring a custom, high-end feel to any room.",
      icon: "grid",
    },
    {
      title: "Baseboards & Trim",
      blurb:
        "Clean, modern baseboards and casings that frame your floors, doors, and windows.",
      icon: "ruler",
    },
    {
      title: "Accent & Feature Walls",
      blurb:
        "Panelled feature walls that turn a plain wall into the focal point of the room.",
      icon: "wall",
    },
    {
      title: "Interior Doors",
      blurb:
        "Supply and install of interior doors, fitted and finished to match your trim.",
      icon: "door",
    },
  ],
};

export const guarantee = {
  heading: "Done Right, Done in a Day",
  promise:
    "If you are not satisfied, we don't expect you to pay. That is our commitment and our guarantee to you.",
  speed:
    "Most crown moulding projects are completed in a single day, so your routine is only mildly disrupted.",
  points: [
    "Fixed, no-surprise quote",
    "Clean, paint-ready finish",
    "Tidy job site, every time",
  ],
};

export const gallery = {
  heading: "Our Work",
  subheading:
    "A selection of recent crown moulding, wainscoting, and ceiling projects across the GTA.",
  /** Placeholder tiles captioned by type + city. Swap in real photos later. */
  items: [
    { type: "Crown Moulding", city: "Vaughan" },
    { type: "Waffle Ceiling", city: "Richmond Hill" },
    { type: "Wainscoting", city: "Markham" },
    { type: "Accent Wall", city: "Toronto" },
    { type: "Coffered Ceiling", city: "King City" },
    { type: "Baseboards & Trim", city: "Aurora" },
    { type: "Crown Moulding", city: "Newmarket" },
    { type: "Interior Doors", city: "Oakville" },
    { type: "Feature Wall", city: "Toronto" },
  ],
};

export const process = {
  heading: "How It Works",
  steps: [
    {
      number: 1,
      title: "Free Consultation",
      blurb: "We visit, measure, and help you pick the right profiles.",
    },
    {
      number: 2,
      title: "Design & Quote",
      blurb: "A clear, fixed quote with no surprises.",
    },
    {
      number: 3,
      title: "Install & Clean Finish",
      blurb: "We install, caulk, and leave it paint-ready and spotless.",
    },
  ],
};

export const reviews = {
  heading: "What Homeowners Say",
  rating: 5.0,
  /** Placeholder reviews. Collect real Google reviews from the next few clients. */
  items: [
    {
      quote:
        "The crown moulding completely transformed our living room. Clean work, on time, and the finish is flawless.",
      name: "Sarah M.",
      city: "Vaughan",
      stars: 5,
    },
    {
      quote:
        "They built a waffle ceiling in our dining room in a single day. It looks like it came with the house. Highly recommend.",
      name: "David L.",
      city: "Richmond Hill",
      stars: 5,
    },
    {
      quote:
        "Professional from the first measurement to the last bit of caulking. Tidy, fair price, and beautiful results.",
      name: "Priya K.",
      city: "Markham",
      stars: 5,
    },
  ],
};

export const partners = {
  heading: "Trusted Partners",
  note: "Supplier and brand logos go here. Left blank until confirmed.",
  /** Placeholder partner slots. */
  count: 5,
};

export const serviceAreas = {
  heading: "Where We Work",
  intro:
    "Proudly serving Toronto, Vaughan, Markham, Richmond Hill, King City, Aurora, Newmarket, Oakville, and the surrounding GTA.",
  cities: [
    "Toronto",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "King City",
    "Aurora",
    "Newmarket",
    "Oakville",
  ],
};

export const contact = {
  heading: "Get Your Free Estimate",
  subcopy:
    "Tell us about your project and we'll get back to you the same day. Add a photo of your room for a faster quote.",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "service",
      label: "Service",
      type: "select",
      required: false,
      options: [
        "Crown Moulding",
        "Wainscoting",
        "Waffle & Coffered Ceilings",
        "Baseboards & Trim",
        "Accent & Feature Walls",
        "Interior Doors",
        "Not sure yet",
      ],
    },
    { name: "message", label: "Message", type: "textarea", required: false },
    { name: "photo", label: "Photo upload (optional)", type: "file", required: false },
  ],
  submitLabel: "Get My Free Quote",
  altContact: "or call (647) 000-0000",
};

export const footer = {
  hours: "Mon to Sat, 8am to 6pm",
  badges: ["Fully Insured & WSIB"],
  socials: ["Instagram", "Facebook", "Google"],
};

/**
 * Metadata for the 12 designs, used by the chooser index and the switcher.
 * `swatches` are [background, accent, ink] preview chips for the chooser cards.
 * The actual design pages own their full palettes.
 */
export const designs = [
  { id: "01", name: "Deck Navy & Gold", note: "Classic trust, matches the approved deck", swatches: ["#15243F", "#C8923D", "#F7F5F0"] },
  { id: "02", name: "Artisan Cream & Bronze", note: "Editorial, handcrafted luxury", swatches: ["#F7F3EC", "#B08243", "#1C1A17"] },
  { id: "03", name: "Deep Forest & Brass", note: "Upscale, premium restraint", swatches: ["#1F3A2E", "#C7A24A", "#F4EFE6"] },
  { id: "04", name: "Charcoal & Gold Minimal", note: "Airy, modern, photo-forward", swatches: ["#FFFFFF", "#C9A227", "#16181D"] },
  { id: "05", name: "Architect Blueprint", note: "Technical, precise, line-drawn", swatches: ["#F2F0EA", "#1F5F63", "#1A1A1A"] },
  { id: "06", name: "Heritage Slate & Burgundy", note: "Old-world estate", swatches: ["#46505C", "#7A2230", "#F3EFE6"] },
  { id: "07", name: "Sage & Walnut", note: "Warm, natural, organic", swatches: ["#EDEAE0", "#8A9A82", "#5B4636"] },
  { id: "08", name: "Bold Black & Amber", note: "High-contrast, energetic", swatches: ["#111111", "#F59E0B", "#FFFFFF"] },
  { id: "09", name: "Warm White & Terracotta", note: "Friendly, approachable premium", swatches: ["#FBF7F2", "#C26B4B", "#2A2422"] },
  { id: "10", name: "Stone & Teal", note: "Fresh, clean, modern", swatches: ["#EFEFEC", "#1F5F63", "#1E2422"] },
  { id: "11", name: "Espresso & Champagne", note: "Dark-luxe, dramatic", swatches: ["#241C16", "#D8C39A", "#F3ECE0"] },
  { id: "12", name: "Ivory & Royal Blue", note: "Crisp, professional, snappy", swatches: ["#FBFAF7", "#2348C6", "#16181D"] },
];

export const TOTAL_DESIGNS = designs.length;
