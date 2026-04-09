import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Bathroom | The Green Swap',
  description: 'Zero-waste bathroom essentials and sustainable personal care products',
}

const brands = [
  {
    name: 'Who Gives a Crap',
    url: 'https://www.whogivesacrap.org/',
    products: 'Toilet paper, paper towels, trash bags, compost bags',
    startingPrice: '$16',
    certifications: ['B Corp'],
    tier: 'Tier 1: Verified Leader',
  },
  {
    name: 'Bite',
    url: 'https://bitetoothpastebits.com/',
    products: 'Toothpaste bites, floss, deodorant, mouthwash',
    startingPrice: '$12',
    tier: 'Tier 2: Certified Sustainable',
  },
  {
    name: 'Leafshave',
    url: 'https://leafshave.com/',
    products: 'Sustainable razors',
    startingPrice: '$89',
    tier: 'Tier 3: Making Progress',
  },
  {
    name: 'Rif Care',
    url: 'https://rifcare.com/',
    products: 'Tampons, pads, period underwear',
    startingPrice: '$8',
    tier: 'Tier 2: Certified Sustainable',
  },
]

export default function BathroomPage() {
  return (
    <CategoryPageLayout
      title="Bathroom"
      description="Zero-waste bathroom essentials and sustainable personal care products"
      brands={brands}
      theme="navy"
    />
  )
}
