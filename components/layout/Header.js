import Link from 'next/link'
import ShopMegaMenu from './ShopMegaMenu'

export default function Header() {
  return (
    <header id="header">
      <div className="header-main">
        <div className="header-container">
          <nav className="primary-nav nav-left">
            <ul>
              <ShopMegaMenu />
              <li><Link href="/scorecard">Scorecard</Link></li>
            </ul>
          </nav>
          <Link href="/" className="logo">THE GREEN SWAP</Link>
          <nav className="primary-nav nav-right">
            <ul>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
