import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Daily Life - Sustainable Living',
  description: 'Sustainable products for everyday living',
}

const brands = [
  {
    name: 'Pela',
    url: 'https://pelacase.com/',
    products: 'Compostable phone cases, screen protectors',
    startingPrice: '$52',
    certifications: ['B Corp'],
  },
  {
    name: 'Arbor Made',
    url: 'https://arbormade.com/',
    products: 'Eco-friendly refillable candles',
    startingPrice: '$66',
  },
]

export default function DailyLifePage() {
  return (
    <CategoryPageLayout
      title="Daily Life"
      description="Sustainable products for everyday living"
      brands={brands}
    />
  )
}
