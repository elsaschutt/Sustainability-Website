import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Waste Reduction - Sustainable Living',
  description: 'Services and solutions to reduce food waste and manage resources responsibly',
}

const brands = [
  {
    name: 'Get Rid Well',
    description: 'Responsible waste disposal and recycling services.',
  },
  {
    name: 'Misfits Markets',
    description: 'Online grocery delivery service that rescues organic produce and other grocery items that might otherwise go to waste.',
  },
  {
    name: 'Too Good To Go',
    description: 'Mobile app that connects you with restaurants and stores that have unsold food surplus. Save delicious food from going to waste at great prices.',
  },
]

export default function WastePage() {
  return (
    <main>
      <div className="page-header">
        <h1>Waste Reduction</h1>
        <p>Services and solutions to reduce food waste and manage resources responsibly</p>
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
