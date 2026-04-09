import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Bedroom | The Green Swap',
  description: 'Sustainable bedding and clothing made with eco-friendly materials',
}

const brands = [
  {
    name: 'Magic Linens',
    url: 'https://www.magiclinen.com/',
    products: 'Linen bedding, linen clothing, home textiles',
    certifications: ['Oeko-Tex'],
  },
  {
    name: 'Pact',
    url: 'https://wearpact.com/',
    products: 'Organic cotton bedding, clothing',
    certifications: ['Fair Trade', 'GOTS'],
  },
]

export default function BedroomPage() {
  return (
    <CategoryPageLayout
      title="Bedroom"
      description="Sustainable bedding and clothing made with eco-friendly materials"
      brands={brands}
    />
  )
}
