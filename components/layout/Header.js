import Link from 'next/link'

export default function Header() {
  return (
    <header id="header">
      <div className="header-main">
        <div className="header-container">
          <div className="header-left">A Modern Home for Conscious Choices</div>
          <Link href="/" className="logo">SUSTAINABLE LIVING</Link>
          <div className="header-actions">
            <Link href="#">Account</Link>
            <Link href="#">Cart</Link>
            <Link href="#">Search</Link>
          </div>
        </div>
      </div>

      <div className="nav-main">
        <div className="nav-container">
          <nav>
            <ul>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
