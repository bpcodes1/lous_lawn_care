import { Page } from '../App'
import logoImg from '../assets/transparent_logo.png'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navigate = (page: Page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-logo" onClick={() => navigate('home')}>
          <img src={logoImg} alt="Lou's Lawn Care" className="navbar-logo-img" />
        </button>

        <div className="navbar-links">
          <button
            className={`nav-link${currentPage === 'home' ? ' active' : ''}`}
            onClick={() => navigate('home')}
          >
            Home
          </button>
          <button
            className={`nav-link${currentPage === 'contact' ? ' active' : ''}`}
            onClick={() => navigate('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
