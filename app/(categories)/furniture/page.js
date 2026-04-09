import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Furniture | The Green Swap',
  description: 'Eco-friendly furniture made from upcycled and sustainable materials',
}

const brands = [
  {
    name: 'Sungai Design',
    url: 'https://sungaidesign.com/',
    products: 'Benches, stools, loungers from river plastic',
    startingPrice: '$150',
  },
]

export default function FurniturePage() {
  return (
    <CategoryPageLayout
      title="Furniture"
      description="Eco-friendly furniture made from upcycled and sustainable materials"
      brands={brands}
    />
  )
}
