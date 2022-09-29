import React, { useReducer, useState } from "react";
const patterns = {
  name: '',
  phone: /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

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

    Object.entries(formData).map(([name, value]) => (
      console.log(name + ': ' + value.toString())
    ))
    document.getElementById('message-sent').style.transform = 'scale(1)';
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
      document.getElementById('message-sent').style.transform = 'scale(0)';
    }, 1500);
  };

  const handleChange = (event) => {
    
    switch(event.target.name) {
      case 'phone':
        patterns.phone.test(event.target.value) ? document.getElementById('phone').style.border = '': document.getElementById('phone').style.border = '1px solid red';
        break;
      case 'email':
        patterns.email.test(event.target.value) ? document.getElementById('email').style.border = '': document.getElementById('email').style.border = '1px solid red';
        break;
      default:
        break;
    }
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
            pattern="^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$"
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
          <button type="submit" className="form__button">
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
