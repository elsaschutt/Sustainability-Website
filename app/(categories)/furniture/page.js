import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Furniture - Sustainable Living',
  description: 'Eco-friendly furniture made from upcycled and sustainable materials',
}

const brands = [
  {
    name: 'Sungai Design',
    description: 'On a mission to up-cycle as much river plastic into beautiful, long lasting products to help fund river clean-ups around the world. They use Bali river plastic from Sungai Watch cleanups.',
    products: 'Benches, stools, loungers',
    prices: [
      { price: '$300', item: 'Benches' },
      { price: '$150', item: 'Stools' },
      { price: '$770-$960', item: 'Loungers' },
    ],
  },
]

export default function FurniturePage() {
  return (
    <main>
      <div className="page-header">
        <h1>Furniture</h1>
        <p>Eco-friendly furniture made from upcycled and sustainable materials</p>
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
