'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const categories = [
  { href: '/kitchen', title: 'Kitchen', description: 'Sustainable essentials' },
  { href: '/bathroom', title: 'Bathroom', description: 'Zero-waste care' },
  { href: '/bedroom', title: 'Bedroom', description: 'Organic comfort' },
  { href: '/clothing', title: 'Clothing', description: 'Ethical fashion' },
  { href: '/garden', title: 'Garden', description: 'Outdoor living' },
  { href: '/furniture', title: 'Furniture', description: 'Sustainable design' },
  { href: '/daily-life', title: 'Daily Life', description: 'Everyday essentials' },
  { href: '/waste', title: 'Waste Solutions', description: 'Zero-waste living' },
]

export default function ShopMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const closeTimerRef = useRef(null)
  const wrapperRef = useRef(null)

  // Detect mobile at mount and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 968)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  // Close when clicking outside (mobile)
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

  // Hover handlers — with small delay so the menu stays open when moving cursor
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

  // Mobile tap handler
  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  // Focus handling for keyboard navigation
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
        <span className="shop-menu-caret" aria-hidden="true">▾</span>
      </Link>

      <div
        className="shop-mega-menu"
        role="menu"
        aria-label="Shop categories"
        aria-hidden={!isOpen}
      >
        <div className="shop-mega-inner">
          <div className="shop-mega-heading">
            <span className="shop-mega-label">Shop by Space</span>
            <h3>Discover Sustainable Living</h3>
          </div>
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
                  <span className="shop-mega-item-title">{cat.title}</span>
                  <span className="shop-mega-item-desc">{cat.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="shop-mega-footer">
            <Link
              href="/shop"
              className="shop-mega-viewall"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              View all categories →
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}
