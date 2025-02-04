import React from 'react'
import Hero from '../ui/components/Hero'
import Collapsible from '../ui/components/Collapsible'
import './Home.css'
import Title from '../ui/components/Title'
import PriceCalculator from '../ui/components/PriceCalculator'
import { ClearOutlined, HeartOutlined } from '@ant-design/icons'

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
            <div className='services-container'>
                <Title text="Palvelumme" />
                <Collapsible title="Siivouspalvelut" bulletPoints={services.siivouspalvelut} icon={<ClearOutlined />} />
                <Collapsible title="Avustajapalvelut" bulletPoints={services.avustajapalvelut} icon={<HeartOutlined />} />
            </div>
            <PriceCalculator />

        </div>
    )
}

export default Home
