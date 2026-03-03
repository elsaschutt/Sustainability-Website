'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/images/greenery.jpeg',
    alt: 'Sustainable greenery',
    tag: 'Discover Conscious Living',
    title: 'Uncover the Art of Sustainability',
    description: 'Transform your space with eco-friendly choices that matter',
    buttonText: 'Shop Collection',
    buttonLink: '/shop',
  },
  {
    image: '/images/treesaplings.jpeg',
    alt: 'Tree saplings',
    tag: 'Plant the Future',
    title: 'Growth Through Conscious Choices',
    description: 'Every purchase plants seeds for a sustainable tomorrow',
    buttonText: 'Explore Now',
    buttonLink: '/shop',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const changeSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-tag">{slide.tag}</div>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <Link href={slide.buttonLink} className="btn">
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      <div className="carousel-controls">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
