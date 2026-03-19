import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Waste Reduction - Sustainable Living',
  description: 'Services and solutions to reduce food waste and manage resources responsibly',
}

const brands = [
  {
    name: 'Get Rid Well',
    products: 'Responsible waste disposal and recycling services',
  },
  {
    name: 'Misfits Markets',
    url: 'https://www.misfitsmarket.com/',
    products: 'Rescued organic produce, grocery delivery',
  },
  {
    name: 'Too Good To Go',
    url: 'https://www.toogoodtogo.com/',
    products: 'App for surplus food from restaurants and stores',
  },
]

export default function WastePage() {
  return (
    <CategoryPageLayout
      title="Waste Reduction"
      description="Services and solutions to reduce food waste and manage resources responsibly"
      brands={brands}
    />
  )
}
