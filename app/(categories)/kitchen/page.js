import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Kitchen - Sustainable Living',
  description: 'Sustainable solutions for your kitchen—from reusable paper towels to plastic-free cleaning supplies',
}

const brands = [
  {
    name: 'Papaya Reusables',
    description: 'Started by husband and wife who noticed after having their first daughter how bulky, expensive, and wasteful paper towels were. Determined to find an alternative which led them to creating Papaya. The reusable towels are made out of 70% cellulose and 30% cotton and are 100% compostable. They are machine washable and dishwasher safe.',
    products: 'Reusable paper towels, reusable bags',
    prices: [
      { price: '$18', item: '2-pack reusable paper towels + 1 hook' },
      { price: '$36', item: '4-pack reusable paper towels + 2 hooks' },
      { price: '$14', item: 'Reusable everything bags' },
    ],
  },
  {
    name: 'Blueland',
    description: 'Plastic free sustainable cleaning supplies. Replace plastic bottles with cleaning tablets for a more sustainable home.',
    products: 'Cleaning tablets, dishwasher detergent, laundry detergent, toilet bowl cleaner',
    prices: [
      { price: '$16', item: 'Multisurface cleaner starter set' },
      { price: '$25', item: 'Laundry detergent starter set' },
      { price: '$18', item: 'Dish soap starter set' },
      { price: '$25', item: 'Dishwasher detergent starter set' },
      { price: '$23', item: 'Toilet bowl cleaner starter set' },
    ],
  },
  {
    name: 'Stasher',
    description: 'Reusable plastic bag alternative made from platinum silicone. A sustainable solution to single-use plastic bags.',
    products: 'Sandwich bag, snack bag, stretchable lids, bowls',
    prices: [
      { price: '$10.39', item: 'Sandwich bag' },
      { price: '$19.99', item: 'Stretchable lid 4-pack' },
      { price: '$12.99', item: '1-cup bowl' },
    ],
  },
  {
    name: 'Silpat',
    description: 'Silicone baking mats that replace parchment paper. Parchment paper helps savory dishes and sweet treats slide off the pan easily but is single-use and hard to compost or recycle. A silicon baking mat is a great alternative and is easy to clean.',
    products: 'Silicone Baking Mat',
    prices: [
      { price: '$28.50', item: 'Silpat Half Size Baking Mat' },
      { price: '$20', item: 'Silpat 9" Round Mat' },
    ],
  },
  {
    name: 'OXO',
    description: 'Slightly cheaper alternative to Silpat for silicone baking mats.',
    products: 'Silicone Baking Mat',
    prices: [
      { price: '$21.50', item: 'Silicone Baking Mat' },
    ],
  },
]

export default function KitchenPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Kitchen</h1>
        <p>Sustainable solutions for your kitchen—from reusable paper towels to plastic-free cleaning supplies</p>
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
