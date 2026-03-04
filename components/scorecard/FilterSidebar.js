'use client'

import { certificationLabels, categoryLabels, tierDescriptions } from '@/data/brands-ratings'

export default function FilterSidebar({
  filters,
  onFilterChange,
  availableCategories,
  availableCertifications
}) {
  const handleTierChange = (tier) => {
    const newTiers = filters.tiers.includes(tier)
      ? filters.tiers.filter(t => t !== tier)
      : [...filters.tiers, tier]
    onFilterChange({ ...filters, tiers: newTiers })
  }

  const handleCertificationChange = (cert) => {
    const newCerts = filters.certifications.includes(cert)
      ? filters.certifications.filter(c => c !== cert)
      : [...filters.certifications, cert]
    onFilterChange({ ...filters, certifications: newCerts })
  }

  const handleCategoryChange = (category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category]
    onFilterChange({ ...filters, categories: newCategories })
  }

  const clearFilters = () => {
    onFilterChange({ tiers: [], certifications: [], categories: [] })
  }

  const hasActiveFilters = filters.tiers.length > 0 ||
    filters.certifications.length > 0 ||
    filters.categories.length > 0

  return (
    <aside className="scorecard-filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="clear-filters-btn">
            Clear All
          </button>
        )}
      </div>

      <div className="filter-section">
        <h4>Sustainability Tier</h4>
        <div className="filter-options">
          {[1, 2, 3, 4].map(tier => (
            <label key={tier} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.tiers.includes(tier)}
                onChange={() => handleTierChange(tier)}
              />
              <span className="checkbox-label">
                <span
                  className="tier-dot"
                  style={{ backgroundColor: tierDescriptions[tier].color }}
                />
                Tier {tier}: {tierDescriptions[tier].label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Certifications</h4>
        <div className="filter-options">
          {availableCertifications.map(cert => (
            <label key={cert} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.certifications.includes(cert)}
                onChange={() => handleCertificationChange(cert)}
              />
              <span className="checkbox-label">
                {certificationLabels[cert] || cert}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Category</h4>
        <div className="filter-options">
          {availableCategories.map(category => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="checkbox-label">
                {categoryLabels[category] || category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
