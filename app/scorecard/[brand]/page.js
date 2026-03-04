import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScoreDisplay from '@/components/scorecard/ScoreDisplay'
import {
  brands,
  getBrandById,
  categoryLabels,
  categoryScoreLabels,
  categoryDescriptions,
  tierDescriptions,
  productTypeLabels
} from '@/data/brands-ratings'
import '@/styles/main.css'
import '@/styles/scorecard.css'

export async function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.id,
  }))
}

export async function generateMetadata({ params }) {
  const brand = getBrandById(params.brand)
  if (!brand) {
    return { title: 'Brand Not Found' }
  }
  return {
    title: `${brand.name} Sustainability Scorecard | Sustainable Living`,
    description: `${brand.name} scored ${brand.total_score}/100 on our sustainability rating. ${brand.description}`,
  }
}

export default function BrandDetailPage({ params }) {
  const brand = getBrandById(params.brand)

  if (!brand) {
    notFound()
  }

  const tierInfo = tierDescriptions[brand.tier]

  return (
    <>
      <Header />

      <main className="brand-detail-page">
        <Link href="/scorecard" className="brand-detail-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to All Brands
        </Link>

        <div className="brand-detail-header">
          <div className="brand-detail-info">
            <p className="brand-detail-category">
              {categoryLabels[brand.category] || brand.category}
              {brand.product_type && (
                <span style={{ marginLeft: '12px', opacity: 0.7 }}>
                  ({productTypeLabels[brand.product_type] || brand.product_type})
                </span>
              )}
            </p>
            <h1>{brand.name}</h1>
            <p className="brand-detail-description">{brand.description}</p>
          </div>
          <ScoreDisplay score={brand.total_score} tier={brand.tier} size="large" maxScore={165} />
        </div>

        <section className="category-scores-section">
          <h2>Category Breakdown</h2>
          <div className="category-scores-grid">
            {Object.entries(brand.category_scores).map(([key, value]) => {
              const percentage = (value.score / value.max) * 100
              return (
                <div key={key} className="category-score-card">
                  <p className="category-score-label">{categoryScoreLabels[key] || key}</p>
                  <p className="category-score-value">
                    {value.score} <span>/ {value.max}</span>
                  </p>
                  <div className="category-score-bar">
                    <div
                      className="category-score-fill"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="key-findings-section">
          <h2>Key Findings</h2>
          <div className="key-findings-grid">
            <div className="findings-card strengths">
              <h3>Strengths</h3>
              <ul className="findings-list">
                {brand.key_findings.strengths.map((item, index) => (
                  <li key={index}>
                    <span className="findings-icon" style={{ color: '#2d5f3f' }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="findings-card weaknesses">
              <h3>Areas for Improvement</h3>
              <ul className="findings-list">
                {brand.key_findings.weaknesses.map((item, index) => (
                  <li key={index}>
                    <span className="findings-icon" style={{ color: '#b35900' }}>-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="findings-card certifications">
              <h3>Certifications</h3>
              <ul className="findings-list">
                {brand.key_findings.certifications.map((item, index) => (
                  <li key={index}>
                    <span className="findings-icon" style={{ color: '#4169E1' }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '40px', padding: '24px', background: 'var(--color-gray-bg)' }}>
          <p style={{ fontSize: '14px', color: 'var(--color-gray-text)', lineHeight: '1.7' }}>
            <strong>About this rating:</strong> Brands are scored on a 165-point scale across eight categories:
            Circular Economy (30 pts), Transparency & Data (35 pts), Certifications (25 pts), Climate & Renewables (25 pts),
            Business Model (20 pts), Social Responsibility (15 pts), Impact Claims (10 pts), and Regenerative Impact (5 pts bonus).
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-gray-text)', lineHeight: '1.7', marginTop: '8px' }}>
            <strong>Tier {brand.tier} ({tierInfo.label}, {tierInfo.range} pts):</strong> {tierInfo.description}.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
