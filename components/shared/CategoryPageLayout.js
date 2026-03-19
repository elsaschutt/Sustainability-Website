'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import FilterSidebar from './FilterSidebar'

export default function CategoryPageLayout({ title, description, brands }) {
  const [filteredBrands, setFilteredBrands] = useState(brands)

  return (
    <main>
      <div className="page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="section">
        <div className="container">
          <div className="category-layout">
            <FilterSidebar brands={brands} onFilter={setFilteredBrands} />
            <div className="category-main">
              <div className="product-grid-count">
                {filteredBrands.length} {filteredBrands.length === 1 ? 'brand' : 'brands'}
              </div>
              <div className="product-grid">
                {filteredBrands.map((brand) => (
                  <ProductCard key={brand.name} {...brand} />
                ))}
              </div>
              {filteredBrands.length === 0 && (
                <div className="no-results">
                  No brands match your filters. Try adjusting your criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
