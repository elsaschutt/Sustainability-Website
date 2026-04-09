import Image from 'next/image'
import '@/styles/main.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Resources | The Green Swap',
  description: 'Learn, explore, and deepen your sustainable living journey',
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero">
          <Image
            src="/images/moss on tree.jpeg"
            alt="Sustainable Resources"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="page-hero-overlay" />
          <div className="page-hero-content">
            <h1>Sustainable Resources</h1>
            <p>Learn, explore, and deepen your sustainable living journey</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>Explore Our Resources</h2>
              <p>Curated content to support your sustainable lifestyle</p>
            </div>

            <div className="grid grid-3">
              <div className="brand-card">
                <Image
                  src="/images/greenery.jpeg"
                  alt="Books"
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="brand-card-body">
                  <div className="brand-category">READING</div>
                  <h3>Books</h3>
                  <p>Curated reading list for sustainable living and environmental awareness</p>
                </div>
              </div>

              <div className="brand-card">
                <Image
                  src="/images/flower garden.jpeg"
                  alt="Podcasts"
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="brand-card-body">
                  <div className="brand-category">LISTENING</div>
                  <h3>Podcasts</h3>
                  <p>Listen and learn from sustainability experts and thought leaders</p>
                </div>
              </div>

              <div className="brand-card">
                <Image
                  src="/images/treesaplings.jpeg"
                  alt="Organizations"
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="brand-card-body">
                  <div className="brand-category">COMMUNITY</div>
                  <h3>Organizations</h3>
                  <p>Connect with environmental initiatives making a difference</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
