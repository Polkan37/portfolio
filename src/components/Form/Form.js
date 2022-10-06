import React, { useReducer, useState } from "react";
import SendForm from "./SendForm";
const patterns = {
  name: /[a-zA-Zа-яА-Я]{2,}/,
  phone: /[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: /[\S\s]+[\S]+/,
}
let fieldValidaitonStatus = {name: false, phone: false, email: false, message: false }

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    document.getElementById('message-sent').style.transform = 'scale(1)';
    console.log('formData', formData);
    setTimeout(() => {
      SendForm(formData, 'fetch');
      setSubmitting(false);
      setFormData({
        reset: true,
      });
      fieldValidaitonStatus = {name: false, phone: false, email: false};
      document.getElementById('form-button').classList.remove('active');
      document.getElementById('name').style.removeProperty('border');
      document.getElementById('phone').style.removeProperty('border');
      document.getElementById('email').style.removeProperty('border');
      document.getElementById('msg').style.removeProperty('border');
      document.getElementById('message-sent').style.transform = 'scale(0)';
    }, 1500);
  };
  
  const handleChange = (event) => {
    
    switch(event.target.name) {
      case 'name':
        if(patterns.name.test(event.target.value)) {
          document.getElementById('name').style.border = '1px solid #00856f';
          fieldValidaitonStatus.name = true;
        } else {
          document.getElementById('name').style.border = '1px solid red';
          fieldValidaitonStatus.name = false;
        }
        break;
      case 'phone':
        if(patterns.phone.test(event.target.value)) {
          document.getElementById('phone').style.border = '1px solid #00856f';
          fieldValidaitonStatus.phone = true;
        } else {
          document.getElementById('phone').style.border = '1px solid red';
          fieldValidaitonStatus.phone = false;
        }
        break;
      case 'email':
        if(patterns.email.test(event.target.value)) {
          document.getElementById('email').style.border = '1px solid #00856f';
          fieldValidaitonStatus.email = true;
        } else {
          document.getElementById('email').style.border = '1px solid red';
          fieldValidaitonStatus.email = false;
        }
        break;
      case 'message':
          if(patterns.message.test(event.target.value)) {
            document.getElementById('msg').style.border = '1px solid #00856f';
            fieldValidaitonStatus.message = true;
          } else {
            document.getElementById('msg').style.border = '1px solid red';
            fieldValidaitonStatus.message = false;
          }
          break;
      default:
        break;
    }
    
    const status = Object.values(fieldValidaitonStatus).every(item => item === true);
    status ? document.getElementById('form-button').classList.add('active') : document.getElementById('form-button').classList.remove('active');
    
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="form__container">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="form__contact-form"
      >
        <fieldset disabled={submitting}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            onChange={handleChange}
            value={formData.name || ""}
            required
          />
          <input type="tel" id="phone" name="phone"
            pattern="[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}"
            placeholder="Телефон"
            onChange={handleChange}
            value={formData.phone || ""}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
            required
          />
          <textarea
            id="msg"
            name="message"
            placeholder="Сообщение..."
            onChange={handleChange}
            value={formData.message || ""}
            required
          ></textarea>
          <button type="submit" className="form__button" id="form-button">
            Отправить заявку
          </button>
        </fieldset>
      </form>
      <div className="modal-done" id='message-sent'>
          <p>✓</p>
      </div>
    </div>
  );
}

export default Form;
