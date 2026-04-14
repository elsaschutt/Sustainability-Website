// Brand Sustainability Ratings Data
// Based on Sustainability Scorecard V10 - 160 points total
// Add more brands by following the same structure

export const brands = [
  {
    id: "patagonia",
    name: "Patagonia",
    category: "clothing",
    product_type: "durable",
    total_score: 125,
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
    total_score: 113,
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
    total_score: 87,
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
,
  // ====================================================================
  // V10 SCORED BRANDS (Enterprise V10 Scorecard - 160 pts max)
  // Added from master_scorecards.xlsx
  // ====================================================================
  {
    id: "dr-bronners",
    name: "Dr. Bronner's",
    category: "home",
    product_type: "consumable",
    total_score: 129,
    tier: 2,
    certifications: ["b_corp", "fair_trade", "one_percent"],
    category_scores: {
      circular_economy: { total: 32, max: 30, criteria: { takeback: { score: 4, max: 8, notes: "100% PCR bottles, community take-back" }, repair: { score: 7, max: 7, notes: "Bar soap = plastic-free, liquid bottles 100% PCR recyclable" }, refill_reuse: { score: 6, max: 6, notes: "Concentrated castile soap = classic refill model" }, disassembly: { score: 5, max: 5, notes: "Full ingredient transparency via ROC, USDA Organic" }, recycled_content: { score: 2, max: 2, notes: "100% PCR plastic in all liquid bottles" }, packaging: { score: 2, max: 2, notes: "Bar soap paper-wrapped, liquid bottles 100% PCR" } } },
      transparency: { total: 25, max: 35, criteria: { lca: { score: 5, max: 10, notes: "Third-party emissions breakdown, no formal ISO 14040" }, scope3: { score: 5, max: 10, notes: "S1+2 disclosed, S3 not publicly disclosed" }, annual_report: { score: 7, max: 7, notes: "All-One! Report published annually since 2015" }, supplier_list: { score: 4, max: 4, notes: "Tier 4 supply chain partners published across 6+ countries" }, third_party_verification: { score: 4, max: 4, notes: "ROC, Fair for Life, USDA Organic, Leaping Bunny, Living Wage" } } },
      certifications: { total: 18, max: 18, criteria: { quality: { score: 8, max: 8, notes: "B Corp 206.9 (Diff 5 — highest ever globally)" }, volume: { score: 7, max: 7, notes: "7 verified certifications (5+ threshold)" }, diversity: { score: 3, max: 3, notes: "4 categories: Environmental, Social/Labor, Chemical/Safety, Material/Circular" } } },
      climate_renewable: { total: 7, max: 27, criteria: { onsite_renewable: { score: 0, max: 7, notes: "Corporate offices 100% renewable, production not disclosed" }, climate_status: { score: 2, max: 10, notes: "100% renewable electricity since 2018, EPA Green Power Partner" }, emissions_reduction: { score: 4, max: 6, notes: "Documented YoY reduction via All-One! Report" }, renewable_procurement: { score: 1, max: 4, notes: "100% renewable electricity via mix" } } },
      business_model: { total: 20, max: 20, criteria: { anti_consumption: { score: 7, max: 7, notes: "18-in-1 concentrated castile soap, anti-consumption DNA" }, durability: { score: 5, max: 5, notes: "Concentrated castile = lowest-impact longest-lasting format" }, company_wide: { score: 4, max: 4, notes: "100% of product line is organic/fair trade/sustainable" }, slow_production: { score: 2, max: 2, notes: "Classic stable range since 1948" }, resale: { score: 2, max: 2, notes: "Circular supply chain via Serendipol/Serendipalm" } } },
      social: { total: 12, max: 15, criteria: { living_wage: { score: 5, max: 5, notes: "Certified Living Wage Employer, $29.11/hr starting, 5-to-1 salary cap" }, factory_audits: { score: 4, max: 4, notes: "Fair for Life + ROC third-party audits" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 3, max: 3, notes: "Tier 4 supplier transparency — industry leading" } } },
      impact_claims: { total: 10, max: 10, criteria: { quantified_claims: { score: 4, max: 4, notes: "116,681 organic acres, 35,986 ROC acres, 525K kg CO2e" }, material_transparency: { score: 3, max: 3, notes: "Full material composition across product line" }, no_greenwashing: { score: 3, max: 3, notes: "All claims tied to third-party certs" } } },
      regenerative: { total: 5, max: 5, criteria: { ecosystem_restoration: { score: 3, max: 3, notes: "Fair Trade premiums to 18,000 farmers, ROC soil health" }, zero_waste_water: { score: 2, max: 2, notes: "Climate-positive via regenerative organic farming" } } }
    },
    key_findings: {
      strengths: ["B Corp 206.9 — highest score ever globally", "5-to-1 salary cap with $29.11/hr starting wage", "7 verified certifications spanning 4 categories", "Tier 4 supply chain transparency across 6+ countries", "100% renewable electricity since 2018"],
      weaknesses: ["Scope 3 emissions not publicly disclosed", "No formal ISO 14040 LCA", "No SBTi validated pathway"],
      certifications: ["B Corp 206.9", "Regenerative Organic Certified", "Fair for Life", "USDA Organic", "Leaping Bunny", "Living Wage Certified", "EPA Green Power Partner"]
    },
    description: "Family-owned castile soap company with the highest B Corp score ever. Known for fair trade supply chains, 5-to-1 salary cap, and regenerative organic practices."
  },
  {
    id: "who-gives-a-crap",
    name: "Who Gives A Crap",
    category: "home",
    product_type: "consumable",
    total_score: 106,
    tier: 3,
    certifications: ["b_corp", "fsc", "carbon_neutral"],
    category_scores: {
      circular_economy: { total: 30, max: 30, criteria: { takeback: { score: 8, max: 8, notes: "100% recycled/FSC bamboo/bagasse — all compostable/biodegradable" }, repair: { score: 7, max: 7, notes: "Plastic-free paper wrappers, zero plastic per order" }, refill_reuse: { score: 6, max: 6, notes: "Subscription bulk-refill model (24-48 rolls)" }, disassembly: { score: 5, max: 5, notes: "Full material transparency, multi-certification" }, recycled_content: { score: 2, max: 2, notes: "100% recycled or 100% FSC-certified bamboo" }, packaging: { score: 2, max: 2, notes: "Fully plastic-free packaging" } } },
      transparency: { total: 21, max: 35, criteria: { lca: { score: 5, max: 10, notes: "Third-party LCA: 70,605 tCO2e in 2022" }, scope3: { score: 5, max: 10, notes: "Shipping carbon neutral, full S3 not itemized" }, annual_report: { score: 7, max: 7, notes: "B Corp Impact Report 2024 with quantified metrics" }, supplier_list: { score: 0, max: 4, notes: "No public supplier list" }, third_party_verification: { score: 4, max: 4, notes: "B Corp 108.9, FSC Chain-of-Custody, third-party LCA" } } },
      certifications: { total: 14, max: 18, criteria: { quality: { score: 8, max: 8, notes: "B Corp 108.9 (Diff 5)" }, volume: { score: 4, max: 7, notes: "3 verified certifications" }, diversity: { score: 2, max: 3, notes: "2 categories: Environmental, Material/Circular" } } },
      climate_renewable: { total: 6, max: 27, criteria: { onsite_renewable: { score: 0, max: 7, notes: "No on-site renewable" }, climate_status: { score: 2, max: 10, notes: "Carbon-neutral shipping via verified offsets since 2020" }, emissions_reduction: { score: 3, max: 6, notes: "Documented YoY reduction via B Corp report" }, renewable_procurement: { score: 1, max: 4, notes: "Some renewable via offset programs" } } },
      business_model: { total: 20, max: 20, criteria: { anti_consumption: { score: 7, max: 7, notes: "50% profits to water/sanitation ($20M+ AUD)" }, durability: { score: 5, max: 5, notes: "Recycled paper and bamboo with documented supply chain" }, company_wide: { score: 4, max: 4, notes: "100% of products are sustainable" }, slow_production: { score: 2, max: 2, notes: "Stable range since 2013" }, resale: { score: 2, max: 2, notes: "Subscription refill model" } } },
      social: { total: 4, max: 15, criteria: { living_wage: { score: 0, max: 5, notes: "No living wage cert for manufacturing partners" }, factory_audits: { score: 4, max: 4, notes: "Third-party factory audits confirmed for China partners" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 0, max: 3, notes: "FSC Chain-of-Custody but no tier 2+ visibility" } } },
      impact_claims: { total: 8, max: 10, criteria: { quantified_claims: { score: 4, max: 4, notes: "70,605 tCO2e, £9.8M donated, 845K people impacted" }, material_transparency: { score: 3, max: 3, notes: "100% recycled OR 100% FSC bamboo disclosed" }, no_greenwashing: { score: 1, max: 3, notes: "Some past packaging greenwashing allegations" } } },
      regenerative: { total: 3, max: 5, criteria: { ecosystem_restoration: { score: 3, max: 3, notes: "$20M+ AUD to WASH programs, 845K people with water access" }, zero_waste_water: { score: 0, max: 2, notes: "No operational water positive program" } } }
    },
    key_findings: {
      strengths: ["50% of profits donated to water/sanitation ($20M+ AUD)", "B Corp 108.9 with FSC Chain-of-Custody", "Perfect circular economy score — plastic-free, recycled, subscription refill"],
      weaknesses: ["No Scope 3 formally disclosed", "No on-site renewable energy", "No public supplier list or living wage cert"],
      certifications: ["B Corp 108.9", "FSC Chain-of-Custody", "Carbon Neutral shipping"]
    },
    description: "Toilet paper company donating 50% of profits to build toilets and improve sanitation worldwide. 100% recycled or bamboo products with plastic-free packaging."
  },
  {
    id: "ecos",
    name: "ECOS",
    category: "home",
    product_type: "consumable",
    total_score: 108,
    tier: 3,
    certifications: ["carbon_neutral", "epa_safer_choice"],
    category_scores: {
      circular_economy: { total: 28, max: 30, criteria: { takeback: { score: 4, max: 8, notes: "TRUE Platinum Zero Waste at manufacturing" }, repair: { score: 6, max: 7, notes: "EPA Safer Choice, plant-based, biodegradable" }, refill_reuse: { score: 4, max: 6, notes: "Concentrated formulas, some refill pouches" }, disassembly: { score: 5, max: 5, notes: "Full ingredient transparency via EPA Safer Choice" }, recycled_content: { score: 2, max: 2, notes: "PCR plastic packaging" }, packaging: { score: 1, max: 2, notes: "Plastic-free laundry packs; most still plastic" } } },
      transparency: { total: 16, max: 35, criteria: { lca: { score: 3, max: 10, notes: "No formal ISO 14040 LCA" }, scope3: { score: 5, max: 10, notes: "S1+2 fully reported, S3 NOT disclosed" }, annual_report: { score: 4, max: 7, notes: "Impact data on website, not formal report" }, supplier_list: { score: 0, max: 4, notes: "No public supplier list" }, third_party_verification: { score: 4, max: 4, notes: "TRUE Platinum, EPA Safer Choice, carbon neutral" } } },
      certifications: { total: 13, max: 18, criteria: { quality: { score: 6, max: 8, notes: "Carbon Neutral (Diff 4)" }, volume: { score: 5, max: 7, notes: "4 verified certifications" }, diversity: { score: 2, max: 3, notes: "2 categories: Environmental, Chemical/Safety" } } },
      climate_renewable: { total: 21, max: 27, criteria: { onsite_renewable: { score: 7, max: 7, notes: "100% renewable energy at all facilities" }, climate_status: { score: 8, max: 10, notes: "Climate positive — offsets 110% of impacts" }, emissions_reduction: { score: 4, max: 6, notes: "28M+ lbs CO2 offset annually" }, renewable_procurement: { score: 2, max: 4, notes: "100% at facilities" } } },
      business_model: { total: 16, max: 20, criteria: { anti_consumption: { score: 4, max: 7, notes: "Plant-powered mission, concentrated formulas" }, durability: { score: 5, max: 5, notes: "8x concentrated laundry" }, company_wide: { score: 4, max: 4, notes: "100% of products are sustainable" }, slow_production: { score: 2, max: 2, notes: "Stable range" }, resale: { score: 1, max: 2, notes: "Some refill formats" } } },
      social: { total: 2, max: 15, criteria: { living_wage: { score: 0, max: 5, notes: "No living wage cert" }, factory_audits: { score: 2, max: 4, notes: "Internal quality controls" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 0, max: 3, notes: "No tier 2+ transparency" } } },
      impact_claims: { total: 7, max: 10, criteria: { quantified_claims: { score: 4, max: 4, notes: "28M+ lbs CO2, 14M+ gallons water restored, 99% waste diverted" }, material_transparency: { score: 3, max: 3, notes: "EPA Safer Choice + plant-based disclosure" }, no_greenwashing: { score: 0, max: 3, notes: "2015 $925K + 2022 ongoing class action for non-toxic claims" } } },
      regenerative: { total: 5, max: 5, criteria: { ecosystem_restoration: { score: 3, max: 3, notes: "Water neutral: 14M+ gallons restored to endangered habitats" }, zero_waste_water: { score: 2, max: 2, notes: "TRUE Platinum Zero Waste + water neutral" } } }
    },
    key_findings: {
      strengths: ["Climate positive (offsets 110%)", "Carbon neutral since 2013, water neutral since 2016", "TRUE Platinum Zero Waste (99%+ diverted)", "EPA Safer Choice Partner of Year 8x (120+ products)"],
      weaknesses: ["2015 + 2022 class actions for non-toxic claims", "Scope 3 NOT disclosed", "No B Corp or living wage cert"],
      certifications: ["Carbon Neutral", "TRUE Platinum Zero Waste", "EPA Safer Choice (8x Partner of Year)", "Water Neutral"]
    },
    description: "Family-owned since 1967. First company to achieve carbon neutral + water neutral + TRUE Platinum Zero Waste. Woman-owned and Black-owned with 60% female leadership."
  },
  {
    id: "grove-collaborative",
    name: "Grove Collaborative",
    category: "home",
    product_type: "consumable",
    total_score: 116,
    tier: 2,
    certifications: ["b_corp", "climate_neutral", "sbti"],
    category_scores: {
      circular_economy: { total: 26, max: 30, criteria: { takeback: { score: 6, max: 8, notes: "Plastic Neutral — 17.2M+ lbs recovered" }, repair: { score: 4, max: 7, notes: "Biodegradable products curated" }, refill_reuse: { score: 4, max: 6, notes: "Promotes refill and concentrate formats" }, disassembly: { score: 5, max: 5, notes: "Feel Good Standard vets every product" }, recycled_content: { score: 1, max: 2, notes: "Partial across marketplace" }, packaging: { score: 1, max: 2, notes: "Working toward plastic-free" } } },
      transparency: { total: 28, max: 35, criteria: { lca: { score: 5, max: 10, notes: "Partial LCA in sustainability reports" }, scope3: { score: 10, max: 10, notes: "Full Scope 1+2+3 since 2020" }, annual_report: { score: 7, max: 7, notes: "6 annual sustainability reports" }, supplier_list: { score: 2, max: 4, notes: "CA Supply Chain Act disclosures" }, third_party_verification: { score: 4, max: 4, notes: "B Corp, Climate Neutral, SBTi, plastic verification" } } },
      certifications: { total: 17, max: 18, criteria: { quality: { score: 8, max: 8, notes: "B Corp 100.9 (Diff 5)" }, volume: { score: 7, max: 7, notes: "8 verified certifications (5+ threshold)" }, diversity: { score: 2, max: 3, notes: "3 categories: Environmental, Chemical/Safety, Material/Circular" } } },
      climate_renewable: { total: 13, max: 27, criteria: { onsite_renewable: { score: 0, max: 7, notes: "No on-site (DTC model)" }, climate_status: { score: 6, max: 10, notes: "Climate Neutral Scope 1+2+3" }, emissions_reduction: { score: 6, max: 6, notes: "SBTi Science-Based Targets approved 2025" }, renewable_procurement: { score: 1, max: 4, notes: "Partial via RECs" } } },
      business_model: { total: 17, max: 20, criteria: { anti_consumption: { score: 5, max: 7, notes: "Beyond Plastic mission, 100% plastic-free goal" }, durability: { score: 4, max: 5, notes: "Curates refill/concentrate products" }, company_wide: { score: 4, max: 4, notes: "Entire platform sustainability-screened" }, slow_production: { score: 2, max: 2, notes: "Stable marketplace" }, resale: { score: 2, max: 2, notes: "Plastic Neutral + refill model" } } },
      social: { total: 4, max: 15, criteria: { living_wage: { score: 0, max: 5, notes: "No living wage cert" }, factory_audits: { score: 3, max: 4, notes: "Third-party semi-announced audits" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 1, max: 3, notes: "CA Supply Chain Act" } } },
      impact_claims: { total: 7, max: 10, criteria: { quantified_claims: { score: 4, max: 4, notes: "17.2M+ lbs plastic recovered, SBTi validated, B Corp 100.9" }, material_transparency: { score: 2, max: 3, notes: "Feel Good Standard" }, no_greenwashing: { score: 1, max: 3, notes: "Some ingredient transparency concerns" } } },
      regenerative: { total: 4, max: 5, criteria: { ecosystem_restoration: { score: 3, max: 3, notes: "Plastic Neutral: 17.2M+ lbs recovered" }, zero_waste_water: { score: 1, max: 2, notes: "Working toward plastic-free" } } }
    },
    key_findings: {
      strengths: ["B Corp 100.9 + SBTi validated + Climate Neutral + Plastic Neutral", "Full Scope 1+2+3 since 2020 — 6 annual reports", "First plastic neutral retailer (17.2M+ lbs recovered)"],
      weaknesses: ["No on-site renewable energy", "No living wage certification", "Some ingredient transparency concerns"],
      certifications: ["B Corp 100.9", "Climate Neutral", "Plastic Neutral", "SBTi Validated", "EPA Safer Choice", "EWG Verified", "Leaping Bunny", "FSC"]
    },
    description: "Public benefit corporation (NYSE: GROV) and first plastic neutral retailer. Curates sustainable home products with 8 verified certifications."
  },
  {
    id: "method",
    name: "Method",
    category: "home",
    product_type: "consumable",
    total_score: 87,
    tier: 3,
    certifications: ["epa_safer_choice"],
    category_scores: {
      circular_economy: { total: 26, max: 30, criteria: { takeback: { score: 6, max: 8, notes: "Some biodegradable via EPA Safer Choice" }, repair: { score: 6, max: 7, notes: "100% PCR/ocean-recovered plastic bottles" }, refill_reuse: { score: 6, max: 6, notes: "Refill pouches save ~80% water/energy/plastic" }, disassembly: { score: 5, max: 5, notes: "EPA Safer Choice ingredient transparency" }, recycled_content: { score: 2, max: 2, notes: "100% PCR laundry, 25-50% PCR HDPE" }, packaging: { score: 1, max: 2, notes: "Reduced plastic, not zero" } } },
      transparency: { total: 13, max: 35, criteria: { lca: { score: 0, max: 10, notes: "No formal LCA" }, scope3: { score: 3, max: 10, notes: "SC Johnson S1+2 only, Method S3 not disclosed" }, annual_report: { score: 5, max: 7, notes: "SC Johnson Better World Report (partial)" }, supplier_list: { score: 0, max: 4, notes: "No public supplier list" }, third_party_verification: { score: 4, max: 4, notes: "EPA Safer Choice, LEED Platinum" } } },
      certifications: { total: 13, max: 18, criteria: { quality: { score: 8, max: 8, notes: "LEED Platinum factory (Diff 5)" }, volume: { score: 3, max: 7, notes: "2 certifications" }, diversity: { score: 2, max: 3, notes: "2 categories: Environmental, Chemical/Safety" } } },
      climate_renewable: { total: 16, max: 27, criteria: { onsite_renewable: { score: 7, max: 7, notes: "LEED Platinum Chicago: 100% on-site wind + solar" }, climate_status: { score: 3, max: 10, notes: "SC Johnson 71% GHG reduction (70-79% progress)" }, emissions_reduction: { score: 3, max: 6, notes: "SC Johnson documented YoY" }, renewable_procurement: { score: 1, max: 4, notes: "SC Johnson 45% renewable globally" } } },
      business_model: { total: 8, max: 20, criteria: { anti_consumption: { score: 0, max: 7, notes: "Growth brand" }, durability: { score: 4, max: 5, notes: "Concentrated formulas" }, company_wide: { score: 0, max: 4, notes: "One brand in SC Johnson's portfolio" }, slow_production: { score: 2, max: 2, notes: "Stable range" }, resale: { score: 2, max: 2, notes: "Refill + Plastic Bank" } } },
      social: { total: 2, max: 15, criteria: { living_wage: { score: 0, max: 5, notes: "No living wage cert" }, factory_audits: { score: 2, max: 4, notes: "SC Johnson supplier code" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 0, max: 3, notes: "No tier 2+ visibility" } } },
      impact_claims: { total: 5, max: 10, criteria: { quantified_claims: { score: 2, max: 4, notes: "SC Johnson claims, Method-specific limited" }, material_transparency: { score: 3, max: 3, notes: "EPA Safer Choice disclosure" }, no_greenwashing: { score: 0, max: 3, notes: "$2.25M settlement for false non-toxic labeling" } } },
      regenerative: { total: 4, max: 5, criteria: { ecosystem_restoration: { score: 2, max: 3, notes: "Plastic Bank (550+ collection locations)" }, zero_waste_water: { score: 2, max: 2, notes: "SC Johnson 93% zero waste to landfill" } } }
    },
    key_findings: {
      strengths: ["LEED Platinum factory with 100% on-site renewable", "100% PCR plastic + ocean-recovered plastic via Plastic Bank", "Refill pouches save ~80% resources"],
      weaknesses: ["DROPPED B Corp (Feb 2024)", "$2.25M class action for false non-toxic labeling", "Not company-wide — one brand in SC Johnson portfolio"],
      certifications: ["LEED Platinum (factory)", "EPA Safer Choice"]
    },
    description: "Design-forward cleaning brand owned by SC Johnson. LEED Platinum factory with on-site wind and solar. Dropped B Corp certification in 2024."
  },
  {
    id: "urban-outfitters",
    name: "Urban Outfitters",
    category: "clothing",
    product_type: "durable",
    total_score: 29,
    tier: 5,
    certifications: [],
    category_scores: {
      circular_economy: { total: 11, max: 30, criteria: { takeback: { score: 3, max: 8, notes: "Nuuly Thrift + Vintage & ReMADE (6M+ garments)" }, repair: { score: 3, max: 7, notes: "Nuuly repairs 250K+ garments/yr" }, refill_reuse: { score: 4, max: 6, notes: "Nuuly clothing rental" }, disassembly: { score: 0, max: 5, notes: "Fast fashion model" }, recycled_content: { score: 0, max: 2, notes: "Only ~10% responsibly sourced" }, packaging: { score: 1, max: 2, notes: "Polybag recycling via Trex (570K+)" } } },
      transparency: { total: 4, max: 35, criteria: { lca: { score: 0, max: 10, notes: "No LCA" }, scope3: { score: 0, max: 10, notes: "Not disclosed" }, annual_report: { score: 3, max: 7, notes: "2023-24 Impact Report but lacks YoY data" }, supplier_list: { score: 0, max: 4, notes: "104 suppliers referenced but not published" }, third_party_verification: { score: 1, max: 4, notes: "Internal audits only" } } },
      certifications: { total: 0, max: 18, criteria: { quality: { score: 0, max: 8, notes: "Zero certifications" }, volume: { score: 0, max: 7, notes: "Zero" }, diversity: { score: 0, max: 3, notes: "Zero" } } },
      climate_renewable: { total: 5, max: 27, criteria: { onsite_renewable: { score: 3, max: 7, notes: "DC solar array: 13,450 panels, 4.1 MW" }, climate_status: { score: 0, max: 10, notes: "No carbon neutrality" }, emissions_reduction: { score: 1, max: 6, notes: "Solar + polybag recycling, no formal program" }, renewable_procurement: { score: 1, max: 4, notes: "Partial via on-site solar" } } },
      business_model: { total: 4, max: 20, criteria: { anti_consumption: { score: 0, max: 7, notes: "Fast fashion model" }, durability: { score: 0, max: 5, notes: "Not built to last" }, company_wide: { score: 2, max: 4, notes: "Nuuly is circular but primary business is fast fashion" }, slow_production: { score: 0, max: 2, notes: "Frequent trend-driven collections" }, resale: { score: 2, max: 2, notes: "Nuuly Thrift + Vintage & ReMADE" } } },
      social: { total: 1, max: 15, criteria: { living_wage: { score: 0, max: 5, notes: "No living wage evidence" }, factory_audits: { score: 1, max: 4, notes: "Internal audits only" }, worker_safety: { score: 0, max: 3, notes: "No ISO 45001" }, supply_chain_transparency: { score: 0, max: 3, notes: "Supplier list not disclosed" } } },
      impact_claims: { total: 2, max: 10, criteria: { quantified_claims: { score: 2, max: 4, notes: "6M garments recirculated, 4.1MW solar" }, material_transparency: { score: 0, max: 3, notes: "No aggregate breakdown" }, no_greenwashing: { score: 0, max: 3, notes: "$5M wage theft settlement, LA sweatshop labor" } } },
      regenerative: { total: 2, max: 5, criteria: { ecosystem_restoration: { score: 2, max: 3, notes: "Nuuly Thrift 1% to Stripe Climate" }, zero_waste_water: { score: 0, max: 2, notes: "No program" } } }
    },
    key_findings: {
      strengths: ["Nuuly rental/resale ecosystem (6M+ garments recirculated)", "Distribution center solar: 13,450 panels, 4.1 MW", "Polybag recycling via Trex (570K+ diverted)"],
      weaknesses: ["Zero certifications of any kind", "$5M wage theft settlement + LA sweatshop labor", "No Scope 3, no supplier list, no living wage"],
      certifications: []
    },
    description: "Multi-brand retailer (NASDAQ: URBN) including Urban Outfitters, Free People, Anthropologie, and Nuuly. Good On You rates 'Not Good Enough' on both Planet and People."
  },

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
    max: 18,
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
    max: 27,
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
  sbti: "SBTi Validated",
  leed_platinum: "LEED Platinum",
  leaping_bunny: "Leaping Bunny",
  true_zero_waste: "TRUE Zero Waste",
  ewg_verified: "EWG Verified",
  plastic_neutral: "Plastic Neutral",
  roc: "Regenerative Organic",
  living_wage: "Living Wage Certified",
  water_neutral: "Water Neutral"
};

// Category labels for display
export const categoryLabels = {
  clothing: "Clothing & Fashion",
  home: "Home & Cleaning",
  bathroom: "Bathroom & Personal Care",
  kitchen: "Kitchen",
  bedroom: "Bedroom & Textiles",
  pet_care: "Pet Care",
  accessories: "Accessories & Misc"
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
  if (score >= 140) return 1;
  if (score >= 112) return 2;
  if (score >= 83) return 3;
  if (score >= 54) return 4;
  return 5;
}
