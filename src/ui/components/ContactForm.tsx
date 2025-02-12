import React from 'react'
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'
import CustomButton from './CustomButton'
import '../styles/ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-page">
      <h1>Ota yhteyttä</h1>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-item">
            <label htmlFor="nimi">Nimi</label>
            <input type="text" id="nimi" name="nimi" placeholder="Nimi" required />
          </div>
          <div className="form-item">
            <label htmlFor="sahkoposti">Sähköposti</label>
            <input type="email" id="sahkoposti" name="sahkoposti" placeholder="Sähköposti" required />
          </div>
          <div className="form-item">
            <label htmlFor="puhelin">Puhelin</label>
            <input type="tel" id="puhelin" name="puhelin" placeholder="Puhelin" required />
          </div>
          <div className="form-item">
            <label htmlFor="tarkemmatTiedot">Tarkemmat tiedot</label>
            <textarea id="tarkemmatTiedot" name="tarkemmatTiedot" placeholder="Tarkemmat tiedot"></textarea>
          </div>
          <div className="form-item button-container">
            <CustomButton text="Lähetä" onClick={() => { /* handle form submission */ }} />
          </div>
        </form>

        <div className="contact-info">
          <p className="company-name">Avustava Enkeli Oy</p>
          <p><MailOutlined /> toimisto@avustavaenkeli.fi</p>
          <p><PhoneOutlined /> +358 50 597 55 35</p>
          <p><HomeOutlined /> Suomi, Vantaa</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
