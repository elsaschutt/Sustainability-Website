// Brand Sustainability Ratings Data
// Based on Sustainability Scorecard V7 - 165 points total
// Add more brands by following the same structure

export const brands = [
  {
    id: "patagonia",
    name: "Patagonia",
    category: "clothing",
    product_type: "durable",
    total_score: 128,
    tier: 2,
    certifications: ["b_corp", "fair_trade", "one_percent"],
    category_scores: {
      circular_economy: {
        total: 22,
        max: 30,
        criteria: {
          takeback: { score: 6, max: 8, notes: "Worn Wear program with resale" },
          repair: { score: 7, max: 7, notes: "Lifetime repair guarantee" },
          refill_reuse: { score: 4, max: 6, notes: "Limited refill options" },
          disassembly: { score: 3, max: 5, notes: "Some design for recyclability" },
          recycled_content: { score: 2, max: 2, notes: "Recycled polyester used" },
          packaging: { score: 0, max: 2, notes: "Still uses plastic packaging" }
        }
      },
      transparency: {
        total: 28,
        max: 35,
        criteria: {
          lca: { score: 8, max: 10, notes: "Footprint Chronicles" },
          scope3: { score: 8, max: 10, notes: "Full scope 3 disclosed" },
          annual_report: { score: 6, max: 7, notes: "Annual benefit corp report" },
          supplier_list: { score: 4, max: 4, notes: "Tier 1 & 2 published" },
          third_party_verification: { score: 2, max: 4, notes: "Some verified data" }
        }
      },
      certifications: {
        total: 16,
        max: 25,
        criteria: {
          tier: "comprehensive",
          certs_held: ["B Corp (verified)", "Fair Trade Certified", "bluesign"],
          bonus: { score: 3, max: 3, notes: "3+ certifications" }
        }
      },
      climate_renewable: {
        total: 18,
        max: 25,
        criteria: {
          onsite_renewable: { score: 3, max: 7, notes: "50-74% on-site" },
          climate_status: { score: 2, max: 8, notes: "Carbon neutral Scope 1+2+3" },
          emissions_reduction: { score: 6, max: 6, notes: "SBTi validated" },
          renewable_procurement: { score: 4, max: 4, notes: "100% renewable PPAs" }
        }
      },
      business_model: {
        total: 16,
        max: 20,
        criteria: {
          anti_consumption: { score: 7, max: 7, notes: "Don't Buy This Jacket campaign" },
          durability: { score: 5, max: 5, notes: "Ironclad guarantee" },
          company_wide: { score: 2, max: 4, notes: "Most lines sustainable" },
          slow_production: { score: 0, max: 2, notes: "Seasonal collections" },
          resale: { score: 2, max: 2, notes: "Worn Wear resale platform" }
        }
      },
      social: {
        total: 12,
        max: 15,
        criteria: {
          living_wage: { score: 5, max: 5, notes: "Fair Trade certified factories" },
          factory_audits: { score: 4, max: 4, notes: "Public audit results" },
          worker_safety: { score: 0, max: 3, notes: "No ISO 45001" },
          supply_chain_transparency: { score: 3, max: 3, notes: "Tier 2+ visibility" }
        }
      },
      impact_claims: {
        total: 8,
        max: 10,
        criteria: {
          quantified_claims: { score: 4, max: 4, notes: "Specific reduction targets" },
          material_transparency: { score: 2, max: 3, notes: "Most materials disclosed" },
          no_greenwashing: { score: 2, max: 3, notes: "Generally clear claims" }
        }
      },
      regenerative: {
        total: 3,
        max: 5,
        criteria: {
          ecosystem_restoration: { score: 3, max: 3, notes: "Regenerative organic pilots" },
          zero_waste_water: { score: 0, max: 2, notes: "No water positive program" }
        }
      }
    },
    key_findings: {
      strengths: [
        "Worn Wear repair & resale program",
        "B Corp certified",
        "1% for Planet member",
        "Full supply chain transparency",
        "SBTi validated targets"
      ],
      weaknesses: [
        "Plastic packaging still used",
        "No ISO 45001 worker safety cert",
        "Seasonal collection model"
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
      circular_economy: {
        total: 26,
        max: 30,
        criteria: {
          takeback: { score: 6, max: 8, notes: "Products biodegradable (consumable)" },
          repair: { score: 7, max: 7, notes: "Plastic-free refill packaging" },
          refill_reuse: { score: 6, max: 6, notes: "Tablet refill system" },
          disassembly: { score: 5, max: 5, notes: "Full ingredient transparency" },
          recycled_content: { score: 0, max: 2, notes: "N/A for tablets" },
          packaging: { score: 2, max: 2, notes: "Compostable mailers" }
        }
      },
      transparency: {
        total: 25,
        max: 35,
        criteria: {
          lca: { score: 6, max: 10, notes: "Partial LCA data" },
          scope3: { score: 8, max: 10, notes: "Shipping emissions disclosed" },
          annual_report: { score: 5, max: 7, notes: "Impact reports published" },
          supplier_list: { score: 2, max: 4, notes: "Some supplier info" },
          third_party_verification: { score: 4, max: 4, notes: "EPA verified" }
        }
      },
      certifications: {
        total: 18,
        max: 25,
        criteria: {
          tier: "comprehensive",
          certs_held: ["B Corp", "EPA Safer Choice", "Leaping Bunny", "Climate Neutral"],
          bonus: { score: 3, max: 3, notes: "4+ certifications" }
        }
      },
      climate_renewable: {
        total: 20,
        max: 25,
        criteria: {
          onsite_renewable: { score: 1, max: 7, notes: "Limited on-site" },
          climate_status: { score: 6, max: 8, notes: "Climate positive claims" },
          emissions_reduction: { score: 6, max: 6, notes: "90% less emissions vs traditional" },
          renewable_procurement: { score: 4, max: 4, notes: "Renewable energy used" }
        }
      },
      business_model: {
        total: 18,
        max: 20,
        criteria: {
          anti_consumption: { score: 7, max: 7, notes: "Concentrated = less product needed" },
          durability: { score: 5, max: 5, notes: "Forever bottles last years" },
          company_wide: { score: 4, max: 4, notes: "All products sustainable" },
          slow_production: { score: 2, max: 2, notes: "Stable product line" },
          resale: { score: 0, max: 2, notes: "N/A for consumables" }
        }
      },
      social: {
        total: 10,
        max: 15,
        criteria: {
          living_wage: { score: 3, max: 5, notes: "US-based operations" },
          factory_audits: { score: 3, max: 4, notes: "Some audit data" },
          worker_safety: { score: 2, max: 3, notes: "Basic compliance" },
          supply_chain_transparency: { score: 2, max: 3, notes: "Limited tier 2" }
        }
      },
      impact_claims: {
        total: 9,
        max: 10,
        criteria: {
          quantified_claims: { score: 4, max: 4, notes: "Specific plastic savings" },
          material_transparency: { score: 3, max: 3, notes: "Full ingredient list" },
          no_greenwashing: { score: 2, max: 3, notes: "Clear, specific claims" }
        }
      },
      regenerative: {
        total: 2,
        max: 5,
        criteria: {
          ecosystem_restoration: { score: 0, max: 3, notes: "No restoration program" },
          zero_waste_water: { score: 2, max: 2, notes: "Zero waste operations" }
        }
      }
    },
    key_findings: {
      strengths: [
        "Eliminates single-use plastic bottles",
        "Concentrated tablet refill system",
        "90% less carbon vs traditional cleaners",
        "Reusable Forever Bottles",
        "Full ingredient transparency"
      ],
      weaknesses: [
        "Limited LCA data published",
        "No ecosystem restoration",
        "Supply chain transparency could improve"
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
      circular_economy: {
        total: 20,
        max: 30,
        criteria: {
          takeback: { score: 4, max: 8, notes: "Some products compostable" },
          repair: { score: 5, max: 7, notes: "Mostly plastic-free packaging" },
          refill_reuse: { score: 5, max: 6, notes: "Concentrates available" },
          disassembly: { score: 3, max: 5, notes: "Good ingredient info" },
          recycled_content: { score: 1, max: 2, notes: "Some recycled content" },
          packaging: { score: 2, max: 2, notes: "Plastic-free shipping" }
        }
      },
      transparency: {
        total: 22,
        max: 35,
        criteria: {
          lca: { score: 5, max: 10, notes: "Limited LCA" },
          scope3: { score: 6, max: 10, notes: "Some scope 3 data" },
          annual_report: { score: 5, max: 7, notes: "Sustainability reports" },
          supplier_list: { score: 3, max: 4, notes: "Partial supplier list" },
          third_party_verification: { score: 3, max: 4, notes: "B Corp verified" }
        }
      },
      certifications: {
        total: 15,
        max: 25,
        criteria: {
          tier: "comprehensive",
          certs_held: ["B Corp", "Climate Neutral", "Leaping Bunny"],
          bonus: { score: 3, max: 3, notes: "3+ certifications" }
        }
      },
      climate_renewable: {
        total: 16,
        max: 25,
        criteria: {
          onsite_renewable: { score: 0, max: 7, notes: "No on-site renewables" },
          climate_status: { score: 2, max: 8, notes: "Carbon neutral operations" },
          emissions_reduction: { score: 6, max: 6, notes: "Reduction programs" },
          renewable_procurement: { score: 4, max: 4, notes: "100% renewable energy" }
        }
      },
      business_model: {
        total: 14,
        max: 20,
        criteria: {
          anti_consumption: { score: 5, max: 7, notes: "Promotes refills" },
          durability: { score: 3, max: 5, notes: "Mixed durability" },
          company_wide: { score: 4, max: 4, notes: "All products curated" },
          slow_production: { score: 2, max: 2, notes: "Stable offerings" },
          resale: { score: 0, max: 2, notes: "No resale program" }
        }
      },
      social: {
        total: 10,
        max: 15,
        criteria: {
          living_wage: { score: 3, max: 5, notes: "US operations" },
          factory_audits: { score: 3, max: 4, notes: "Partner audits" },
          worker_safety: { score: 2, max: 3, notes: "Basic compliance" },
          supply_chain_transparency: { score: 2, max: 3, notes: "Marketplace limits visibility" }
        }
      },
      impact_claims: {
        total: 7,
        max: 10,
        criteria: {
          quantified_claims: { score: 3, max: 4, notes: "Plastic-neutral claims" },
          material_transparency: { score: 2, max: 3, notes: "Good for own brand" },
          no_greenwashing: { score: 2, max: 3, notes: "Generally clear" }
        }
      },
      regenerative: {
        total: 2,
        max: 5,
        criteria: {
          ecosystem_restoration: { score: 0, max: 3, notes: "No restoration" },
          zero_waste_water: { score: 2, max: 2, notes: "Zero waste goal" }
        }
      }
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
        "Marketplace model limits full control",
        "Limited LCA data"
      ],
      certifications: ["B Corporation", "Certified Carbon Neutral", "Leaping Bunny"]
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
      circular_economy: {
        total: 16,
        max: 30,
        criteria: {
          takeback: { score: 2, max: 8, notes: "ReRun resale program" },
          repair: { score: 2, max: 7, notes: "Limited repair options" },
          refill_reuse: { score: 0, max: 6, notes: "N/A for footwear" },
          disassembly: { score: 4, max: 5, notes: "Some design consideration" },
          recycled_content: { score: 2, max: 2, notes: "Recycled materials used" },
          packaging: { score: 2, max: 2, notes: "90% recycled packaging" }
        }
      },
      transparency: {
        total: 24,
        max: 35,
        criteria: {
          lca: { score: 8, max: 10, notes: "Carbon footprint on all products" },
          scope3: { score: 6, max: 10, notes: "Good scope 3 disclosure" },
          annual_report: { score: 5, max: 7, notes: "Sustainability reports" },
          supplier_list: { score: 2, max: 4, notes: "Partial supplier info" },
          third_party_verification: { score: 3, max: 4, notes: "Carbon labels verified" }
        }
      },
      certifications: {
        total: 14,
        max: 25,
        criteria: {
          tier: "comprehensive",
          certs_held: ["B Corp", "Climate Neutral", "FSC"],
          bonus: { score: 0, max: 3, notes: "Only 2 tiers" }
        }
      },
      climate_renewable: {
        total: 15,
        max: 25,
        criteria: {
          onsite_renewable: { score: 0, max: 7, notes: "No on-site" },
          climate_status: { score: 2, max: 8, notes: "Carbon neutral" },
          emissions_reduction: { score: 6, max: 6, notes: "Reduction roadmap" },
          renewable_procurement: { score: 4, max: 4, notes: "Renewable energy" }
        }
      },
      business_model: {
        total: 14,
        max: 20,
        criteria: {
          anti_consumption: { score: 3, max: 7, notes: "Quality over quantity message" },
          durability: { score: 4, max: 5, notes: "Designed to last" },
          company_wide: { score: 4, max: 4, notes: "All products sustainable" },
          slow_production: { score: 1, max: 2, notes: "Regular new releases" },
          resale: { score: 2, max: 2, notes: "ReRun program" }
        }
      },
      social: {
        total: 9,
        max: 15,
        criteria: {
          living_wage: { score: 3, max: 5, notes: "Working on living wage" },
          factory_audits: { score: 3, max: 4, notes: "Factory audits conducted" },
          worker_safety: { score: 1, max: 3, notes: "Basic standards" },
          supply_chain_transparency: { score: 2, max: 3, notes: "Some tier 2 data" }
        }
      },
      impact_claims: {
        total: 8,
        max: 10,
        criteria: {
          quantified_claims: { score: 4, max: 4, notes: "Carbon footprint labels" },
          material_transparency: { score: 2, max: 3, notes: "Material sources shared" },
          no_greenwashing: { score: 2, max: 3, notes: "Specific claims" }
        }
      },
      regenerative: {
        total: 2,
        max: 5,
        criteria: {
          ecosystem_restoration: { score: 2, max: 3, notes: "Regenerative wool pilots" },
          zero_waste_water: { score: 0, max: 2, notes: "No program" }
        }
      }
    },
    key_findings: {
      strengths: [
        "Carbon footprint labeling on all products",
        "Sustainable materials (merino, eucalyptus, sugarcane)",
        "Carbon neutral since 2019",
        "ReRun resale program"
      ],
      weaknesses: [
        "Limited repair program",
        "Premium pricing limits accessibility",
        "No on-site renewable energy"
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
      circular_economy: {
        total: 14,
        max: 30,
        criteria: {
          takeback: { score: 4, max: 8, notes: "Products biodegradable" },
          repair: { score: 3, max: 7, notes: "Some recyclable packaging" },
          refill_reuse: { score: 2, max: 6, notes: "Limited refill options" },
          disassembly: { score: 3, max: 5, notes: "Ingredient transparency" },
          recycled_content: { score: 1, max: 2, notes: "Some recycled plastic" },
          packaging: { score: 1, max: 2, notes: "Still uses plastic" }
        }
      },
      transparency: {
        total: 20,
        max: 35,
        criteria: {
          lca: { score: 4, max: 10, notes: "Limited LCA" },
          scope3: { score: 5, max: 10, notes: "Parent company data" },
          annual_report: { score: 5, max: 7, notes: "Sustainability reports" },
          supplier_list: { score: 3, max: 4, notes: "Some supplier info" },
          third_party_verification: { score: 3, max: 4, notes: "B Corp verified" }
        }
      },
      certifications: {
        total: 12,
        max: 25,
        criteria: {
          tier: "strong",
          certs_held: ["B Corp", "USDA Biobased", "EPA Safer Choice"],
          bonus: { score: 0, max: 3, notes: "Same tier certs" }
        }
      },
      climate_renewable: {
        total: 12,
        max: 25,
        criteria: {
          onsite_renewable: { score: 0, max: 7, notes: "No on-site" },
          climate_status: { score: 1, max: 8, notes: "Partial carbon neutral" },
          emissions_reduction: { score: 3, max: 6, notes: "Reduction efforts" },
          renewable_procurement: { score: 4, max: 4, notes: "Renewable energy" }
        }
      },
      business_model: {
        total: 12,
        max: 20,
        criteria: {
          anti_consumption: { score: 4, max: 7, notes: "Concentrated options" },
          durability: { score: 3, max: 5, notes: "Standard formulas" },
          company_wide: { score: 3, max: 4, notes: "Most lines sustainable" },
          slow_production: { score: 2, max: 2, notes: "Stable product line" },
          resale: { score: 0, max: 2, notes: "N/A" }
        }
      },
      social: {
        total: 9,
        max: 15,
        criteria: {
          living_wage: { score: 3, max: 5, notes: "Unilever standards" },
          factory_audits: { score: 3, max: 4, notes: "Parent company audits" },
          worker_safety: { score: 2, max: 3, notes: "Basic compliance" },
          supply_chain_transparency: { score: 1, max: 3, notes: "Limited visibility" }
        }
      },
      impact_claims: {
        total: 7,
        max: 10,
        criteria: {
          quantified_claims: { score: 3, max: 4, notes: "Some specific claims" },
          material_transparency: { score: 2, max: 3, notes: "Full ingredient lists" },
          no_greenwashing: { score: 2, max: 3, notes: "Generally clear" }
        }
      },
      regenerative: {
        total: 1,
        max: 5,
        criteria: {
          ecosystem_restoration: { score: 0, max: 3, notes: "No restoration" },
          zero_waste_water: { score: 1, max: 2, notes: "Some water efforts" }
        }
      }
    },
    key_findings: {
      strengths: [
        "Plant-based ingredients",
        "Full ingredient transparency",
        "Long sustainability track record",
        "EPA Safer Choice certified"
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

// Detailed criteria structure matching V7 scorecard
export const scorecardCriteria = {
  circular_economy: {
    name: "Circular Economy & End-of-Life",
    max: 30,
    priority: 1,
    criteria: [
      { id: "takeback", name: "Take-back program with public reporting", max: 8, consumable_alt: "Product certified compostable/biodegradable" },
      { id: "repair", name: "Repair services, spare parts, or lifetime warranty", max: 7, consumable_alt: "Plastic-free + compostable/recyclable packaging" },
      { id: "refill_reuse", name: "Modular/upgradeable design OR refill/reuse system", max: 6, consumable_alt: "Concentrated refill format or bulk refill" },
      { id: "disassembly", name: "Design for disassembly with material recovery", max: 5, consumable_alt: "Full material/ingredient transparency" },
      { id: "recycled_content", name: "Verified recycled content (50%+ with GRS)", max: 2, consumable_alt: null },
      { id: "packaging", name: "Zero packaging waste (plastic-free, compostable)", max: 2, consumable_alt: null }
    ]
  },
  transparency: {
    name: "Transparency & Data",
    max: 35,
    priority: 2,
    criteria: [
      { id: "lca", name: "Published Life Cycle Assessment (ISO 14040/14044)", max: 10 },
      { id: "scope3", name: "Scope 3 emissions measured & publicly disclosed", max: 10 },
      { id: "annual_report", name: "Annual sustainability report with YoY tracking", max: 7 },
      { id: "supplier_list", name: "Public supplier list (tier 1 & 2)", max: 4 },
      { id: "third_party_verification", name: "Third-party data verification", max: 4 }
    ]
  },
  certifications: {
    name: "Third-Party Certifications",
    max: 25,
    priority: 3,
    tiers: [
      { id: "elite", name: "ELITE", examples: "EcoVadis Platinum, B Corp 100+, C2C Platinum", points: 7 },
      { id: "premium", name: "PREMIUM", examples: "EcoVadis Gold, C2C Gold, LEED Platinum", points: 6 },
      { id: "comprehensive", name: "COMPREHENSIVE", examples: "B Corp 80-99, Climate Neutral, C2C Silver", points: 5 },
      { id: "strong", name: "STRONG", examples: "GOTS, ISO 14001, Fair Trade, R2", points: 4 },
      { id: "industry", name: "INDUSTRY", examples: "ENERGY STAR, 1% Planet, TCO, GRS", points: 3 }
    ],
    bonus: { name: "BONUS: 3+ certifications from different tiers", max: 3 }
  },
  climate_renewable: {
    name: "Climate & Renewable Energy",
    max: 25,
    priority: 4,
    sections: [
      {
        name: "On-Site Renewable Energy",
        max: 7,
        options: [
          { name: "100%+ generated on-site", points: 7 },
          { name: "75-99% generated on-site", points: 5 },
          { name: "50-74% generated on-site", points: 3 },
          { name: "25-49% generated on-site", points: 1 }
        ]
      },
      {
        name: "Climate Positive Status",
        max: 8,
        options: [
          { name: "Net carbon negative (removal > ALL emissions)", points: 8 },
          { name: "Climate positive (50-99% more removed)", points: 6 },
          { name: "Carbon neutral Scope 1+2+3 (Gold Standard/Verra)", points: 2 },
          { name: "Carbon neutral Scope 1+2 only", points: 1 }
        ]
      },
      {
        name: "Active Emissions Reduction",
        max: 6,
        options: [
          { name: "SBTi validated 1.5°C pathway", points: 6 },
          { name: "Documented reduction program with YoY data", points: 3 },
          { name: "Measurable fossil fuel reduction", points: 1 }
        ]
      },
      {
        name: "Renewable Energy Procurement",
        max: 4,
        options: [
          { name: "100% renewable via PPAs", points: 4 },
          { name: "75-99% renewable (PPAs or RECs)", points: 2 },
          { name: "50-74% renewable OR 100% via RECs", points: 1 }
        ]
      }
    ]
  },
  business_model: {
    name: "Business Model Integrity",
    max: 20,
    priority: 5,
    criteria: [
      { id: "anti_consumption", name: "Anti-consumption model", max: 7, consumable_alt: "Concentrated formula, promotes using less" },
      { id: "durability", name: "Durable design (7+ years)", max: 5, consumable_alt: "Lowest-impact format, longest-lasting" },
      { id: "company_wide", name: "Company-wide practices", max: 4 },
      { id: "slow_production", name: "Slow production cycles", max: 2, consumable_alt: "Stable range, no trend-driven launches" },
      { id: "resale", name: "Resale/second-hand program", max: 2, consumable_alt: "Packaging take-back or refill partnership" }
    ]
  },
  social: {
    name: "Social Responsibility",
    max: 15,
    priority: 6,
    criteria: [
      { id: "living_wage", name: "Living wage certification", max: 5 },
      { id: "factory_audits", name: "Independent factory audits with public results", max: 4 },
      { id: "worker_safety", name: "Worker safety certifications (ISO 45001)", max: 3 },
      { id: "supply_chain_transparency", name: "Supply chain transparency (tier 2+)", max: 3 }
    ]
  },
  impact_claims: {
    name: "Measurable Impact Claims",
    max: 10,
    priority: 7,
    criteria: [
      { id: "quantified_claims", name: "Specific quantified claims", max: 4 },
      { id: "material_transparency", name: "Material composition transparency", max: 3 },
      { id: "no_greenwashing", name: "No vague greenwashing terms", max: 3 }
    ]
  },
  regenerative: {
    name: "Regenerative Impact (Bonus)",
    max: 5,
    priority: 8,
    criteria: [
      { id: "ecosystem_restoration", name: "Ecosystem restoration verified", max: 3 },
      { id: "zero_waste_water", name: "Zero waste or water positive programs", max: 2 }
    ]
  }
};

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

// Tier descriptions (based on V7 scorecard - 165 total points)
// Colors are more distinct: green -> teal -> gold -> orange -> red
export const tierDescriptions = {
  1: {
    label: "Verified Leader",
    range: "145-165",
    description: "Comprehensive circular systems, full transparency, elite certifications, climate positive",
    color: "#0d7a3e"  // Vibrant green
  },
  2: {
    label: "Certified Sustainable",
    range: "115-144",
    description: "Strong circular practices, good transparency, multiple certifications, carbon neutral minimum",
    color: "#0891b2"  // Teal/Cyan
  },
  3: {
    label: "Making Progress",
    range: "85-114",
    description: "Some circularity, transparency efforts, certifications present, solid sustainability foundation",
    color: "#ca8a04"  // Gold/Yellow
  },
  4: {
    label: "Early Stage",
    range: "55-84",
    description: "Beginning sustainability journey, limited transparency or certifications",
    color: "#ea580c"  // Orange
  },
  5: {
    label: "Needs Improvement",
    range: "0-54",
    description: "Minimal sustainability practices, significant room for improvement",
    color: "#dc2626"  // Red
  }
};

// Category score labels for display (matching V7 scorecard)
export const categoryScoreLabels = {
  circular_economy: "A: Circular Economy",
  transparency: "B: Transparency & Data",
  certifications: "C: Certifications",
  climate_renewable: "D: Climate & Renewables",
  business_model: "E: Business Model",
  social: "F: Social Responsibility",
  impact_claims: "G: Impact Claims",
  regenerative: "H: Regenerative (Bonus)"
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
