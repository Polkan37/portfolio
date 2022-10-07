import React, { useReducer, useState } from "react";
import FormValidation from "./formValidation";
import sendForm from "./sendForm";

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

function buttonActive(id, status) {
  status
    ? document.getElementById(id).classList.add("active")
    : document.getElementById(id).classList.remove("active");

  document.getElementById(id).disabled = !status;
}

function resetFormStyles(state) {
  for (const [key] of Object.entries(state)) {
    document.getElementById(key).style.removeProperty("border");
  }
  buttonActive("form-button", false);
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

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);
    showModal("message-sent", true);
    sendForm(formData, 'fetch');

    setTimeout(() => {
      setSubmitting(false);
      setFormData({reset: true});
    }, 1500);
  };

  const handleChange = (event) => {
    FormValidation(event.target, fieldValidaitonStatus);

    const allFieldsValid = Object.values(fieldValidaitonStatus).every((item) => item);
    buttonActive("form-button", allFieldsValid);

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
            title="Ім'я має складатися хоча б з 2 букв"
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
            title="+38*** *** **** Будь ласка вкажіть телефон починаючи з 0"
            onChange={handleChange}
            value={formData.phone || ""}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,8}"
            title="Вкажіть пошту у форматі *******@*****.***"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email || ""}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Опишіть ваші побажання щодо фотосесії"
            pattern="[\S\s]+[\S ]{2,3500}"
            title="Поле не має бути пустим але не більше 3500 символів"
            onChange={handleChange}
            value={formData.message || ""}
            required
          ></textarea>
          <button
            type="submit"
            className="form__button"
            id="form-button"
            title="Будь ласка заповніть форму"
            disabled={true}
          >
            Отправить заявку
          </button>
        </fieldset>
      </form>
      <div className="modal-done" id="message-sent">
        <p>✓</p>
        <div className="modal-done__text">Повідомлення відправлено</div>
      </div>
    </div>
  );
}

export default Form;
