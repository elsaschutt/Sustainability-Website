import BrandItem from '@/components/shared/BrandItem'

export const metadata = {
  title: 'Bedroom - Sustainable Living',
  description: 'Sustainable bedding and clothing made with eco-friendly materials',
}

const brands = [
  {
    name: 'Magic Linens',
    description: 'They specialize in made-to-order linen clothing and custom size home textiles, handcrafted with a focus on sustainability and longevity. The linen in itself is a natural fiber made from the flax plant, which is a renewable resource that grows even in poor-quality soil and usually does not require any chemical pesticides. Their products are Oeko-Tex certified, meaning they are absent from harmful substances and chemicals. They use packaging that is 100% compostable, made out of cornstarch and PBAT, a bio-based polymer, which means it does not leave behind any damaging residues when it breaks down.',
    products: 'Made-to-order linen clothing and custom size home textiles',
  },
  {
    name: 'Pact',
    description: 'Pact is a company that sells men\'s and women\'s clothing and bedding. They partner with Fair Trade USA, the Global Organic Textile Standard, and SimpliZero to help pursue sustainability. They partner with ThredUp to help keep preloved clothes out of the landfill in return for pact cash.',
    products: 'Men\'s and women\'s clothing, bedding',
  },
]

export default function BedroomPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Bedroom</h1>
        <p>Sustainable bedding and clothing made with eco-friendly materials</p>
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
