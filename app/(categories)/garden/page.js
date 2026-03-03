import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Garden - Sustainable Living',
  description: 'Indoor and outdoor gardening solutions for sustainable living',
}

const brands = [
  {
    name: 'GardynTech',
    description: 'A vertical gardening system that does not require any soil to grow plants. It uses LED lights, machine learning, and artificial intelligence to make maintaining plants easy.',
    products: 'Garden studio, Garden home',
    prices: [
      { price: '$499', item: 'Garden Studio (includes 16 plant starter set, plant food, 2-year warranty)' },
      { price: '$899', item: 'Garden Home (includes 30 plant starter set, plant food, 2-year warranty)' },
    ],
  },
]

export default function GardenPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Garden</h1>
        <p>Indoor and outdoor gardening solutions for sustainable living</p>
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
