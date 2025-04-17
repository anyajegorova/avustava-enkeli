import Title from './Title'
import '../styles/WhyChooseUs.css'
import { EnvironmentOutlined, ToolOutlined, SafetyOutlined, SyncOutlined } from '@ant-design/icons';
import Reveal from '../../reveal_components/Reveal';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <Title text="Miksi valita meidät?" />
      
      <div className="section">
        <Reveal>
          <EnvironmentOutlined className="icon" />
          <h2>PAIKALLISSUUS</h2>
          <hr />
          <p>Olemme lähellä ja ymmärrämme sinun tarpeesi.</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <ToolOutlined className="icon" />
          <h2>AMMATTITAITO</h2>
          <hr />
          <p>Voit luottaa meihin ja palvelumme korkeaan tasoon.</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <SafetyOutlined className="icon" />
          <h2>LUOTETTAVUUS</h2>
          <hr />
          <p>Työnjälkemme on huolellista ja laadukasta.</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <SyncOutlined className="icon" />
          <h2>JOUSTAVUUS</h2>
          <hr />
          <p>Räätälöimme palvelut elämäntilanteesi mukaan.</p>
        </Reveal>
      </div>

    </div>
  )
}

export default WhyChooseUs
