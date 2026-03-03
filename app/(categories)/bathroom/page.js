import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Bathroom - Sustainable Living',
  description: 'Zero-waste bathroom essentials and sustainable personal care products',
}

const brands = [
  {
    name: 'Who Gives a Crap',
    description: 'An awesome company that started in 2013 and donates 50% of profits to increase access to clean water and a toilet. Their products are almost all 100% recycled.',
    products: 'Toilet paper, paper towels, recycled trash bags, compost bags, dream cloths',
    prices: [
      { price: '$38', item: 'Toilet paper (24 rolls), $62 for 48' },
      { price: '$20', item: 'Paper towels (6 rolls), $36 for 12' },
      { price: '$16', item: 'Recycled trash bags' },
      { price: '$17', item: 'Compost bags' },
      { price: '$16', item: 'Poo Bags (dogs)' },
      { price: '$24', item: 'Dream cloths' },
    ],
  },
  {
    name: 'Bite',
    description: 'Replace plastic toothpaste tubes with little toothpaste bites that turn to paste in mouth. Their refills also have no plastic packaging. All products are plastic free and plant based.',
    products: 'Toothpaste bites, floss, deodorant, mouthwash, tongue scraper, toothbrush',
    prices: [
      { price: '$32', item: 'Toothpaste bits fluoride free' },
      { price: '$12', item: 'Toothbrush' },
      { price: '$12', item: 'Floss' },
      { price: '$20', item: 'Mouthwash bits' },
      { price: '$20', item: 'Whitening Gel' },
    ],
  },
  {
    name: 'Leafshave',
    description: 'Mission is to switch from plastic disposable razors to sustainable ones.',
    products: 'Razors',
    prices: [
      { price: '$89', item: 'Leaf Razor' },
    ],
  },
  {
    name: 'Rif Care',
    description: '100% a BIPOC women owned small business. Their products are pesticide free, sustainably sourced, and plant based. All products are made from hemp fiber.',
    products: 'Tampons, pads, period underwear',
    prices: [
      { price: '$7.69', item: 'Organic non-applicator tampons' },
      { price: '$7.99', item: 'Organic smooth applicator biodegradable tampons' },
      { price: '$8.99', item: 'Organic pads with wings' },
      { price: '$29.00', item: 'Leakproof Period Underwear PFA-Free' },
    ],
  },
]

export default function BathroomPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Bathroom</h1>
        <p>Zero-waste bathroom essentials and sustainable personal care products</p>
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
