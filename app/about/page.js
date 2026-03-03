import Image from 'next/image'
import '@/styles/main.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About | Sustainable Living',
  description: 'Building a community dedicated to sustainable living and conscious consumption',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-hero" style={{ height: '500px' }}>
          <Image
            src="/images/outcove.jpeg"
            alt="Our Mission"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="page-hero-overlay" />
          <div className="page-hero-content" style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '56px' }}>About Us</h1>
            <p style={{ fontSize: '18px' }}>Building a community dedicated to sustainable living and conscious consumption</p>
          </div>
        </div>

        <section className="section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
          <div className="spotlight-grid" style={{ marginBottom: '80px' }}>
            <div className="spotlight-content">
              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>About Me</h3>
              <p>Growing up, I was always passionate about the environment. As I began to grow more independently in college, I began to confront the wastefulness of everyday life. Studying environmental studies, I shared with my peers the overwhelming feeling of helplessness around the environmental crisis that renders most people feeling defeated.</p>
              <p>However, all of the friends, family, and classmates wanted to take action but simply did not know where to start. They often didn&apos;t have the motivation to seek out sustainable products and alternatives even though they cared! The inaccessibility of engaging in the environmental crisis was what inspired me to start a google doc called &quot;The Ultimate Guide to Sustainability.&quot; Meant for friends and family, the document soon became too long with brands and organizations I found who were working tirelessly to provide these options.</p>
              <p>Finally, to return to the goal of making sustainability an easy and simple option to choose, I developed this website. I aim to collect and compile resources so that you don&apos;t have to decide between an unfulfilling hunt for a sustainable option or a thirty-second amazon search.</p>
            </div>
            <Image
              src="/images/about/sweatersolo.jpeg"
              alt="Elsa"
              width={500}
              height={500}
              className="spotlight-image"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto 80px auto' }}>
            <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              As you meander through this website which I hope you do (take your time and explore the hidden gems), I want you to take away a couple of things.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              <strong>First</strong>, YOU, yes YOU are extraordinary in your power—don&apos;t waste it away! Empower yourself by learning. When moving through life, let constant curiosity criticize your own and others behavior and always seek answers with an open mind. We do have a choice about what we buy, and often it takes one search to find an environmentally friendly product or solution. Stay curious!
            </p>

            <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              <strong>Second</strong>, become competitive. Approach sustainability as if it is a game that you are dying to win and can&apos;t bear to lose. Let competitiveness add a level of urgency so your actions become significant.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              <strong>Lastly</strong>, aim to become 1%-5% more aware and thoughtful each day. The incremental changes will build up, so start small. Swap your toilet paper, begin examining your kitchen, or investigate the sustainable organizations and services local to you and take advantage. There are indeed lots of ways for us to make a difference. Sometimes it requires us to be proactive and sacrifice the convenience of clicking on Amazon.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--color-gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              It starts with you and the courage to face uncomfortable truths in the impact of our actions.
            </p>

            <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-text)', fontStyle: 'italic' }}>— Elsa</p>
          </div>

          <div style={{ background: 'var(--color-gray-bg)', padding: '60px', textAlign: 'center', margin: '60px 0' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>Our Values</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '40px' }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Transparency</h4>
                <p style={{ fontSize: '14px', color: 'var(--color-gray-text)' }}>Honest information about environmental impact</p>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Accessibility</h4>
                <p style={{ fontSize: '14px', color: 'var(--color-gray-text)' }}>Making sustainability achievable for everyone</p>
              </div>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Community</h4>
                <p style={{ fontSize: '14px', color: 'var(--color-gray-text)' }}>Building connections among conscious consumers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
