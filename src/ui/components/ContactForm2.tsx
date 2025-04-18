import '../styles/ContactForm2.css'
import CustomButton from './CustomButton'
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'
import AvustavaEnkeliLogo from '../../assets/logos/avustava-enkeli-logo.png'
import Reveal from '../../reveal_components/Reveal'

const ContactForm2 = () => {
    return (
        <div className='contact-form-container'>
            <Reveal>


                <div>
                    <h1>Ota  </h1>
                    <h1>yhteyttä</h1>
                    <div className='line'></div>
                    <h4 className='contact-description'>Ota meihin yhteyttä mistä tahansa syystä! Voit lähettää viestin esimerkiksi siivouspalvelun tai avustajapalvelun tilaamiseen, kysymyksiin tai muihin asioihin. Täytä lomake, niin palaamme sinulle pian!</h4>
                    <div className='company-contact-info-container'>
                        <li>
                            <div className="icon-container">
                                <img src={AvustavaEnkeliLogo} alt="Avustava Enkeli Logo" className="navbar-logo" style={{ width: '1.25rem', height: '1.25rem', display: 'block', margin: 'auto' }} />
                            </div>
                            <div>
                                <h3>Yrityksen nimi</h3>
                                <p>Avustava Enkeli Oy</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><MailOutlined /></div>
                            <div>
                                <h3>Sähköposti</h3>
                                <p>toimisto@avustavaenkeli.fi</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><PhoneOutlined /></div>
                            <div>
                                <h3>Puhelinumero</h3>
                                <p>+358 50 597 55 35</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><HomeOutlined /></div>
                            <div>
                                <h3>Osoite</h3>
                                <p>Suomi, Vantaa</p>
                            </div>
                        </li>
                    </div>
                </div>
            </Reveal>
            <form className='contact-form'>
                <Reveal width='100%'>
                    <div className='name-surname-container'>
                        <div className='form-item'>
                            <label htmlFor="etunimi">Etunimi <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="etunimi" name="etunimi" placeholder="Etunimi" required />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="sukunimi">Sukunimi <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="sukunimi" name="sukunimi" placeholder="Sukunimi" required />
                        </div>
                    </div>
                    <div className='contact-info-container'>
                        <div className='form-item'>
                            <label htmlFor="sahkoposti">Sähköposti <span style={{ color: 'red' }}>*</span></label>
                            <input type="email" id="sahkoposti" name="sahkoposti" placeholder="Sähköposti" required />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="puhelin">Puhelin <span style={{ color: 'red' }}>*</span></label>
                            <input type="tel" id="puhelin" name="puhelin" placeholder="Puhelin" required />
                        </div>
                    </div>
                    <div className='form-item dropdown-container'>
                        <label htmlFor="palvelut">Palvelut <span style={{ color: 'red' }}>*</span></label>
                        <select id="palvelut" name="palvelut" required>
                            <option value="" disabled selected>Minua kiinnostaa..</option>
                            <option value="siivouspalvelut">Siivouspalvelut</option>
                            <option value="avustajapalvelut">Avustajapalvelut</option>
                            <option value="avustajapalvelut">Muu</option>
                        </select>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="tarkemmatTiedot">Tarkemmat tiedot</label>
                        <textarea id="tarkemmatTiedot" name="tarkemmatTiedot" placeholder="Tarkemmat tiedot"></textarea>
                    </div>
                    <p style={{ color: 'red' }}>* Pakollinen kenttä</p>
                    <div className="form-item button-container">
                        <CustomButton text="Lähetä" onClick={() => { /* handle form submission */ }} />
                    </div>
                </Reveal>
            </form>
        </div>
    )
}

export default ContactForm2
