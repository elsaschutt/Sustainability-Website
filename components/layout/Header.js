import Link from 'next/link'
import ShopMegaMenu from './ShopMegaMenu'

export default function Header() {
  return (
    <header id="header">
      <div className="header-main">
        <div className="header-container">
          <Link href="/" className="logo">THE GREEN SWAP</Link>
          <nav className="primary-nav">
            <ul>
              <ShopMegaMenu />
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
