'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import PillButton from '@/components/shared/PillButton'
import SocialLinks from '@/components/shared/SocialLinks'

const heroHeadings = [
  { line1: 'Take Your', line2: 'Business', line3: 'Further.' },
  { line1: 'Grow Your', line2: 'Business', line3: 'Faster.' },
  { line1: 'Connect With', line2: 'More', line3: 'Customers.' },
  { line1: 'Build Your', line2: 'Digital', line3: 'Presence.' },
]

const heroImages = {
  on: '/Image (7).png',
  off: '/Image (8).png',
}

const brandsList = [
  'My Nursery',
  'My Vet',
  'My Carer',
  'My Tenant',
  'My Landlord',
  'My Solicitor',
  'My Accountant',
  'My Importer',
  'My Exporter',
  'My Surveyor',
  'My Architect',
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)
  const [desktopBrandsOpen, setDesktopBrandsOpen] = useState(false)
  const [isToggleOn, setIsToggleOn] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((curr) => {
        const next = (curr + 1) % heroHeadings.length
        setPrevSlide(curr)
        setIsTransitioning(true)
        return next
      })
    }, 3600)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isTransitioning) return

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false)
      setPrevSlide(null)
    }, 600)

    return () => clearTimeout(transitionTimer)
  }, [isTransitioning, currentSlide])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.hero-header')) {
        setMobileMenuOpen(false)
        setMobileBrandsOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setMobileBrandsOpen(false)
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }, 10)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <div className="hero-wrapper">
      <section className="hero-card">
        <header className="hero-header">
          <div className="header-left">
            <Logo />
          </div>

          <nav className="header-nav">
            <a href="#home" className="nav-link-item active">Home</a>
            <a href="#about" className="nav-link-item">About Us</a>
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setDesktopBrandsOpen(true)}
              onMouseLeave={() => setDesktopBrandsOpen(false)}
            >
              <button
                type="button"
                className="nav-link-item nav-dropdown-trigger inline-flex items-center gap-1.5"
                onClick={() => setDesktopBrandsOpen(!desktopBrandsOpen)}
                aria-expanded={desktopBrandsOpen}
              >
                <span>My Brands</span>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 10 7"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${desktopBrandsOpen ? 'rotate-180 text-[#14cfcf]' : 'opacity-85'}`}
                >
                  <path d="M5 7L0.669873 0.25L9.33013 0.25L5 7Z" />
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${desktopBrandsOpen ? 'is-open' : ''}`}>
                {brandsList.map((brand) => (
                  <a
                    key={brand}
                    href="#platforms"
                    className="nav-dropdown-item"
                    onClick={() => setDesktopBrandsOpen(false)}
                  >
                    <span className="dropdown-dot">•</span>
                    <span>{brand}</span>
                  </a>
                ))}
              </div>
            </div>
            <a href="#contact" className="nav-link-item">Legal Notice</a>
            <a href="#contact" className="nav-link-item">Privacy Policy</a>
            <a href="#contact" className="nav-link-item">Contact Us</a>
          </nav>

          <div className="header-right">
            <div className="header-cta-desktop">
              <PillButton>Let&apos;s Talk</PillButton>
            </div>
            <button
              type="button"
              className="header-mobile-toggle"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen((prev) => {
                  const next = !prev
                  if (!next) setMobileBrandsOpen(false)
                  return next
                })
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-nav-menu">
              <a onClick={() => setMobileMenuOpen(false)} href="#home" className="nav-link-item active text-base py-1">Home</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="nav-link-item text-base py-1">About Us</a>

              <div className="mobile-dropdown-group">
                <button
                  type="button"
                  className={`nav-link-item mobile-dropdown-trigger text-base py-1 ${mobileBrandsOpen ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setMobileBrandsOpen((prev) => !prev)
                  }}
                  aria-expanded={mobileBrandsOpen}
                >
                  <span>My Brands</span>
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="currentColor"
                    className={`transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-180 text-[#14cfcf]' : 'opacity-85'}`}
                  >
                    <path d="M5 7L0.669873 0.25L9.33013 0.25L5 7Z" />
                  </svg>
                </button>
                {mobileBrandsOpen && (
                  <div className="mobile-dropdown-list">
                    {brandsList.map((brand) => (
                      <a
                        key={brand}
                        onClick={(e) => {
                          e.stopPropagation()
                          setMobileMenuOpen(false)
                          setMobileBrandsOpen(false)
                        }}
                        href="#platforms"
                        className="mobile-dropdown-item"
                      >
                        <span className="dropdown-dot">•</span>
                        <span>{brand}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="nav-link-item text-base py-1">Legal Notice</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="nav-link-item text-base py-1">Privacy Policy</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="nav-link-item text-base py-1">Contact Us</a>
              <div className="pt-2" onClick={() => setMobileMenuOpen(false)}>
                <PillButton>Let&apos;s Talk</PillButton>
              </div>
            </div>
          )}
        </header>

        <div className="hero-stage" id="home">
          <div className="hero-overlap-image">
            <img
              key={isToggleOn ? heroImages.on : heroImages.off}
              className="hero-overlap-photo"
              src={isToggleOn ? heroImages.on : heroImages.off}
              alt="Jump Media professional team"
            />
          </div>

          <div className="hero-foreground-content">
            <div className="hero-main-heading">
              <div className="hero-heading-row1">
                <span className="hero-heading-word hero-heading-eleven">Eleven</span>
                <span className="hero-toggle-wrap">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isToggleOn}
                    aria-label="Toggle hero switch"
                    className={`hero-toggle-btn ${isToggleOn ? 'is-on' : 'is-off'}`}
                    onClick={() => setIsToggleOn((prev) => !prev)}
                  >
                    <span className="hero-toggle-thumb" aria-hidden="true" />
                  </button>
                </span>
                <span className="hero-heading-word">Ways</span>
              </div>
              <div className="hero-heading-row2">
                <h1 className="hero-heading-word">To Be Found</h1>
              </div>
            </div>

            <div className="hero-subcontent-wrap">
              <div className="hero-subcontent-row">
                <div className="hero-accent-block">
                  <div
                    className="hero-accent-line"
                    role="progressbar"
                    aria-valuenow={currentSlide + 1}
                    aria-valuemin={1}
                    aria-valuemax={heroHeadings.length}
                    aria-label="Heading slider progress"
                  >
                    <div className="accent-line-track"></div>
                    <span
                      className="accent-line-teal"
                      style={{ transform: `translateX(${currentSlide * 26}px)` }}
                    ></span>
                  </div>
                  <div
                    className="hero-accent-slider-viewport"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {heroHeadings.map((heading, index) => {
                      let animClass = 'slide-hidden'
                      if (index === currentSlide) {
                        animClass = isTransitioning ? 'slide-enter-up' : 'slide-active'
                      } else if (index === prevSlide) {
                        animClass = 'slide-exit-up'
                      }

                      return (
                        <p
                          key={heading.line2}
                          className={`hero-accent-text hero-accent-slide ${animClass}`}
                          aria-hidden={index !== currentSlide}
                        >
                          {heading.line1}
                          <br />
                          {heading.line2}
                          <br />
                          {heading.line3}
                        </p>
                      )
                    })}
                  </div>
                </div>
                <div className="hero-cta-block">
                  <p className="hero-cta-desc">
                    Jump Media creates powerful digital platforms that connect businesses, professionals and customers across the UK.
                  </p>
                  <PillButton>Talk To Us</PillButton>
                </div>
              </div>
            </div>
          </div>

          <SocialLinks className="hero-social-list" />
        </div>
      </section>
    </div>
  )
}
