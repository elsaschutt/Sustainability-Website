'use client'

import { useState } from 'react'

const TIER_ORDER = {
  'Tier 1: Verified Leader': 1,
  'Tier 2: Certified Sustainable': 2,
  'Tier 3: Making Progress': 3,
  'Tier 4: Early Stage': 4,
  'Tier 5: Needs Improvement': 5,
}

export default function FilterSidebar({ brands, onFilter }) {
  const [priceFilter, setPriceFilter] = useState('all')
  const [certFilter, setCertFilter] = useState('all')
  const [tierSort, setTierSort] = useState('default')

  // Get unique certifications from all brands
  const allCerts = [...new Set(
    brands.flatMap(b => b.certifications || [])
  )].sort()

  // Detect if any brand has tier data
  const hasTiers = brands.some(b => b.tier)

  const handlePriceChange = (value) => {
    setPriceFilter(value)
    applyFilters(value, certFilter, tierSort)
  }

  const handleCertChange = (value) => {
    setCertFilter(value)
    applyFilters(priceFilter, value, tierSort)
  }

  const handleTierChange = (value) => {
    setTierSort(value)
    applyFilters(priceFilter, certFilter, value)
  }

  const clearFilters = () => {
    setPriceFilter('all')
    setCertFilter('all')
    setTierSort('default')
    onFilter(brands)
  }

  const applyFilters = (price, cert, tier) => {
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

    // Tier filtering / sorting
    if (tier && tier !== 'default') {
      if (tier.startsWith('only-')) {
        // Filter to specific tier number
        const tierNum = parseInt(tier.replace('only-', ''), 10)
        filtered = filtered.filter(b => {
          const rank = TIER_ORDER[b.tier]
          return rank === tierNum
        })
      } else if (tier === 'highToLow') {
        filtered.sort((a, b) => {
          const ra = TIER_ORDER[a.tier] || 99
          const rb = TIER_ORDER[b.tier] || 99
          return ra - rb
        })
      } else if (tier === 'lowToHigh') {
        filtered.sort((a, b) => {
          const ra = TIER_ORDER[a.tier] || 99
          const rb = TIER_ORDER[b.tier] || 99
          return rb - ra
        })
      }
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

      {hasTiers && (
        <div className="filter-group">
          <h4>Sustainability Tier</h4>
          {[
            ['default', 'Default order'],
            ['highToLow', 'Best to worst (Tier 1 → 5)'],
            ['lowToHigh', 'Worst to best (Tier 5 → 1)'],
            ['only-1', 'Only Tier 1: Verified Leader'],
            ['only-2', 'Only Tier 2: Certified Sustainable'],
            ['only-3', 'Only Tier 3: Making Progress'],
            ['only-4', 'Only Tier 4: Early Stage'],
            ['only-5', 'Only Tier 5: Needs Improvement'],
          ].map(([value, label]) => (
            <label key={value} className="filter-option">
              <input
                type="radio"
                name="tier"
                value={value}
                checked={tierSort === value}
                onChange={() => handleTierChange(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      )}

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
