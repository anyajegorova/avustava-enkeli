import React from 'react'
import Hero from '../ui/components/Hero'
import Collapsible from '../ui/components/Collapsible'
import './Home.css'

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
            <Collapsible title="Siivouspalvelut" bulletPoints={services.siivouspalvelut}/>
            <Collapsible title="Avustajapalvelut" bulletPoints={services.siivouspalvelut}/>
        </div>
    )
}

export default Home
