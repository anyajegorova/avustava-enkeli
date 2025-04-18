import '../styles/Hero.css'
import CustomButton from './CustomButton'
import CleaningLady2 from '../../assets/images/cleaning-lady2.webp'
import Reveal from '../../reveal_components/Reveal'

interface HeroProps {
  scrollToContactForm: () => void;
  scrollToServices: () => void;
}

const Hero = ({ scrollToContactForm, scrollToServices }: HeroProps) => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${CleaningLady2})` }}>
      <div className="hero-overlay">
        <div className="hero-text">

          <Reveal>
            <h1>Kotisiivous: alk.41,50€/tunti</h1>
            <p>Luotettavia ja laadukkaita siivous- ja avustajapalveluita</p>
            <div className="hero-buttons">
              <CustomButton text="Ota yhteyttä" onClick={scrollToContactForm} />
              <CustomButton text="Lue lisää" onClick={scrollToServices} filled={false} />
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}

export default Hero
