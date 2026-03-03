import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Clothing - Sustainable Living',
  description: 'Sustainable, ethical, and upcycled fashion brands committed to reducing waste',
}

const brands = [
  {
    name: 'Tentree',
    description: 'For every item purchased we plant trees, in an effort to regenerate ecosystems, capture carbon and provide planting jobs in communities around the world. All our products are created with an Earth-First approach, meaning they\'re made in fair, safe working conditions, and constructed using only sustainably sourced and recycled materials.',
    products: 'Plants 10 trees for every item purchased',
  },
  {
    name: 'Trashie',
    description: 'You can return your used clothing online through a collection bag in which they collect, sort, and grade clothing to then redistribute and responsibly recycle clothing. Once you purchase an item, you get trashie rewards where you can spend on different businesses–including instacart, sephora, walmart, hello fresh… etc.',
    products: 'The take back bag, the take back tech bag',
    prices: [
      { price: '$20', item: 'The take back bag [single]' },
      { price: '$20', item: 'The take back tech bag [small]' },
    ],
  },
  {
    name: 'ThredUp',
    description: 'They aim to save perfectly good clothing and extend its life from landfills. They sell clothes up to 90% off of retail prices.',
    products: 'Women, designer clothes, accessories, kids',
    prices: [
      { price: '50% off', item: 'first order. Prices range.' },
    ],
  },
  {
    name: 'Pact',
    description: 'Pact is a company that sells men\'s and women\'s clothing and bedding. They partner with Fair Trade USA, the Global Organic Textile Standard, and SimpliZero to help pursue sustainability. They partner with ThredUp to help keep preloved clothes out of the landfill in return for pact cash.',
    products: 'Men\'s and women\'s clothing, sustainable bedding',
  },
  {
    name: 'Drift Collective',
    description: 'They are the BEST clothing company ever. Strong values and committed to sustainability. They repair and recreate secondhand clothing and can do custom orders. Based in Portsmouth, NH & Portland, ME, but have online store.',
    products: 'All types of clothing + hats',
    prices: [
      { price: '$36', item: 'T-shirts' },
      { price: '$79', item: 'Hoodies' },
    ],
  },
  {
    name: 'Soso Swim',
    description: 'All swimwear is made out of discarded nylon fishing nets that are rescued from the ocean. It is woven with lycra to make their swimsuits. All swimwear comes in organic cotton duster bag that can be reused to store fruits and veggies.',
    products: 'Sustainable swimwear made from recycled ocean fishing nets',
  },
  {
    name: 'J.O. Studio',
    description: 'They rescue old tents left at music festivals, wash, and upcycle them into bags.',
    products: 'Tent backpacks, tent washbags, tent tote bags',
    prices: [
      { price: '$42', item: 'Recycled Tent Washbag' },
      { price: '$28', item: 'Packable Tent Tote Bag' },
      { price: '$124', item: 'Recycled Tent Bag' },
    ],
  },
]

export default function ClothingPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Clothing</h1>
        <p>Sustainable, ethical, and upcycled fashion brands committed to reducing waste</p>
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
