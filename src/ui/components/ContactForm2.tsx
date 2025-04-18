import '../styles/ContactForm2.css'
import CustomButton from './CustomButton'
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'
import AvustavaEnkeliLogo from '../../assets/logos/avustava-enkeli-logo.png'
import Reveal from '../../reveal_components/Reveal'
import { useTranslation } from 'react-i18next'

const ContactForm2 = () => {
    const { t } = useTranslation();

    return (
        <div className='contact-form-container'>
            <Reveal>
                <div>
                    <h1>{t('contact_form.title.line1')}</h1>
                    <h1>{t('contact_form.title.line2')}</h1>
                    <div className='line'></div>
                    <h4 className='contact-description'>{t('contact_form.description')}</h4>
                    <div className='company-contact-info-container'>
                        <li>
                            <div className="icon-container">
                                <img src={AvustavaEnkeliLogo} alt={t('contact_form.logo_alt')} className="navbar-logo" style={{ width: '1.25rem', height: '1.25rem', display: 'block', margin: 'auto' }} />
                            </div>
                            <div>
                                <h3>{t('contact_form.company_name_label')}</h3>
                                <p>{t('contact_form.company_name')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><MailOutlined /></div>
                            <div>
                                <h3>{t('contact_form.email_label')}</h3>
                                <p>{t('contact_form.email')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><PhoneOutlined /></div>
                            <div>
                                <h3>{t('contact_form.phone_label')}</h3>
                                <p>{t('contact_form.phone')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-container"><HomeOutlined /></div>
                            <div>
                                <h3>{t('contact_form.address_label')}</h3>
                                <p>{t('contact_form.address')}</p>
                            </div>
                        </li>
                    </div>
                </div>
            </Reveal>
            <form className='contact-form'>
                <Reveal width='100%'>
                    <div className='name-surname-container'>
                        <div className='form-item'>
                            <label htmlFor="etunimi">{t('contact_form.first_name')} <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="etunimi" name="etunimi" placeholder={t('contact_form.first_name')} required />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="sukunimi">{t('contact_form.last_name')} <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="sukunimi" name="sukunimi" placeholder={t('contact_form.last_name')} required />
                        </div>
                    </div>
                    <div className='contact-info-container'>
                        <div className='form-item'>
                            <label htmlFor="sahkoposti">{t('contact_form.email_label')} <span style={{ color: 'red' }}>*</span></label>
                            <input type="email" id="sahkoposti" name="sahkoposti" placeholder={t('contact_form.email')} required />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="puhelin">{t('contact_form.phone_label')} <span style={{ color: 'red' }}>*</span></label>
                            <input type="tel" id="puhelin" name="puhelin" placeholder={t('contact_form.phone')} required />
                        </div>
                    </div>
                    <div className='form-item dropdown-container'>
                        <label htmlFor="palvelut">{t('contact_form.services')} <span style={{ color: 'red' }}>*</span></label>
                        <select id="palvelut" name="palvelut" required>
                            <option value="" disabled selected>{t('contact_form.services_placeholder')}</option>
                            <option value="siivouspalvelut">{t('contact_form.cleaning_services')}</option>
                            <option value="avustajapalvelut">{t('contact_form.assistance_services')}</option>
                            <option value="muu">{t('contact_form.other')}</option>
                        </select>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="tarkemmatTiedot">{t('contact_form.details')}</label>
                        <textarea id="tarkemmatTiedot" name="tarkemmatTiedot" placeholder={t('contact_form.details_placeholder')}></textarea>
                    </div>
                    <p style={{ color: 'red' }}>* {t('contact_form.required_field')}</p>
                    <div className="form-item button-container">
                        <CustomButton text={t('contact_form.submit')} onClick={() => { /* handle form submission */ }} />
                    </div>
                </Reveal>
            </form>
        </div>
    )
}

export default ContactForm2
