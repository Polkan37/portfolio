import React, { useReducer, useState } from "react";
import SendForm from "./SendForm";
const patterns = {
  name: /[a-zA-Zа-яА-Я]{2,}/,
  phone: /[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: /[\S\s]+[\S]+/,
};
let fieldValidaitonStatus = {
  name: false,
  phone: false,
  email: false,
  message: false,
};

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
    document.getElementById("message-sent").style.transform = "scale(1)";
    setTimeout(() => {
      SendForm(formData, "fetch");
      setSubmitting(false);
      setFormData({
        reset: true,
      });
      fieldValidaitonStatus = { name: false, phone: false, email: false };
      for (const [key] of Object.entries(formData)) {
        document.getElementById(key).style.removeProperty("border");
      }
      document.getElementById("form-button").classList.remove("active");
      document.getElementById("message-sent").style.transform = "scale(0)";
    }, 1500);
  };

  const handleChange = (event) => {
    const title = event.target.name;
    const value = event.target.value;
    if (patterns[title].test(value)) {
      document.getElementById([title]).style.border = "1px solid #00856f";
      fieldValidaitonStatus[title] = true;
    } else {
      document.getElementById(title).style.border = "1px solid red";
      fieldValidaitonStatus[title] = false;
    }

    const status = Object.values(fieldValidaitonStatus).every(
      (item) => item === true
    );
    status
      ? document.getElementById("form-button").classList.add("active")
      : document.getElementById("form-button").classList.remove("active");

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
          <input
            type="tel"
            id="phone"
            name="phone"
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
            id="message"
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
      <div className="modal-done" id="message-sent">
        <p>✓</p>
      </div>
    </div>
  );
}

export default Form;
