import { Page } from '../App'
import heroImg from '../assets/hero.webp'
import truckImg from '../assets/truck.webp'
import houseBefore from '../assets/house_before.webp'
import houseAfter from '../assets/house_after.webp'
import lawnBefore from '../assets/lawn_before.webp'
import lawnAfter from '../assets/lawn_after.webp'
import landscapeBefore from '../assets/landscape_before.webp'
import landscapeAfter from '../assets/landscape_after.webp'
import sidewalkBefore from '../assets/sidewalk_before.webp'
import sidewalkAfter from '../assets/sidewalk_after.webp'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const services = [
  {
    title: 'Yard Maintenance',
    desc: 'Regular lawn care to keep your yard healthy, neat, and looking its best through every season.',
  },
  {
    title: 'One Time Cleanups',
    desc: 'One-time yard cleanups to clear out overgrowth, debris, and get your property back in shape fast.',
  },
  {
    title: 'Bush & Small Tree Trimming',
    desc: 'Precise trimming and shaping of bushes and small trees to keep your landscape clean and well-maintained.',
  },
  {
    title: 'Bark & Rock Spreading',
    desc: 'Professional bark and decorative rock installation to enhance curb appeal and reduce yard maintenance.',
  },
  {
    title: 'Irrigation',
    desc: 'Irrigation system installation and maintenance to keep your lawn and garden properly watered all year long.',
  },
]

const galleryPairs = [
  { before: houseBefore, after: houseAfter, label: 'Property' },
  { before: lawnBefore, after: lawnAfter, label: 'Lawn' },
  { before: landscapeBefore, after: landscapeAfter, label: 'Landscape' },
  { before: sidewalkBefore, after: sidewalkAfter, label: 'Sidewalk' },
]

export default function Home({ onNavigate }: HomeProps) {
  const navigate = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      {/* ── Hero + About Card ── */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">Salem, Oregon Landscaping</span>
          <h1 className="hero-title">Lou's Lawn Care</h1>
          <p className="hero-subtitle">Creating Beautiful Spaces</p>
          <button className="btn-hero" onClick={() => navigate('contact')}>
            Get a Free Estimate
          </button>
        </div>

        <div className="hero-about-wrap">
          <div className="about-card">
            <div className="about-card-image">
              <img src={truckImg} alt="Landscaping work by Lou's Lawn Care" />
            </div>
            <div className="about-card-text">
              <span className="section-eyebrow">Salem, Oregon Landscaping</span>
              <h2>
                About <strong>Lou's</strong> Lawn Care
              </h2>
              <p>
                Lou's Lawn Care is a family-owned landscaping service with a wide range of
                experience serving Salem and the surrounding areas.
              </p>
              <p>
                Our experienced and dedicated team does the job right the first time —
                professionally, safely, and with the quality you need and deserve.
              </p>
              <button className="btn-dark" onClick={() => navigate('contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section--white">
        <div className="container">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Contact us for a free estimate. Serving Salem and surrounding areas.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-card-accent" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section section--gray">
        <div className="container">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Before &amp; After</h2>
          <p className="section-subtitle">See the difference we make.</p>
          <div className="gallery-grid">
            {galleryPairs.map((pair) => (
              <div className="gallery-pair" key={pair.label}>
                <div className="gallery-img-wrap">
                  <img src={pair.before} alt={`${pair.label} before`} />
                  <span className="gallery-badge gallery-badge--before">Before</span>
                </div>
                <div className="gallery-img-wrap">
                  <img src={pair.after} alt={`${pair.label} after`} />
                  <span className="gallery-badge gallery-badge--after">After</span>
                </div>
                <p className="gallery-label">{pair.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your Outdoor Space?</h2>
          <p>Contact us today for a free estimate. Salem, OR and surrounding areas.</p>
          <button className="btn-white" onClick={() => navigate('contact')}>
            Get a Free Estimate
          </button>
        </div>
      </section>
    </main>
  )
}
