'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const categories = [
  { href: '/kitchen', title: 'Kitchen' },
  { href: '/bathroom', title: 'Bathroom' },
  { href: '/bedroom', title: 'Bedroom' },
  { href: '/clothing', title: 'Clothing' },
  { href: '/garden', title: 'Garden' },
  { href: '/furniture', title: 'Furniture' },
  { href: '/daily-life', title: 'Daily Life' },
  { href: '/waste', title: 'Waste Solutions' },
]

export default function ShopMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const closeTimerRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 968)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen && isMobile) {
      document.addEventListener('click', onClickOutside)
    }
    return () => document.removeEventListener('click', onClickOutside)
  }, [isOpen, isMobile])

  const handleMouseEnter = () => {
    if (isMobile) return
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 150)
  }

  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  const handleFocus = () => {
    if (!isMobile) setIsOpen(true)
  }

  const handleBlur = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.relatedTarget)) {
      setIsOpen(false)
    }
  }

  return (
    <li
      ref={wrapperRef}
      className={`shop-menu-wrapper ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <Link
        href="/shop"
        className="shop-menu-trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={handleClick}
        onFocus={handleFocus}
      >
        Shop
      </Link>

      <div
        className="shop-mega-menu"
        role="menu"
        aria-label="Shop categories"
        aria-hidden={!isOpen}
      >
        <div className="shop-mega-inner">
          <ul className="shop-mega-grid">
            {categories.map((cat) => (
              <li key={cat.href} role="none">
                <Link
                  href={cat.href}
                  role="menuitem"
                  className="shop-mega-item"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
