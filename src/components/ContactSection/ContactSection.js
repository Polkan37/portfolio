import React from 'react'
import "./contactSection.css"

function ContactSection() {
  return (
    <section className="contact">
      <div className="contact__container container">

        <h2 className="contact__title title">Contact me</h2>

        <div className="contact__form form">
          <div className="form__container">
            <form action="" method="post" className="form__contact-form">
              <input type="text" id="name" name="user_name" placeholder="Имя" />
              <input type="tel" id="phone" name="user_phone" placeholder="Телефон" />
              <input type="email" id="mail" name="user_email" placeholder="E-mail" />
              <textarea id="msg" name="user_message" placeholder="Сообщение..."></textarea>                
              <button type="submit" className="form__button">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection