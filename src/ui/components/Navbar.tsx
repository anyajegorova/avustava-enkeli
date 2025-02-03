import React from 'react'
import './Navbar.css'
import AvustavaEnkeliLogo from '../../assets/logos/avustava-enkeli-logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={AvustavaEnkeliLogo} alt="Avustava Enkeli Logo" className="navbar-logo" />
      <span className="navbar-text">Avustava Enkeli</span>
    </div>
  )
}

export default Navbar
