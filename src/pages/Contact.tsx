import { useState } from 'react'
import truck2Img from '../assets/truck2.jpg'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [field]: e.target.value })

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

            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">&#10003;</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={update('name')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={update('email')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" value={formData.service} onChange={update('service')}>
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
                    rows={5}
                    placeholder="Tell us about your project and location..."
                    value={formData.message}
                    onChange={update('message')}
                  />
                </div>
                <button type="submit" className="btn-primary btn-full">
                  Send Message
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
                href="https://instagram.com/Louslawncare.llc"
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
