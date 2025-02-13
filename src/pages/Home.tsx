import React from 'react'
import Hero from '../ui/components/Hero'
import Collapsible from '../ui/components/Collapsible'
import './Home.css'
import Title from '../ui/components/Title'
import { ClearOutlined, HeartOutlined } from '@ant-design/icons'
import WhyChooseUs from '../ui/components/WhyChooseUs'
import IntroInfoSection from '../ui/components/IntroInfoSection'
import Footer from '../ui/components/Footer'
import ContactForm2 from '../ui/components/ContactForm2'
import NonCollapsible from '../ui/components/NonCollapsible'
import Pricing from '../ui/components/Pricing'
import CleaningDuration from '../ui/components/CleaningDuration' // Import the new component

const Home = () => {
    const services = {
        'siivouspalvelut': [
            'Kotisiivous: ylläpitosiivoukset ja suursiivoukset',
            'Ikkunoiden pesu ja muuttosiivoukset',
            'Joustavat aikataulut, siivous silloin, kun sinulle sopii',
            'Käytössämme on laitteet ja pesurit jotka nopeuttavat palvelua huomattavasti ja tuovat sinulle säästöä siivouspalveluista',
        ],
        'avustajapalvelut': [
            'Kauppa- ja asiointiapu, ruoanlaitto',
            'Kodinhoitotyöt, kuten pyykkihuolto ja järjestely',
            'Juhlien järjestelyapu ja tarjoilijana toimiminen',
            'Muut erilaiset kotipalvelut ja henkilökohtaiset palvelut'
        ]
    }
    return (
        <div>
            <Hero />
            <div className='intro-info-section-container'>
                <IntroInfoSection />
            </div>

            <div className='services-container'>
                <Title text="Palvelumme" />
                {/* <Collapsible title="Siivouspalvelut" bulletPoints={services.siivouspalvelut} icon={<ClearOutlined />} />
                <Collapsible title="Avustajapalvelut" bulletPoints={services.avustajapalvelut} icon={<HeartOutlined />} /> */}
                <NonCollapsible title="Siivouspalvelut" bulletPoints={services.siivouspalvelut} icon={<ClearOutlined />} />
                <NonCollapsible title="Avustajapalvelut" bulletPoints={services.avustajapalvelut} icon={<HeartOutlined />} />
            </div>
            <Pricing />
            <CleaningDuration /> {/* Render the new component */}
            <WhyChooseUs />
            <div className='contact-form-section-container'>
                <ContactForm2 />
            </div>
            <Footer />
        </div>
    )
}

export default Home
