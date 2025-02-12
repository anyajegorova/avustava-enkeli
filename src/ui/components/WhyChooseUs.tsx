import React from 'react'
import Title from './Title'
import '../styles/WhyChooseUs.css'
import { EnvironmentOutlined, ToolOutlined, SafetyOutlined, SyncOutlined } from '@ant-design/icons';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <Title text="Miksi valita meidät?" />
      <div className="section">
        <EnvironmentOutlined className="icon" />
        <h2>PAIKALLISSUUS</h2>
        <hr />
        <p>Olemme lähellä ja ymmärrämme sinun tarpeesi.</p>
      </div>
      <div className="section">
        <ToolOutlined className="icon" />
        <h2>AMMATTITAITO</h2>
        <hr />
        <p>Voit luottaa meihin ja palvelumme korkeaan tasoon.</p>
      </div>
      <div className="section">
        <SafetyOutlined className="icon" />
        <h2>LUOTETTAVUUS</h2>
        <hr />
        <p>Työnjälkemme on huolellista ja laadukasta.</p>
      </div>
      <div className="section">
        <SyncOutlined className="icon" />
        <h2>JOUSTAVUUS</h2>
        <hr />
        <p>Räätälöimme palvelut elämäntilanteesi mukaan.</p>
      </div>
    </div>
  )
}

export default WhyChooseUs
