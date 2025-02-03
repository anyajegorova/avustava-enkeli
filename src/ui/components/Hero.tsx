import React from 'react'
import './Hero.css'
import CustomButton from './CustomButton'
import WomanCleaner from '../../assets/images/woman-cleaner.png'

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={WomanCleaner} alt="Cleaning Supplies" className="hero-image" />
      <div className="hero-text">
        <h1>Kotisiivous: alk.19,80€/tunti</h1>
        <p>Luotettavia ja laadukkaita siivous- ja avustajapalveluita</p>
        <div style={{ marginTop: '20px' }}>
          <CustomButton text="Ota yhteyttä" onClick={() => console.log('Clicked')}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
