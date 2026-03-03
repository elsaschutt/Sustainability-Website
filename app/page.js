import Image from 'next/image'
import Link from 'next/link'
import '@/styles/main.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroCarousel from '@/components/home/HeroCarousel'
import CategoryCard from '@/components/shared/CategoryCard'
import BrandCard from '@/components/shared/BrandCard'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Featured Banner */}
        <div className="featured-banner">
          <Image
            src="/images/trees-975091.jpg"
            alt="Sustainable forest"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="featured-banner-overlay" />
          <div className="featured-banner-content">
            <h2>From Earth to Home</h2>
            <p>Sustainable living has inspired generations of conscious consumers seeking beauty and responsibility</p>
            <Link href="/resources" className="btn">Learn More</Link>
          </div>
        </div>

        {/* Shop by Space */}
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>Shop by Space</h2>
              <p>Discover sustainable products organized by room</p>
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
            </div>
          </div>
        </section>

        {/* Product Spotlight 1 */}
        <div className="product-spotlight">
          <div className="container">
            <div className="spotlight-grid">
              <div className="spotlight-content">
                <h2>Sustainable Kitchen Essentials</h2>
                <p>Handcrafted with care, each product brings the beauty of sustainable design to your everyday life. Our kitchen collection features reusable containers, eco-friendly cleaning supplies, and natural materials.</p>
                <p>From plastic-free storage to compostable cleaning tools, every item is selected for its environmental impact and lasting quality.</p>
                <Link href="/kitchen" className="btn">Shop Kitchen</Link>
              </div>
              <Image
                src="/images/kitchen.jpg"
                alt="Kitchen products"
                width={600}
                height={500}
                className="spotlight-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Product Spotlight 2 */}
        <section className="section">
          <div className="container">
            <div className="spotlight-grid">
              <Image
                src="/images/bathroom sink.jpg"
                alt="Bathroom products"
                width={600}
                height={500}
                className="spotlight-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="spotlight-content">
                <h2>Zero-Waste Bathroom</h2>
                <p>Transform your daily routine with sustainable alternatives that reduce plastic waste and environmental impact. Our bathroom collection features natural ingredients and reusable options.</p>
                <p>From bamboo toothbrushes to refillable soap dispensers, create a bathroom that&apos;s both beautiful and responsible.</p>
                <Link href="/bathroom" className="btn">Shop Bathroom</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="section" style={{ background: 'var(--color-gray-bg)' }}>
          <div className="container">
            <div className="section-title">
              <h2>Featured Brands</h2>
              <p>Partnering with companies committed to sustainability</p>
            </div>

            <div className="grid grid-3">
              <BrandCard
                href="/kitchen"
                image="/images/kitchen.jpg"
                alt="Blueland"
                category="CLEANING"
                title="Blueland"
                description="Plastic-free cleaning tablets that eliminate single-use bottles from your home"
              />
              <BrandCard
                href="/clothing"
                image="/images/clothes on shelf.jpg"
                alt="Tentree"
                category="FASHION"
                title="Tentree"
                description="Plants 10 trees for every item purchased, creating lasting environmental impact"
              />
              <BrandCard
                href="/kitchen"
                image="/images/kitchen.jpg"
                alt="Stasher"
                category="FOOD STORAGE"
                title="Stasher"
                description="Reusable silicone bags replacing single-use plastic in your kitchen"
              />
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <div className="instagram-section">
          <div className="container">
            <h2>Share your space @sustainable_living</h2>

            <div className="instagram-grid">
              <div className="instagram-item">
                <Image src="/images/kitchen.jpg" alt="Instagram 1" width={300} height={300} style={{ objectFit: 'cover' }} />
              </div>
              <div className="instagram-item">
                <Image src="/images/bathroom sink.jpg" alt="Instagram 2" width={300} height={300} style={{ objectFit: 'cover' }} />
              </div>
              <div className="instagram-item">
                <Image src="/images/bed.jpg" alt="Instagram 3" width={300} height={300} style={{ objectFit: 'cover' }} />
              </div>
              <div className="instagram-item">
                <Image src="/images/clothes on shelf.jpg" alt="Instagram 4" width={300} height={300} style={{ objectFit: 'cover' }} />
              </div>
              <div className="instagram-item">
                <Image src="/images/greenery.jpeg" alt="Instagram 5" width={300} height={300} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
