import { useState } from 'react'
import truck2Img from '../assets/truck2.webp'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '61c9bb71-9c88-435a-8247-cef1753e3e8d')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${truck2Img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Contact Us</h1>
          <p>Get in touch for a free estimate</p>
        </div>
      </section>

      {/* Contact Body */}
      <section className="section section--white">
        <div className="container contact-container">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2>Request a Free Estimate</h2>
            <p>Fill out the form and we will get back to you as soon as possible.</p>

            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">&#10003;</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="subject" value="New Estimate Request — Lou's Lawn Care" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={150}
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option>Yard Maintenance</option>
                    <option>One Time Cleanup</option>
                    <option>Bush / Small Tree Trimming</option>
                    <option>Bark & Rock Spreading</option>
                    <option>Irrigation</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    placeholder="Tell us about your project and location..."
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: 'red', fontSize: '0.9rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button type="submit" className="btn-primary btn-full" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="info-icon">@</div>
              <div>
                <strong>Email</strong>
                <a href="mailto:louslawncare210@gmail.com">louslawncare210@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9679;</div>
              <div>
                <strong>Service Area</strong>
                <span>Salem, Oregon and surrounding areas</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">&#9650;</div>
              <div>
                <strong>About Us</strong>
                <span>Family owned and operated</span>
              </div>
            </div>

            <div className="contact-social">
              <h3>Follow Us</h3>
              <a
                href="https://www.facebook.com/p/Lous-Lawn-Care-61555858341416/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/Louslawncare.llc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
