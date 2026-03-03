import Link from 'next/link'
import Image from 'next/image'

export default function BrandCard({ href, image, alt, category, title, description }) {
  return (
    <Link href={href} className="brand-card">
      <Image src={image} alt={alt} width={400} height={400} style={{ objectFit: 'cover' }} />
      <div className="brand-card-body">
        <div className="brand-category">{category}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}
