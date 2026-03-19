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
      <main className="home-earth">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Mission Statement */}
        <section className="home-mission">
          <div className="container">
            <span className="home-tag">Our Purpose</span>
            <h2>We don&apos;t sell sustainability.<br />We verify it.</h2>
            <p>Every brand on The Green Swap is evaluated through our proprietary scorecard system — measuring real impact across circular economy, transparency, certifications, climate action, and social responsibility.</p>
          </div>
        </section>

        {/* Shop by Space */}
        <section className="home-categories">
          <div className="container">
            <div className="home-section-header">
              <span className="home-tag">Browse Collections</span>
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

        {/* Spotlight: Kitchen */}
        <section className="home-spotlight">
          <div className="container">
            <div className="spotlight-grid">
              <div className="spotlight-content">
                <span className="home-tag">Featured</span>
                <h2>Sustainable Kitchen Essentials</h2>
                <p>Handcrafted with care, each product brings the beauty of sustainable design to your everyday life. From plastic-free storage to compostable cleaning tools, every item is selected for its environmental impact and lasting quality.</p>
                <Link href="/kitchen" className="home-btn">Shop Kitchen</Link>
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
        </section>

        {/* Spotlight: Bathroom */}
        <section className="home-spotlight-alt">
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
                <span className="home-tag">Featured</span>
                <h2>Zero-Waste Bathroom</h2>
                <p>Transform your daily routine with sustainable alternatives that reduce plastic waste. From bamboo toothbrushes to refillable soap dispensers, create a bathroom that&apos;s both beautiful and responsible.</p>
                <Link href="/bathroom" className="home-btn">Shop Bathroom</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="home-brands">
          <div className="container">
            <div className="home-section-header">
              <span className="home-tag">Verified Brands</span>
              <h2>Featured Partners</h2>
              <p>Companies committed to real, measurable sustainability</p>
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

        {/* More Categories */}
        <section className="home-more-categories">
          <div className="container">
            <div className="home-section-header">
              <span className="home-tag">Explore More</span>
              <h2>More Spaces</h2>
            </div>

            <div className="grid grid-4">
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
