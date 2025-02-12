import React from 'react'
import '../styles/Hero.css'
import CustomButton from './CustomButton'
import CleaningLady2 from '../../assets/images/cleaning-lady2.webp'

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${CleaningLady2})` }}>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Kotisiivous: alk.29,80€/tunti</h1>
          <p>Luotettavia ja laadukkaita siivous- ja avustajapalveluita</p>
          <div className="hero-buttons">
            <CustomButton text="Ota yhteyttä" onClick={() => console.log('Clicked')} />
            <CustomButton text="Lue lisää" onClick={() => console.log('Clicked')} filled={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
