import Image from 'next/image'
import '@/styles/main.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CategoryCard from '@/components/shared/CategoryCard'

export const metadata = {
  title: 'Shop | Sustainable Living',
  description: 'Discover curated eco-friendly products for every room in your home',
}

const categories = [
  { href: '/kitchen', title: 'Kitchen', emoji: '🍳' },
  { href: '/bathroom', title: 'Bathroom', emoji: '🛁' },
  { href: '/bedroom', title: 'Bedroom', emoji: '🛏️' },
  { href: '/clothing', title: 'Clothing', emoji: '👗' },
  { href: '/garden', title: 'Garden', emoji: '🌱' },
  { href: '/furniture', title: 'Furniture', emoji: '🪑' },
  { href: '/daily-life', title: 'Daily Life', emoji: '☀️' },
  { href: '/waste', title: 'Waste Solutions', emoji: '♻️' },
]

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <Image
            src="/images/flower tree.jpeg"
            alt="Sustainable products"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <h1>Shop Sustainable</h1>
            <p>Discover curated eco-friendly products for every room in your home</p>
          </div>
        </div>

        {/* Horizontal scrolling category bar */}
        <div className="category-scroll-bar">
          <div className="category-scroll-inner">
            {categories.map((cat) => (
              <a key={cat.href} href={cat.href} className="category-scroll-item">
                <span className="category-scroll-emoji">{cat.emoji}</span>
                <span className="category-scroll-label">{cat.title}</span>
              </a>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>Shop by Category</h2>
              <p>Browse our collection organized by space</p>
            </div>

            <div className="grid grid-4">
              <CategoryCard
                href="/kitchen"
                image="/images/kitchen.jpg"
                alt="Kitchen"
                title="Kitchen"
                description="Sustainable essentials"
              />
              <CategoryCard
                href="/bathroom"
                image="/images/bathroom sink.jpg"
                alt="Bathroom"
                title="Bathroom"
                description="Zero-waste care"
              />
              <CategoryCard
                href="/bedroom"
                image="/images/bed.jpg"
                alt="Bedroom"
                title="Bedroom"
                description="Organic comfort"
              />
              <CategoryCard
                href="/clothing"
                image="/images/clothes on shelf.jpg"
                alt="Clothing"
                title="Clothing"
                description="Ethical fashion"
              />
              <CategoryCard
                href="/garden"
                image="/images/flower garden.jpeg"
                alt="Garden"
                title="Garden"
                description="Outdoor living"
              />
              <CategoryCard
                href="/furniture"
                image="/images/sungai-chair.jpg"
                alt="Furniture"
                title="Furniture"
                description="Sustainable design"
              />
              <CategoryCard
                href="/daily-life"
                image="/images/greenery.jpeg"
                alt="Daily Life"
                title="Daily Life"
                description="Everyday essentials"
              />
              <CategoryCard
                href="/waste"
                image="/images/treesaplings.jpeg"
                alt="Waste Solutions"
                title="Waste Solutions"
                description="Zero-waste living"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
