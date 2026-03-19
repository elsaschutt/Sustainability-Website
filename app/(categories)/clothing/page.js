import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Clothing - Sustainable Living',
  description: 'Sustainable, ethical, and upcycled fashion brands committed to reducing waste',
}

const brands = [
  {
    name: 'Tentree',
    url: 'https://www.tentree.com/',
    products: 'Sustainable basics, activewear (plants 10 trees per item)',
    certifications: ['B Corp'],
  },
  {
    name: 'Trashie',
    url: 'https://www.trashie.io/',
    products: 'Take back bags for clothing recycling',
    startingPrice: '$20',
  },
  {
    name: 'ThredUp',
    url: 'https://www.thredup.com/',
    products: 'Secondhand women, designer, kids clothing',
    startingPrice: '50% off first order',
  },
  {
    name: 'Pact',
    url: 'https://wearpact.com/',
    products: 'Organic cotton clothing, bedding',
    certifications: ['Fair Trade', 'GOTS'],
  },
  {
    name: 'Drift Collective',
    url: 'https://driftcollective.com/',
    products: 'Repaired and recreated secondhand clothing',
    startingPrice: '$36',
  },
  {
    name: 'Soso Swim',
    url: 'https://sososwim.com/',
    products: 'Swimwear from recycled ocean fishing nets',
  },
  {
    name: 'J.O. Studio',
    url: 'https://jostudio.co/',
    products: 'Bags upcycled from festival tents',
    startingPrice: '$28',
  },
]

export default function ClothingPage() {
  return (
    <CategoryPageLayout
      title="Clothing"
      description="Sustainable, ethical, and upcycled fashion brands committed to reducing waste"
      brands={brands}
    />
  )
}
