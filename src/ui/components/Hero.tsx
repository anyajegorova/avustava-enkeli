import '../styles/Hero.css'
import CustomButton from './CustomButton'
import CleaningLady2 from '../../assets/images/cleaning-lady2.webp'
import Reveal from '../../reveal_components/Reveal'
import { useTranslation } from 'react-i18next'

interface HeroProps {
  scrollToContactForm: () => void;
  scrollToServices: () => void;
}

const Hero = ({ scrollToContactForm, scrollToServices }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${CleaningLady2})` }}>
      <div className="hero-overlay">
        <div className="hero-text">

          <Reveal>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <CustomButton text={t('hero.contact_button')} onClick={scrollToContactForm} />
              <CustomButton text={t('hero.learn_more_button')} onClick={scrollToServices} filled={false} />
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}

export default Hero
