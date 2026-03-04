// Brand Sustainability Ratings Data
// Add more brands by following the same structure

export const brands = [
  {
    id: "patagonia",
    name: "Patagonia",
    category: "clothing",
    total_score: 78,
    tier: 2,
    certifications: ["b_corp", "fair_trade", "one_percent"],
    category_scores: {
      circular_economy: { score: 14, max: 20 },
      transparency: { score: 16, max: 20 },
      certifications: { score: 12, max: 15 },
      impact_claims: { score: 11, max: 15 },
      business_model: { score: 13, max: 15 },
      social: { score: 8, max: 10 },
      climate: { score: 4, max: 5 }
    },
    key_findings: {
      strengths: ["B Corp certified", "Repair program", "1% for Planet member"],
      weaknesses: ["Limited take-back reporting"],
      certifications: ["B Corporation", "Fair Trade", "1% for Planet"]
    },
    description: "Outdoor apparel company known for environmental activism and durable products."
  },
  {
    id: "grove-collaborative",
    name: "Grove Collaborative",
    category: "home",
    total_score: 72,
    tier: 2,
    certifications: ["b_corp", "carbon_neutral"],
    category_scores: {
      circular_economy: { score: 12, max: 20 },
      transparency: { score: 14, max: 20 },
      certifications: { score: 11, max: 15 },
      impact_claims: { score: 12, max: 15 },
      business_model: { score: 12, max: 15 },
      social: { score: 7, max: 10 },
      climate: { score: 4, max: 5 }
    },
    key_findings: {
      strengths: ["Plastic-neutral shipping", "B Corp certified", "Carbon neutral operations"],
      weaknesses: ["Some products contain palm oil derivatives"],
      certifications: ["B Corporation", "Carbon Neutral"]
    },
    description: "Online marketplace for sustainable home and personal care products."
  },
  {
    id: "blueland",
    name: "Blueland",
    category: "home",
    total_score: 85,
    tier: 1,
    certifications: ["b_corp", "carbon_neutral"],
    category_scores: {
      circular_economy: { score: 18, max: 20 },
      transparency: { score: 17, max: 20 },
      certifications: { score: 13, max: 15 },
      impact_claims: { score: 13, max: 15 },
      business_model: { score: 14, max: 15 },
      social: { score: 7, max: 10 },
      climate: { score: 3, max: 5 }
    },
    key_findings: {
      strengths: ["Eliminates single-use plastic", "Refillable system", "Concentrated tablets reduce shipping emissions"],
      weaknesses: ["Limited product range"],
      certifications: ["B Corporation", "Carbon Neutral", "EPA Safer Choice"]
    },
    description: "Cleaning products company focused on eliminating single-use plastic."
  },
  {
    id: "allbirds",
    name: "Allbirds",
    category: "clothing",
    total_score: 68,
    tier: 2,
    certifications: ["b_corp", "carbon_neutral"],
    category_scores: {
      circular_economy: { score: 11, max: 20 },
      transparency: { score: 15, max: 20 },
      certifications: { score: 10, max: 15 },
      impact_claims: { score: 10, max: 15 },
      business_model: { score: 12, max: 15 },
      social: { score: 6, max: 10 },
      climate: { score: 4, max: 5 }
    },
    key_findings: {
      strengths: ["Carbon footprint labeling", "Sustainable materials (wool, eucalyptus)", "Carbon neutral"],
      weaknesses: ["Limited recycling program", "Premium pricing limits accessibility"],
      certifications: ["B Corporation", "Carbon Neutral"]
    },
    description: "Footwear brand using natural and sustainable materials."
  },
  {
    id: "seventh-generation",
    name: "Seventh Generation",
    category: "home",
    total_score: 62,
    tier: 3,
    certifications: ["b_corp"],
    category_scores: {
      circular_economy: { score: 10, max: 20 },
      transparency: { score: 13, max: 20 },
      certifications: { score: 9, max: 15 },
      impact_claims: { score: 10, max: 15 },
      business_model: { score: 11, max: 15 },
      social: { score: 6, max: 10 },
      climate: { score: 3, max: 5 }
    },
    key_findings: {
      strengths: ["Plant-based ingredients", "Ingredient transparency", "Long sustainability track record"],
      weaknesses: ["Owned by Unilever", "Plastic packaging still prevalent"],
      certifications: ["B Corporation", "USDA Certified Biobased"]
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
  one_percent: "1% for Planet"
};

// Category labels for display
export const categoryLabels = {
  clothing: "Clothing",
  home: "Home & Kitchen",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  bedroom: "Bedroom"
};

// Tier descriptions
export const tierDescriptions = {
  1: { label: "Leader", description: "Industry leader in sustainability practices", color: "#2d5f3f" },
  2: { label: "Strong", description: "Strong sustainability commitment with room to grow", color: "#4a7c59" },
  3: { label: "Moderate", description: "Making progress but significant improvements needed", color: "#7d8471" },
  4: { label: "Needs Work", description: "Early stages of sustainability journey", color: "#999999" }
};

// Category score labels for display
export const categoryScoreLabels = {
  circular_economy: "Circular Economy",
  transparency: "Transparency",
  certifications: "Certifications",
  impact_claims: "Impact Claims",
  business_model: "Business Model",
  social: "Social Responsibility",
  climate: "Climate Action"
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
