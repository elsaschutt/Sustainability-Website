'use client'

import { tierDescriptions } from '@/data/brands-ratings'

export default function ScoreDisplay({ score, tier, size = 'medium', maxScore = null }) {
  const tierInfo = tierDescriptions[tier]

  const sizeClasses = {
    small: 'score-badge-small',
    medium: 'score-badge-medium',
    large: 'score-badge-large'
  }

  return (
    <div className={`score-badge ${sizeClasses[size]}`}>
      <div className="score-number" style={{ borderColor: tierInfo.color }}>
        {score}
        {maxScore && size === 'large' && (
          <span className="score-max">/{maxScore}</span>
        )}
      </div>
      <div className="score-tier" style={{ backgroundColor: tierInfo.color }}>
        {tierInfo.label}
      </div>
    </div>
  )
}
