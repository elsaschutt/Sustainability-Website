'use client'

import { useState, useMemo } from 'react'
import BrandCard from './BrandCard'
import FilterSidebar from './FilterSidebar'
import { brands, getAllCategories, getAllCertifications } from '@/data/brands-ratings'

export default function BrandGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    tiers: [],
    certifications: [],
    categories: []
  })

  const availableCategories = useMemo(() => getAllCategories(), [])
  const availableCertifications = useMemo(() => getAllCertifications(), [])

  const filteredBrands = useMemo(() => {
    return brands.filter(brand => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesName = brand.name.toLowerCase().includes(query)
        const matchesDescription = brand.description.toLowerCase().includes(query)
        if (!matchesName && !matchesDescription) return false
      }

      // Tier filter
      if (filters.tiers.length > 0 && !filters.tiers.includes(brand.tier)) {
        return false
      }

      // Certification filter
      if (filters.certifications.length > 0) {
        const hasCert = filters.certifications.some(cert =>
          brand.certifications.includes(cert)
        )
        if (!hasCert) return false
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(brand.category)) {
        return false
      }

      return true
    })
  }, [searchQuery, filters])

  return (
    <div className="scorecard-layout">
      <FilterSidebar
        filters={filters}
        onFilterChange={setFilters}
        availableCategories={availableCategories}
        availableCertifications={availableCertifications}
      />

      <div className="scorecard-main">
        <div className="scorecard-search">
          <input
            type="text"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="scorecard-results-info">
          <span>{filteredBrands.length} brand{filteredBrands.length !== 1 ? 's' : ''} found</span>
        </div>

        {filteredBrands.length > 0 ? (
          <div className="scorecard-grid">
            {filteredBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        ) : (
          <div className="scorecard-no-results">
            <p>No brands match your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setFilters({ tiers: [], certifications: [], categories: [] })
              }}
              className="btn"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
