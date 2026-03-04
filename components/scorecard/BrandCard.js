import Link from 'next/link'
import ScoreDisplay from './ScoreDisplay'
import { certificationLabels, categoryLabels } from '@/data/brands-ratings'

export default function BrandCard({ brand }) {
  return (
    <Link href={`/scorecard/${brand.id}`} className="scorecard-brand-card">
      <div className="brand-card-header">
        <div className="brand-card-info">
          <span className="brand-card-category">{categoryLabels[brand.category] || brand.category}</span>
          <h3 className="brand-card-name">{brand.name}</h3>
        </div>
        <ScoreDisplay score={brand.total_score} tier={brand.tier} size="small" />
      </div>

      <p className="brand-card-description">{brand.description}</p>

      <div className="brand-card-certifications">
        {brand.certifications.slice(0, 3).map(cert => (
          <span key={cert} className="certification-badge">
            {certificationLabels[cert] || cert}
          </span>
        ))}
        {brand.certifications.length > 3 && (
          <span className="certification-badge certification-more">
            +{brand.certifications.length - 3}
          </span>
        )}
      </div>

      <div className="brand-card-footer">
        <span className="view-details">View Full Scorecard</span>
      </div>
    </Link>
  )
}
