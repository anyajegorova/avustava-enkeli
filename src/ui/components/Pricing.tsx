import '../styles/Pricing.css';
import { RobotOutlined, ClearOutlined } from '@ant-design/icons';
import Title from './Title';
import Reveal from '../../reveal_components/Reveal';

const Pricing = () => {
  return (
    <>
      <Title text='Palvelujen hinnottelu' />
      <Reveal width='100%'>
        <div className="pricing-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Siivouspalvelut</th>
                <th>Avustajapalvelut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="center-text">1-2 viikon välein</td>
              </tr>
              <tr>
                <td className="price">49 €/h *</td>
                <td className="price">41,50 €/h *</td>
              </tr>
              <tr>
                <td colSpan={2} className="center-text">Kerran kuussa tai kertakäynti</td>
              </tr>
              <tr>
                <td className="price">59 €/h *</td>
                <td className="price">51,50 €/h *</td>
              </tr>
              <tr>
                <td colSpan={2} className="center-text">Minimissään käynnin kesto</td>
              </tr>
              <tr>
                <td className="center-text">2 hours</td>
                <td className="center-text">1.5 hours</td>
              </tr>
              <tr className="additional-service">
                <td colSpan={2} className="center-text">Lisäpalvelut (Siivouspalvelut)</td>
              </tr>
              <tr className="additional-service">
                <td><RobotOutlined className="icon" />Ikkunapesurobotti siivouksen ajaksi: 20 €/h **</td>
                <td></td>
              </tr>
              <tr className="additional-service">
                <td><ClearOutlined className="icon" />Lattiapesuri: 25 €/h ***</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="pricing-note">* Hinnat sisältävät arvonlisäveron 25,5%.</p>
          <p className="pricing-note">** Ikkunapesurobotti pesee ikkunoita siivouksen aikana täysin itsenäisesti. Robotti selviytyy todella korkeista ja isoista ikkunoista helposti.</p>
          <p className="pricing-note">*** Lattiapesuri Kärcher FC7 tekee imuroinnin ja moppauksen yhdellä kertaa. Erilliset harjakset eri lattialaaduille. Tekee esim laattalattiasta todella puhtaan. Nopeuttaa lattian puhdistusta 40% ja tuo säästöä siivouskäynnin kestossa.</p>
        </div>
      </Reveal>
    </>
  );
};

export default Pricing;
