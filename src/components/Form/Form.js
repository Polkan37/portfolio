import React, { useReducer, useState } from 'react';



function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
  };

  return (
    <div className="form__container">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="form__contact-form"
      >
        <input type="text" id="name" name="user_name" placeholder="Имя" />
        <input type="tel" id="phone" name="user_phone" placeholder="Телефон" />
        <input type="email" id="mail" name="user_email" placeholder="E-mail" />
        <textarea
          id="msg"
          name="user_message"
          placeholder="Сообщение..."
        ></textarea>
        <button type="submit" className="form__button">
          Отправить заявку
        </button>
      </form>
    </div>
  );
}

export default Form;
