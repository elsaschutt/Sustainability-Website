import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Garden - Sustainable Living',
  description: 'Indoor and outdoor gardening solutions for sustainable living',
}

const brands = [
  {
    name: 'GardynTech',
    url: 'https://mygardyn.com/',
    products: 'Indoor vertical gardens with AI',
    startingPrice: '$499',
  },
]

export default function GardenPage() {
  return (
    <CategoryPageLayout
      title="Garden"
      description="Indoor and outdoor gardening solutions for sustainable living"
      brands={brands}
    />
  )
}
