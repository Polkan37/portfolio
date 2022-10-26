import React from 'react'
import Form from '../Form/Form';
import {sectionTitles} from '../../constants/main.constants'
import "./contactSection.css"

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">

        <h2 className="contact__title title">{sectionTitles.contact}</h2>

        <div className="contact__form form">
          <Form place='Contact me section' />
        </div>
      </div>
    </section>
  )
}

export default ContactSection