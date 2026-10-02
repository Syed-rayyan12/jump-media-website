'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Check, ChevronDown, Mail, MapPin, Menu, Phone, Star, X } from 'lucide-react'

const heroHeadings = [
  { line1: 'Take Your', line2: 'Business', line3: 'Further.' },
  { line1: 'Grow Your', line2: 'Business', line3: 'Faster.' },
  { line1: 'Connect With', line2: 'More', line3: 'Customers.' },
  { line1: 'Build Your', line2: 'Digital', line3: 'Presence.' },
]


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

const platformList = [
  {
    num: '01',
    name: 'MY NURSERY',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Live',
    image: '/Image%20(9).png',
  },
  {
    num: '02',
    name: 'MY VET',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Live',
    image: '/Image%20(10).png',
  },
  {
    num: '03',
    name: 'MY CARER',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(11).png',
  },
  {
    num: '04',
    name: 'MY TENANT',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(12).png',
  },
  {
    num: '05',
    name: 'MY LANDLORD',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(13).png',
  },
  {
    num: '06',
    name: 'MY SOLICITOR',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(14).png',
  },
  {
    num: '07',
    name: 'MY ACCOUNTANT',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(15).png',
  },
  {
    num: '08',
    name: 'MY IMPORTER',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    status: 'Coming Soon',
    image: '/Image%20(16).png',
  },
]
const values = ['DISCOVER', 'CONNECT', 'GROW', 'FIND', 'TRUST', 'EXPLORE']

function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`logo-link inline-flex items-center select-none ${className}`} aria-label="Jump Media Home">
      <img
        src="/jump-media-logo.png"
        alt="Jump Media"
        className="brand-logo-img"
      />
    </a>
  )
}

function PillButton({ children, href = '#contact' }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="pill-btn">
      <span className="pill-btn-text">{children}</span>
      <span className="pill-btn-icon">
        <ArrowUpRight size={16} strokeWidth={2.5} />
      </span>
    </a>
  )
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)
  const [desktopBrandsOpen, setDesktopBrandsOpen] = useState(false)

  // Interactive hero toggle switch state
  const [isToggleOn, setIsToggleOn] = useState(true)

  // Animated heading slider states
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
    if (isTransitioning) {
      const transitionTimer = setTimeout(() => {
        setIsTransitioning(false)
        setPrevSlide(null)
      }, 600)
      return () => clearTimeout(transitionTimer)
    }
  }, [isTransitioning, currentSlide])

  // Close mobile navigation on outside click or Escape key
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
    <main>
      <div className="hero-wrapper">
        <section className="hero-card">
          {/* Header */}
          <header className="hero-header">
            {/* Left Logo */}
            <div className="header-left">
              <Logo />
            </div>

            {/* Center Navigation Links */}
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

            {/* Right Action Button & Mobile Hamburger */}
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

            {/* Mobile Navigation Drawer (Absolute Overlay) */}
            {mobileMenuOpen && (
              <div className="mobile-nav-menu">
                <a onClick={() => setMobileMenuOpen(false)} href="#home" className="nav-link-item active text-base py-1">Home</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#about" className="nav-link-item text-base py-1">About Us</a>

                {/* Mobile My Brands dropdown */}
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

          {/* Hero Content Stage with Overlapping Layout */}
          <div className="hero-stage" id="home">
            {/* Background Hero Image Container - Positioned to sit under the right portion of the heading */}
            <div className="hero-overlap-image">
              <img
                className="hero-overlap-photo"
                src="/Image (7).png"
                alt="Jump Media professional team"
              />
            </div>

            {/* Foreground Content Layer - Sitting on top of the image container with z-index */}
            <div className="hero-foreground-content">
              {/* Main Heading Layer: Spans wide across so 'Ways' and 'To Be Found' overlay the image */}
              <div className="hero-main-heading">
                <div className="hero-heading-row1">
                  <span className="hero-heading-word">Eleven</span>
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

              {/* Sub-Content Block - Kept on the left side below 'Eleven' */}
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
                            key={index}
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

            {/* Social Media Links - Anchored to bottom-left of hero stage */}
            <div className="hero-social-list">
              <a href="#" className="hero-social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="X (Twitter)">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="YouTube">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="15" x="2" y="4.5" rx="4" />
                  <polygon points="10 8.5 15 12 10 15.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2: How We Work */}
      <section className="how-we-work-section" id="about">
        <div className="how-we-work-container">
          <div className="how-we-work-header">
            <div>
              <p className="section-eyebrow">How We Work</p>
              <h2 className="how-we-work-heading">
                We Build Platforms People<br />Actually Use.
              </h2>
            </div>
            <div>
              <p className="how-we-work-desc">
                We don&apos;t believe a directory should simply be a database of businesses. Each Jump<br className="desc-br" />
                Media platform is built around a specific industry, creating a focused environment<br className="desc-br" />
                where people can discover, compare and connect with relevant businesses.
              </p>
            </div>
          </div>

          <div className="how-we-work-body">
            <div className="how-photo-wrap">
              <img
                src="/Image (8).png"
                alt="Professional working on laptop"
                className="how-photo"
              />
            </div>
            <div className="how-grid">
              <div className="how-item">
                <span className="how-num">01</span>
                <h3 className="how-title">Specialist</h3>
                <p className="how-desc">One platform. One industry. A clear purpose.</p>
              </div>
              <div className="how-item">
                <span className="how-num">02</span>
                <h3 className="how-title">Editorial</h3>
                <p className="how-desc">Useful content that helps people make informed decisions.</p>
              </div>
              <div className="how-item">
                <span className="how-num">03</span>
                <h3 className="how-title">Verified</h3>
                <p className="how-desc">Reliable business information people can trust.</p>
              </div>
              <div className="how-item">
                <span className="how-num">04</span>
                <h3 className="how-title">Organic</h3>
                <p className="how-desc">Audiences built through publishing, search and genuine discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Crossing Values Ribbon */}
      <section className="ribbon-crossover-wrap" aria-label="Our values">
        {/* White Angled Ribbon (Behind) */}
        <div className="ribbon-track-white">
          <div className="ribbon-inner">
            {[...values, ...values, ...values, ...values].map((value, i) => (
              <span key={`white-${value}-${i}`}>{value}</span>
            ))}
          </div>
        </div>
        {/* Teal Angled Ribbon (In Front) */}
        <div className="ribbon-track-teal">
          <div className="ribbon-inner-reverse">
            {[...values, ...values, ...values, ...values].map((value, i) => (
              <span key={`teal-${value}-${i}`}>{value}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="platforms" id="platforms">
        <img
          src="/Vector.png"
          alt=""
          aria-hidden="true"
          className="platforms-vector platforms-vector-tl"
        />
        <img
          src="/Vector (1).png"
          alt=""
          aria-hidden="true"
          className="platforms-vector platforms-vector-br"
        />
        <div className="container platforms-container">
          <div className="section-heading">
            <div>
              <p className="platforms-label">Our Platforms</p>
              <h2>
                Eleven Platforms. Eleven<br />
                Industries. One Media Group.
              </h2>
            </div>
            <div className="section-heading-right">
              <p>
                Explore our specialist platforms, each built to connect people with the businesses and professionals they need.
              </p>
              <PillButton>Our Platforms</PillButton>
            </div>
          </div>
          <div className="platform-grid">
            {platformList.map((item) => (
              <article className="platform-card" key={item.num}>
                <div className="card-top">
                  <div className="card-header-left">
                    <span className="number-circle">{item.num}</span>
                    <div className="card-titles">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <span className={`status-badge ${item.status === 'Live' ? 'status-live' : 'status-soon'}`}>
                    {item.status === 'Live' && <span className="status-live-dot"></span>}
                    {item.status}
                  </span>
                </div>
                <div className="card-image-wrap">
                  <img src={item.image} alt={`${item.name} platform`} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats container">
        <div className="stats-copy">
          <p className="stats-eyebrow">What is Jump Media</p>
          <h2>
            A Media Group That Happens To<br className="stats-heading-br" />
            Run Directories — Not A Directory<br className="stats-heading-br" />
            That Calls Itself A Media Group.
          </h2>
        </div>
        <div className="stats-side">
          <p>
            We own and operate eleven business platforms, each one dedicated to a single sector. Every platform has its own editorial voice, its own verification standard and its own audience built through publishing rather than paid acquisition.
          </p>
          <p>
            For the people searching, that means answers instead of adverts. For the businesses listed, it means being found by someone who was already looking for exactly what they do.
          </p>
        </div>
        <div className="stat-grid">
          {[
            ['11', 'Specialist platforms'],
            ['80,400', 'Verified listings'],
            ['2.4m', 'Monthly searches'],
            ['2016', 'Founded'],
          ].map(([value, label]) => (
            <div key={label} className="stat-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Testimonials Full-Width Bidirectional Carousel */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <p className="section-eyebrow centered">Testimonial</p>
          <h2 className="testimonials-title">Trusted By Businesses Across Our Network.</h2>
          <p className="testimonials-sub">
            <span className="testimonial-desc-line1">From specialist businesses to industry professionals, our platforms help businesses get discovered by the people</span><br className="testimonial-desc-br" />
            <span className="testimonial-desc-line2">actively looking for their services.</span>
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          {/* Row 1: Slides to the Right */}
          <div className="testimonials-track-row1">
            {[
              {
                quote: 'Jump Media has helped us put our business in front of a highly relevant audience. The platform is professional, easy to use and genuinely useful.',
                author: 'Business Owner',
                role: 'My Accountant',
              },
              {
                quote: 'A great platform for getting our business discovered. The quality of the directory and the audience makes a real difference.',
                author: 'Business Owner',
                role: 'My Architect',
              },
              {
                quote: 'Being listed on a specialist platform makes much more sense for our business than being lost in a general directory.',
                author: 'Business Owner',
                role: 'My Vet',
              },
              {
                quote: 'Jump Media has helped us reach an audience we never could have found alone. Invaluable for our brand.',
                author: 'Director',
                role: 'My Solicitor',
              },
              {
                quote: 'Jump Media has helped us put our business in front of a highly relevant audience. The platform is professional, easy to use and genuinely useful.',
                author: 'Business Owner',
                role: 'My Accountant',
              },
              {
                quote: 'A great platform for getting our business discovered. The quality of the directory and the audience makes a real difference.',
                author: 'Business Owner',
                role: 'My Architect',
              },
              {
                quote: 'Being listed on a specialist platform makes much more sense for our business than being lost in a general directory.',
                author: 'Business Owner',
                role: 'My Vet',
              },
              {
                quote: 'Jump Media has helped us reach an audience we never could have found alone. Invaluable for our brand.',
                author: 'Director',
                role: 'My Solicitor',
              },
            ].map((item, idx) => (
              <article className="figma-testimonial-card" key={`t1-${idx}`}>
                <div className="testimonial-card-header">
                  <div className="testimonial-stars">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} size={13} fill="#18a9a2" stroke="#18a9a2" />
                    ))}
                    <Star size={13} fill="none" stroke="#18a9a2" strokeWidth={1.5} />
                  </div>
                  <div className="testimonial-quote-icon">
                    <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#18a9a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 14c0-3.5 2-6.5 6-8l1 1.5C7.5 9 6.5 10.5 6.5 12H10v7H3v-5zM14 14c0-3.5 2-6.5 6-8l1 1.5C18.5 9 17.5 10.5 17.5 12H21v7h-7v-5z" />
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote-text">&quot;{item.quote}&quot;</p>
                <div>
                  <span className="testimonial-author-name">{item.author}</span>
                  <span className="testimonial-author-role">{item.role}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Row 2: Slides to the Left */}
          <div className="testimonials-track-row2">
            {[
              {
                quote: 'The team understands our industry and helped us reach the right local customers with minimum fuss.',
                author: 'Business Owner',
                role: 'My Nursery',
              },
              {
                quote: 'A trusted, well-presented platform that makes our business easier to find by prospective clients.',
                author: 'Director',
                role: 'My Dentist',
              },
              {
                quote: 'Our profile gives new customers confidence before they even pick up the phone. Essential directory presence.',
                author: 'Business Owner',
                role: 'My Tenant',
              },
              {
                quote: 'Jump Media has helped our business be found by the right people at the right time across the region.',
                author: 'Business Owner',
                role: 'My Importer',
              },
              {
                quote: 'The team understands our industry and helped us reach the right local customers with minimum fuss.',
                author: 'Business Owner',
                role: 'My Nursery',
              },
              {
                quote: 'A trusted, well-presented platform that makes our business easier to find by prospective clients.',
                author: 'Director',
                role: 'My Dentist',
              },
              {
                quote: 'Our profile gives new customers confidence before they even pick up the phone. Essential directory presence.',
                author: 'Business Owner',
                role: 'My Tenant',
              },
              {
                quote: 'Jump Media has helped our business be found by the right people at the right time across the region.',
                author: 'Business Owner',
                role: 'My Importer',
              },
            ].map((item, idx) => (
              <article className="figma-testimonial-card" key={`t2-${idx}`}>
                <div className="testimonial-card-header">
                  <div className="testimonial-stars">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} size={13} fill="#18a9a2" stroke="#18a9a2" />
                    ))}
                    <Star size={13} fill="none" stroke="#18a9a2" strokeWidth={1.5} />
                  </div>
                  <div className="testimonial-quote-icon">
                    <svg width="22" height="18" viewBox="0 0 24 20" fill="none" stroke="#18a9a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 14c0-3.5 2-6.5 6-8l1 1.5C7.5 9 6.5 10.5 6.5 12H10v7H3v-5zM14 14c0-3.5 2-6.5 6-8l1 1.5C18.5 9 17.5 10.5 17.5 12H21v7h-7v-5z" />
                    </svg>
                  </div>
                </div>
                <p className="testimonial-quote-text">&quot;{item.quote}&quot;</p>
                <div>
                  <span className="testimonial-author-name">{item.author}</span>
                  <span className="testimonial-author-role">{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container cta-inner">
          <p className="cta-eyebrow">Our Platforms</p>
          <h2>Discover The Platforms Behind Jump Media.</h2>
          <p className="cta-desc">
            From nurseries and vets to solicitors, accountants, architects and more — explore our growing network of specialist business platforms.
          </p>
          <PillButton>Explore My Brands</PillButton>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-container footer-grid">
          {/* Column 1: Brand & Info */}
          <div className="footer-col-brand">
            <Logo className="footer-logo" />
            <p className="footer-brand-desc">
              Angels on the Ground is dedicated to bringing food, essential support and compassion to people and vulnerable street animals in need.
            </p>
            <div className="footer-social-list">
              <a href="#" className="hero-social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="X (Twitter)">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="YouTube">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="15" x="2" y="4.5" rx="4" />
                  <polygon points="10 8.5 15 12 10 15.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="hero-social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#home"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">Home</span></a></li>
              <li><a href="#about"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">About Us</span></a></li>
              <li><a href="#platforms"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">My Brands</span></a></li>
              <li><a href="#contact"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">Get Involved</span></a></li>
              <li><a href="#contact"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">Contact Us</span></a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links-list">
              <li><a href="#contact"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">Legal Notice</span></a></li>
              <li><a href="#contact"><span className="footer-arrow">&gt;</span> <span className="footer-link-text">Privacy Policy</span></a></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <ul className="footer-contact-list">
              <li>
                <Mail size={17} className="footer-contact-icon" />
                <a href="mailto:hello@jump-media.co.uk">hello@jump-media.co.uk</a>
              </li>
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
                <span>Shawbriggs, Barrow Road,</span>
              </li>
              <li>
                <Phone size={17} className="footer-contact-icon" />
                <a href="tel:+4401482688508">+44 01482 688508</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-container footer-bottom">
          <p className="copyright-text">
            © 2026 <span className="copyright-brand">Jump Media.</span> All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
