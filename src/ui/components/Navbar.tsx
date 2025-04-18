import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import AvustavaEnkeliLogo from '../../assets/logos/avustava-enkeli-logo.png'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-left">
        <img src={AvustavaEnkeliLogo} alt="Avustava Enkeli Logo" className="navbar-logo" />
        <span className="navbar-text">Avustava Enkeli</span>
      </div>
      <div className="navbar-language-switcher">
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Navbar
