import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BrandGrid from '@/components/scorecard/BrandGrid'
import '@/styles/main.css'
import '@/styles/scorecard.css'

export const metadata = {
  title: 'Brand Sustainability Scorecard | The Green Swap',
  description: 'Browse and compare sustainability ratings for eco-conscious brands. Filter by tier, certifications, and category.',
}

export default function ScorecardPage() {
  return (
    <>
      <Header />

      <section className="page-hero" style={{ height: '300px' }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--color-accent) 0%, #1f4329 100%)'
        }} />
        <div className="page-hero-content">
          <h1>Brand Scorecard</h1>
          <p>Research sustainability ratings for your favorite brands. Our scorecard evaluates companies on circular economy practices, transparency, certifications, and more.</p>
        </div>
      </section>

      <main>
        <BrandGrid />
      </main>

      <Footer />
    </>
  )
}
