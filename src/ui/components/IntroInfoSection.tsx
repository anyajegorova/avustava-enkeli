import CleaningLady from '../../assets/images/cleaning-lady.webp'
import '../styles/IntroInfoSection.css'
import Reveal from '../../reveal_components/Reveal'

function IntroInfoSection() {
    return (
        <section className='intro-info-section'>
            <div className='info-section-container'>
                <Reveal>
                    <h1>Siivous- ja avustajapalvelut kotitalouksille Vantaalla</h1>
                    <p>Arjen kiireet voivat joskus tuntua ylitsepääsemättömiltä, mutta me olemme täällä auttamassa! Tarjoamme ammattitaitoisia siivous- ja avustajapalveluja, jotka tekevät elämästäsi helpompaa ja mukavampaa. Olemme paikallinen yritys, ja meiltä saat henkilökohtaista ja joustavaa palvelua juuri sinun tarpeisiisi.</p>
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
