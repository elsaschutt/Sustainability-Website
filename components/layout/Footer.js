import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">THE GREEN SWAP</div>
            <p>We don't sell sustainability. We verify it. Our mission is to connect conscious consumers with verified sustainable products and resources.</p>
            <div className="footer-contact">
              <a href="tel:555-123-4567">Call: 555-123-4567</a>
              <a href="mailto:info@thegreenswap.com">Email: info@thegreenswap.com</a>
            </div>
          </div>

          <div>
            <h4>SHOP</h4>
            <ul className="footer-links">
              <li><Link href="/kitchen">Kitchen</Link></li>
              <li><Link href="/bathroom">Bathroom</Link></li>
              <li><Link href="/bedroom">Bedroom</Link></li>
              <li><Link href="/clothing">Clothing</Link></li>
            </ul>
          </div>

          <div>
            <h4>RESOURCES</h4>
            <ul className="footer-links">
              <li><Link href="/resources">All Resources</Link></li>
              <li><Link href="#">Installation Guides</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Sustainability Tips</Link></li>
            </ul>
          </div>

          <div>
            <h4>COMPANY</h4>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 The Green Swap. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
