'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import FilterSidebar from './FilterSidebar'

const categories = [
  { href: '/kitchen', title: 'Kitchen' },
  { href: '/bathroom', title: 'Bathroom' },
  { href: '/bedroom', title: 'Bedroom' },
  { href: '/clothing', title: 'Clothing' },
  { href: '/garden', title: 'Garden' },
  { href: '/furniture', title: 'Furniture' },
  { href: '/daily-life', title: 'Daily Life' },
  { href: '/waste', title: 'Waste Solutions' },
]

export default function CategoryPageLayout({ title, description, brands }) {
  const [filteredBrands, setFilteredBrands] = useState(brands)

  return (
    <main className="earth-theme">
      {/* Category scroll bar */}
      <div className="cat-scroll-bar">
        <div className="cat-scroll-inner">
          {categories.map((cat) => (
            <a
              key={cat.href}
              href={cat.href}
              className={`cat-scroll-link ${cat.title === title ? 'active' : ''}`}
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      <div className="earth-hero">
        <span className="earth-hero-tag">Explore Our Collection</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="earth-section">
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
