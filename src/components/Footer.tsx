import { Page } from '../App'
import logoImg from '../assets/transparent_logo.png'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const navigate = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logoImg} alt="Lou's Lawn Care" className="footer-logo-img" />
          <p>Family owned landscaping in Salem, Oregon</p>
          <p>Serving Salem and surrounding areas</p>
        </div>

        <div className="footer-nav">
          <h4>Pages</h4>
          <button className="footer-link" onClick={() => navigate('home')}>Home</button>
          <button className="footer-link" onClick={() => navigate('contact')}>Contact</button>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a className="footer-link" href="mailto:lowslawncare210@gmail.com">
            lowslawncare210@gmail.com
          </a>
          <a
            className="footer-link"
            href="https://facebook.com/Lous-Lawn-Care"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="footer-link"
            href="https://instagram.com/Louslawncare.llc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lou's Lawn Care. All rights reserved.</p>
      </div>
    </footer>
  )
}
