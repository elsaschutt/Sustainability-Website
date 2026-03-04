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
  tierDescriptions,
  productTypeLabels,
  scorecardCriteria
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
    description: `${brand.name} scored ${brand.total_score}/165 on our sustainability rating. ${brand.description}`,
  }
}

function CategoryScoreCard({ categoryKey, categoryData, productType }) {
  const criteriaInfo = scorecardCriteria[categoryKey]
  const percentage = (categoryData.total / categoryData.max) * 100

  return (
    <div className="category-detail-card">
      <div className="category-detail-header">
        <div className="category-detail-title">
          <h3>{categoryScoreLabels[categoryKey]}</h3>
          <span className="category-priority">Priority #{criteriaInfo?.priority || ''}</span>
        </div>
        <div className="category-detail-score">
          <span className="score-big">{categoryData.total}</span>
          <span className="score-max">/{categoryData.max}</span>
        </div>
      </div>

      <div className="category-progress-bar">
        <div
          className="category-progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {categoryData.criteria && (
        <div className="criteria-breakdown">
          {Object.entries(categoryData.criteria).map(([key, value]) => {
            // Skip non-score entries like 'tier' and 'certs_held'
            if (typeof value !== 'object' || !('score' in value)) return null

            const criteriaDetail = criteriaInfo?.criteria?.find(c => c.id === key)
            const criteriaName = criteriaDetail?.name || key.replace(/_/g, ' ')
            const isConsumable = productType === 'consumable' && criteriaDetail?.consumable_alt

            return (
              <div key={key} className="criteria-row">
                <div className="criteria-info">
                  <span className="criteria-name">
                    {isConsumable ? criteriaDetail.consumable_alt : criteriaName}
                  </span>
                  {value.notes && (
                    <span className="criteria-notes">{value.notes}</span>
                  )}
                </div>
                <div className="criteria-score">
                  <span className={`score-value ${value.score === value.max ? 'full-score' : value.score === 0 ? 'zero-score' : ''}`}>
                    {value.score}/{value.max}
                  </span>
                </div>
              </div>
            )
          })}

          {/* Handle certifications category specially */}
          {categoryKey === 'certifications' && categoryData.criteria.tier && (
            <div className="criteria-row">
              <div className="criteria-info">
                <span className="criteria-name">Certification Tier: {categoryData.criteria.tier.toUpperCase()}</span>
                {categoryData.criteria.certs_held && (
                  <span className="criteria-notes">{categoryData.criteria.certs_held.join(', ')}</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
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
          <h2>Detailed Scorecard Breakdown</h2>
          <p className="section-subtitle">Click each category to see individual criteria scores</p>

          <div className="category-details-grid">
            {Object.entries(brand.category_scores).map(([key, value]) => (
              <CategoryScoreCard
                key={key}
                categoryKey={key}
                categoryData={value}
                productType={brand.product_type}
              />
            ))}
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
              <h3>Certifications Held</h3>
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

        <section className="rating-methodology">
          <h2>Rating Methodology</h2>
          <div className="methodology-grid">
            <div className="methodology-categories">
              <h4>Scoring Categories (165 pts total)</h4>
              <ul>
                <li><strong>A: Circular Economy</strong> - 30 pts (Priority #1)</li>
                <li><strong>B: Transparency & Data</strong> - 35 pts (Priority #2)</li>
                <li><strong>C: Certifications</strong> - 25 pts (Priority #3)</li>
                <li><strong>D: Climate & Renewables</strong> - 25 pts (Priority #4)</li>
                <li><strong>E: Business Model</strong> - 20 pts (Priority #5)</li>
                <li><strong>F: Social Responsibility</strong> - 15 pts (Priority #6)</li>
                <li><strong>G: Impact Claims</strong> - 10 pts (Priority #7)</li>
                <li><strong>H: Regenerative</strong> - 5 pts (Bonus)</li>
              </ul>
            </div>
            <div className="methodology-tiers">
              <h4>Tier Ratings</h4>
              <ul>
                <li><span style={{ color: tierDescriptions[1].color }}>&#9733;</span> <strong>Tier 1:</strong> 145-165 pts (Verified Leader)</li>
                <li><span style={{ color: tierDescriptions[2].color }}>&#10003;</span> <strong>Tier 2:</strong> 115-144 pts (Certified Sustainable)</li>
                <li><span style={{ color: tierDescriptions[3].color }}>&#9889;</span> <strong>Tier 3:</strong> 85-114 pts (Making Progress)</li>
                <li><span style={{ color: tierDescriptions[4].color }}>&#9888;</span> <strong>Tier 4:</strong> 55-84 pts (Early Stage)</li>
                <li><span style={{ color: tierDescriptions[5].color }}>&#10007;</span> <strong>Tier 5:</strong> 0-54 pts (Needs Improvement)</li>
              </ul>
            </div>
          </div>
          <p className="methodology-note">
            <strong>This brand: Tier {brand.tier} ({tierInfo.label}, {tierInfo.range} pts)</strong> — {tierInfo.description}.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}
