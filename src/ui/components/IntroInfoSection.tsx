import CleaningLady from '../../assets/images/cleaning-lady.webp'
import '../styles/IntroInfoSection.css'
import Reveal from '../../reveal_components/Reveal'
import { useTranslation } from 'react-i18next'

function IntroInfoSection() {
    const { t } = useTranslation();

    return (
        <section className='intro-info-section'>
            <div className='info-section-container'>
                <Reveal>
                    <h1>{t('intro_info.title')}</h1>
                    <p>{t('intro_info.description')}</p>
                </Reveal>
            </div>
            <div className='info-section-image-container'>
                <Reveal>
                    <img src={CleaningLady} alt="Image of a lady cleaning" className="info-section-image" />
                </Reveal>
            </div>
        </section>
    )
}

export default IntroInfoSection
