import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCard({ href, image, alt, title, description }) {
  return (
    <Link href={href} className="category-card">
      <Image src={image} alt={alt} fill style={{ objectFit: 'cover' }} />
      <div className="category-card-overlay">
        <div className="category-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}
