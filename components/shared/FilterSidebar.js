'use client'

import { useState } from 'react'

export default function FilterSidebar({ brands, onFilter }) {
  const [priceFilter, setPriceFilter] = useState('all')
  const [certFilter, setCertFilter] = useState('all')

  // Get unique certifications from all brands
  const allCerts = [...new Set(
    brands.flatMap(b => b.certifications || [])
  )].sort()

  const handlePriceChange = (value) => {
    setPriceFilter(value)
    applyFilters(value, certFilter)
  }

  const handleCertChange = (value) => {
    setCertFilter(value)
    applyFilters(priceFilter, value)
  }

  const clearFilters = () => {
    setPriceFilter('all')
    setCertFilter('all')
    onFilter(brands)
  }

  const applyFilters = (price, cert) => {
    let filtered = [...brands]

    if (price !== 'all') {
      filtered = filtered.filter(b => {
        const p = parseFloat((b.startingPrice || '').replace(/[^0-9.]/g, ''))
        if (isNaN(p)) return true
        if (price === 'under10') return p < 10
        if (price === 'under25') return p < 25
        if (price === 'under50') return p < 50
        if (price === 'over50') return p >= 50
        return true
      })
    }

    if (cert !== 'all') {
      filtered = filtered.filter(b =>
        b.certifications && b.certifications.includes(cert)
      )
    }

    onFilter(filtered)
  }

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button onClick={clearFilters} className="filter-clear">Clear all</button>
      </div>

      <div className="filter-group">
        <h4>Price</h4>
        {[
          ['all', 'All prices'],
          ['under10', 'Under $10'],
          ['under25', 'Under $25'],
          ['under50', 'Under $50'],
          ['over50', '$50+'],
        ].map(([value, label]) => (
          <label key={value} className="filter-option">
            <input
              type="radio"
              name="price"
              value={value}
              checked={priceFilter === value}
              onChange={() => handlePriceChange(value)}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      {allCerts.length > 0 && (
        <div className="filter-group">
          <h4>Certifications</h4>
          <label className="filter-option">
            <input
              type="radio"
              name="cert"
              value="all"
              checked={certFilter === 'all'}
              onChange={() => handleCertChange('all')}
            />
            <span>All</span>
          </label>
          {allCerts.map((cert) => (
            <label key={cert} className="filter-option">
              <input
                type="radio"
                name="cert"
                value={cert}
                checked={certFilter === cert}
                onChange={() => handleCertChange(cert)}
              />
              <span>{cert}</span>
            </label>
          ))}
        </div>
      )}
    </aside>
  )
}
