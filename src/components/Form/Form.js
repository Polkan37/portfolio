import React, { useReducer, useState } from "react";
import validateForm from "./formValidation";
import sendForm from "./sendForm";
import disableScroll from "../disableScroll"
import {formText} from '../../constants/main.constants'
import './form.css'

let fieldValidaitonStatus = {
  name: false,
  phone: false,
  email: false,
  message: false,
};

function showModal(id, status) {
  status
    ? (document.getElementById(id).style.transform = "scale(1)")
    : (document.getElementById(id).style.transform = "scale(0)");
}

function activateButton(id, status) {
  status
    ? document.getElementById(id).classList.add("active")
    : document.getElementById(id).classList.remove("active");

  document.getElementById(id).disabled = !status;
}

function resetFormStyles(state) {
  for (const [key] of Object.entries(state)) {
    document.getElementById(key).style.removeProperty("border");
  }
  activateButton("form-button", false);
}

const formReducer = (state, event) => {
  if (event.reset) {
    fieldValidaitonStatus = { name: false, phone: false, email: false, message: false};
    
    resetFormStyles(state);
    showModal("message-sent", false);
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

function Form(props) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);
    showModal("message-sent", true);
    sendForm(formData, props.place, 'fetch');

    setTimeout(() => {
      setSubmitting(false);
      setFormData({reset: true});
      disableScroll(false);
      if(props.setOpenModal) props.setOpenModal(false);
    }, 1500);
  };

  const handleChange = (event) => {
    validateForm(event.target, fieldValidaitonStatus);

    const allFieldsValid = Object.values(fieldValidaitonStatus).every((item) => item);
    activateButton("form-button", allFieldsValid);

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
            pattern="[a-zA-Zа-яА-Я]+[\S ]{2,30}"
            placeholder={formText.name}
            title={formText.nameHint}
            onChange={handleChange}
            value={formData.name || ""}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}"
            placeholder={formText.phone}
            title={formText.phoneHint}
            onChange={handleChange}
            value={formData.phone || ""}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,8}"
            title={formText.emailHint}
            placeholder={formText.email}
            onChange={handleChange}
            value={formData.email || ""}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder={formText.messageText}
            pattern="[\S\s]+[\S ]{2,3500}"
            title={formText.messageHint}
            onChange={handleChange}
            value={formData.message || ""}
            required
          ></textarea>
          <button
            type="submit"
            className="form__button"
            id="form-button"
            title={formText.buttonHint}
            disabled={true}
          >
            {formText.button}
          </button>
        </fieldset>
      </form>
      <div className="modal-done" id="message-sent">
        <p>✓</p>
        <div className="modal-done__text">{formText.sent}</div>
      </div>
    </div>
  );
}

export default Form;
