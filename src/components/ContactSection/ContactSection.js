import React from 'react'
import Form from '../Form/Form';
import "./contactSection.css"

function ContactSection() {
  return (
    <section className="contact">
      <div className="contact__container container">

        <h2 className="contact__title title">Contact me</h2>

        <div className="contact__form form">
          <Form place='Contact me section' />
        </div>
      </div>
    </section>
  )
}

export default ContactSection