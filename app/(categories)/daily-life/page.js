import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Daily Life - Sustainable Living',
  description: 'Sustainable products for everyday living',
}

const brands = [
  {
    name: 'Pela',
    description: 'B-corp, compostable phone case that can compost at home or industrial compost.',
    products: 'iPhone and Android cases, screen protectors, phone grips',
    prices: [
      { price: '$52-65', item: 'Phone cases (Buy one get one free)' },
    ],
  },
  {
    name: 'Arbor Made',
    description: 'Sell eco-friendly and refillable candles. Carbon neutral and plastic free on all shipping orders. 1% of profits donated.',
    products: 'Candles',
    prices: [
      { price: '$78', item: 'Starter bundle' },
      { price: '$66', item: 'Candle set' },
    ],
  },
]

export default function DailyLifePage() {
  return (
    <main>
      <div className="page-header">
        <h1>Daily Life</h1>
        <p>Sustainable products for everyday living</p>
      </div>

      <div className="section">
        <div className="container">
          {brands.map((brand) => (
            <BrandItem key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </main>
  )
}
