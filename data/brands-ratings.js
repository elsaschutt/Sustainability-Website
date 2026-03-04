// Brand Sustainability Ratings Data
// Based on Sustainability Scorecard V5 - 165 points total
// Add more brands by following the same structure

export const brands = [
  // PLACEHOLDER BRANDS - Replace with real scored brands
  {
    id: "patagonia",
    name: "Patagonia",
    category: "clothing",
    product_type: "durable",
    total_score: 128,
    tier: 2,
    certifications: ["b_corp", "fair_trade", "one_percent"],
    category_scores: {
      circular_economy: { score: 22, max: 30 },       // A: Take-back, repair, recycled content
      transparency: { score: 28, max: 35 },           // B: LCA, Scope 3, reporting
      certifications: { score: 16, max: 25 },         // C: Third-party certs
      climate_renewable: { score: 18, max: 25 },      // D: Climate positive, renewables
      business_model: { score: 16, max: 20 },         // E: Anti-consumption, durability
      social: { score: 12, max: 15 },                 // F: Living wage, audits
      impact_claims: { score: 8, max: 10 },           // G: Quantified claims
      regenerative: { score: 3, max: 5 }              // H: Bonus - ecosystem restoration
    },
    key_findings: {
      strengths: [
        "Worn Wear repair & resale program",
        "B Corp certified (score 100+)",
        "1% for Planet member",
        "Full supply chain transparency"
      ],
      weaknesses: [
        "Limited on-site renewable energy",
        "Scope 3 reduction targets need acceleration"
      ],
      certifications: ["B Corporation", "Fair Trade Certified", "1% for Planet", "bluesign"]
    },
    description: "Outdoor apparel company known for environmental activism, repair programs, and durable products."
  },
  {
    id: "blueland",
    name: "Blueland",
    category: "home",
    product_type: "consumable",
    total_score: 136,
    tier: 2,
    certifications: ["b_corp", "carbon_neutral", "epa_safer_choice"],
    category_scores: {
      circular_economy: { score: 26, max: 30 },       // Refill tablets, reusable bottles
      transparency: { score: 25, max: 35 },           // Good reporting
      certifications: { score: 18, max: 25 },         // B Corp, EPA Safer Choice
      climate_renewable: { score: 20, max: 25 },      // Carbon neutral, concentrated shipping
      business_model: { score: 18, max: 20 },         // Anti-consumption focused
      social: { score: 10, max: 15 },                 // Fair labor
      impact_claims: { score: 9, max: 10 },           // Specific plastic reduction claims
      regenerative: { score: 2, max: 5 }              // Some initiatives
    },
    key_findings: {
      strengths: [
        "Eliminates single-use plastic bottles",
        "Concentrated tablet refill system",
        "90% less carbon vs traditional cleaners",
        "Reusable Forever Bottles"
      ],
      weaknesses: [
        "Limited product range",
        "No LCA published yet"
      ],
      certifications: ["B Corporation", "Carbon Neutral", "EPA Safer Choice", "Leaping Bunny"]
    },
    description: "Cleaning products company eliminating single-use plastic with refillable tablet system."
  },
  {
    id: "grove-collaborative",
    name: "Grove Collaborative",
    category: "home",
    product_type: "mixed",
    total_score: 118,
    tier: 2,
    certifications: ["b_corp", "carbon_neutral"],
    category_scores: {
      circular_economy: { score: 20, max: 30 },
      transparency: { score: 22, max: 35 },
      certifications: { score: 15, max: 25 },
      climate_renewable: { score: 16, max: 25 },
      business_model: { score: 14, max: 20 },
      social: { score: 10, max: 15 },
      impact_claims: { score: 7, max: 10 },
      regenerative: { score: 2, max: 5 }
    },
    key_findings: {
      strengths: [
        "Plastic-neutral shipping",
        "B Corp certified",
        "Carbon neutral operations",
        "Concentrates & refills available"
      ],
      weaknesses: [
        "Some products contain palm oil derivatives",
        "Marketplace model limits full control"
      ],
      certifications: ["B Corporation", "Certified Carbon Neutral"]
    },
    description: "Online marketplace for sustainable home and personal care products."
  },
  {
    id: "allbirds",
    name: "Allbirds",
    category: "clothing",
    product_type: "durable",
    total_score: 105,
    tier: 3,
    certifications: ["b_corp", "carbon_neutral"],
    category_scores: {
      circular_economy: { score: 16, max: 30 },
      transparency: { score: 24, max: 35 },
      certifications: { score: 14, max: 25 },
      climate_renewable: { score: 15, max: 25 },
      business_model: { score: 14, max: 20 },
      social: { score: 9, max: 15 },
      impact_claims: { score: 8, max: 10 },
      regenerative: { score: 2, max: 5 }
    },
    key_findings: {
      strengths: [
        "Carbon footprint labeling on all products",
        "Sustainable materials (merino, eucalyptus, sugarcane)",
        "Carbon neutral since 2019"
      ],
      weaknesses: [
        "Limited repair/take-back program",
        "Premium pricing limits accessibility",
        "Recycled content could be higher"
      ],
      certifications: ["B Corporation", "Certified Carbon Neutral", "FSC Certified"]
    },
    description: "Footwear and apparel brand using natural materials with carbon footprint labeling."
  },
  {
    id: "seventh-generation",
    name: "Seventh Generation",
    category: "home",
    product_type: "consumable",
    total_score: 92,
    tier: 3,
    certifications: ["b_corp", "usda_biobased"],
    category_scores: {
      circular_economy: { score: 14, max: 30 },
      transparency: { score: 20, max: 35 },
      certifications: { score: 12, max: 25 },
      climate_renewable: { score: 12, max: 25 },
      business_model: { score: 12, max: 20 },
      social: { score: 9, max: 15 },
      impact_claims: { score: 7, max: 10 },
      regenerative: { score: 1, max: 5 }
    },
    key_findings: {
      strengths: [
        "Plant-based ingredients",
        "Full ingredient transparency",
        "Long sustainability track record"
      ],
      weaknesses: [
        "Owned by Unilever (corporate parent)",
        "Plastic packaging still prevalent",
        "Limited refill options"
      ],
      certifications: ["B Corporation", "USDA Certified Biobased", "EPA Safer Choice"]
    },
    description: "Plant-based cleaning and personal care products focused on ingredient safety."
  }
];

// Certification labels for display
export const certificationLabels = {
  b_corp: "B Corp",
  carbon_neutral: "Carbon Neutral",
  fair_trade: "Fair Trade",
  gots: "GOTS",
  one_percent: "1% for Planet",
  epa_safer_choice: "EPA Safer Choice",
  usda_biobased: "USDA Biobased",
  fsc: "FSC Certified",
  cradle_to_cradle: "Cradle to Cradle",
  ecovadis_gold: "EcoVadis Gold",
  ecovadis_platinum: "EcoVadis Platinum",
  climate_neutral: "Climate Neutral",
  sbti: "SBTi Validated"
};

// Category labels for display
export const categoryLabels = {
  clothing: "Clothing & Fashion",
  home: "Home & Cleaning",
  bathroom: "Bathroom & Personal Care",
  kitchen: "Kitchen",
  bedroom: "Bedroom & Textiles"
};

// Product type labels
export const productTypeLabels = {
  durable: "Durable Product",
  consumable: "Consumable Product",
  mixed: "Mixed"
};

// Tier descriptions (based on V5 scorecard - 165 total points)
export const tierDescriptions = {
  1: {
    label: "Verified Leader",
    range: "145-165",
    description: "Comprehensive circular systems, full transparency, elite certifications, climate positive",
    color: "#1a472a"
  },
  2: {
    label: "Certified Sustainable",
    range: "115-144",
    description: "Strong circular practices, good transparency, multiple certifications, carbon neutral minimum",
    color: "#2d5f3f"
  },
  3: {
    label: "Making Progress",
    range: "85-114",
    description: "Some circularity, transparency efforts, certifications present, solid sustainability foundation",
    color: "#4a7c59"
  },
  4: {
    label: "Early Stage",
    range: "55-84",
    description: "Beginning sustainability journey, limited transparency or certifications",
    color: "#7d8471"
  },
  5: {
    label: "Needs Improvement",
    range: "0-54",
    description: "Minimal sustainability practices, significant room for improvement",
    color: "#999999"
  }
};

// Category score labels for display (matching V5 scorecard)
export const categoryScoreLabels = {
  circular_economy: "Circular Economy & End-of-Life",
  transparency: "Transparency & Data",
  certifications: "Third-Party Certifications",
  climate_renewable: "Climate & Renewable Energy",
  business_model: "Business Model Integrity",
  social: "Social Responsibility",
  impact_claims: "Measurable Impact Claims",
  regenerative: "Regenerative Impact"
};

// Category descriptions for tooltips/details
export const categoryDescriptions = {
  circular_economy: "Take-back programs, repair services, refill systems, recycled content, packaging",
  transparency: "Life Cycle Assessment, Scope 3 emissions, sustainability reporting, supplier lists",
  certifications: "B Corp, EcoVadis, Cradle to Cradle, Fair Trade, ISO 14001, and other third-party certs",
  climate_renewable: "On-site renewables, carbon neutral/positive status, emissions reduction, PPAs",
  business_model: "Anti-consumption design, durability, slow production, resale programs",
  social: "Living wage, factory audits, worker safety, supply chain transparency",
  impact_claims: "Quantified claims, material transparency, no greenwashing",
  regenerative: "Ecosystem restoration, zero waste, water positive programs"
};

// Helper function to get brand by ID
export function getBrandById(id) {
  return brands.find(brand => brand.id === id);
}

// Helper function to get all unique categories
export function getAllCategories() {
  return [...new Set(brands.map(brand => brand.category))];
}

// Helper function to get all unique certifications
export function getAllCertifications() {
  const allCerts = brands.flatMap(brand => brand.certifications);
  return [...new Set(allCerts)];
}

// Helper function to calculate tier from score
export function getTierFromScore(score) {
  if (score >= 145) return 1;
  if (score >= 115) return 2;
  if (score >= 85) return 3;
  if (score >= 55) return 4;
  return 5;
}

// Template for adding new brands (copy and fill in)
export const brandTemplate = {
  id: "brand-slug",                    // URL-friendly lowercase with hyphens
  name: "Brand Name",
  category: "home",                    // clothing, home, bathroom, kitchen, bedroom
  product_type: "consumable",          // durable, consumable, mixed
  total_score: 0,                      // Sum of all category scores (max 165)
  tier: 5,                             // Use getTierFromScore() or calculate manually
  certifications: [],                  // Array of cert keys from certificationLabels
  category_scores: {
    circular_economy: { score: 0, max: 30 },
    transparency: { score: 0, max: 35 },
    certifications: { score: 0, max: 25 },
    climate_renewable: { score: 0, max: 25 },
    business_model: { score: 0, max: 20 },
    social: { score: 0, max: 15 },
    impact_claims: { score: 0, max: 10 },
    regenerative: { score: 0, max: 5 }
  },
  key_findings: {
    strengths: [],
    weaknesses: [],
    certifications: []                 // Full certification names for display
  },
  description: ""
};
