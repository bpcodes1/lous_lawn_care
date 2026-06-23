import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'

export type Page = 'home' | 'contact'

function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="app">
      <Navbar currentPage={page} onNavigate={setPage} />
      {page === 'home' ? (
        <Home onNavigate={setPage} />
      ) : (
        <Contact />
      )}
      <Footer onNavigate={setPage} />
    </div>
  )
}

export default App
