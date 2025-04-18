import { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Hero from '../ui/components/Hero'
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
    const { t } = useTranslation();
    const contactFormRef = useRef<HTMLDivElement | null>(null)
    const servicesRef = useRef<HTMLDivElement | null>(null)

    const services = {
        siivouspalvelut: t("Cleaning Services", { returnObjects: true }),
        avustajapalvelut: t("Assistant Services", { returnObjects: true })
    };

    const scrollToContactForm = () => {
        contactFormRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToServices = () => {
        servicesRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <Hero scrollToContactForm={scrollToContactForm} scrollToServices={scrollToServices} />
            <div className='intro-info-section-container'>
                <IntroInfoSection />
            </div>

            <div className='services-container' ref={servicesRef}>
                <Title text={t("services_title")} />
                <NonCollapsible title={t("cleaning_services")} bulletPoints={services.siivouspalvelut} icon={<ClearOutlined />} />
                <NonCollapsible title={t("assistance_services")} bulletPoints={services.avustajapalvelut} icon={<HeartOutlined />} />
            </div>
            <div className='whychooseus-section-container'>
                <WhyChooseUs />
            </div>
            <div className='pricing-section-container'>
                <Pricing />
            </div>
            <div className='cleaning-duration-section-container'>
                <CleaningDuration />
            </div>

            <div className='contact-form-section-container' ref={contactFormRef}>
                <ContactForm2 />
            </div>
            <Footer />
        </div>
    )
}

export default Home
