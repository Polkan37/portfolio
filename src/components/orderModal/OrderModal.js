import React, { useState } from "react";
import "./orderModal.css";
import validator from "validator";
import axios from 'axios';

function OrderModal() {
  const [message, setMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  


  function handleSubmit(e){
    const TOKEN = "5334344703:AAFkugs2Xrj_gFiqzsbUrKJD9Qkt28CHZA8";
    const CHAT_ID = "-1001582276476";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      let message = `&#9989; <i>Заявка с сайта Dartovich portfolio!</i>\n`;
      message += "<b>Отправитель: </b>" + userName + "\n";
      message += "<b>Телефон: </b>" + userPhone + "\n";
      message += "<b>сообщение: </b>" + userMessage + "\n";

      axios.post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          console.log("sent");
        });
  }
  const validateName = (e) => {
    var name = e.target.value;

    if (validator.isAlphanumeric(name)) {
        setMessage("");
        setUserName(name);
    } else {
        setMessage("Please, enter valid Name");
    }
  };
  const validatePhone = (e) => {
    var phone = e.target.value;

    if (validator.isMobilePhone(phone)) {
        setMessage("");
        setUserPhone(phone)
    } else {
        console.log('her')
        setMessage("Please, enter valid Phone");
    }
  };  
  const validateMessage = (e) => {
    var message = e.target.value;

    if (message !== "") {
        setMessage("");
        setUserMessage (message)
    } else {
        console.log('her')
        setMessage("Please, enter your message");
    }
  };

  return (
    <div className="oder-modal__content">
      <div className="horisontal-line">
        <p className="oder-modal__title title">Place order</p>
      </div>
      <div className="oder-modal__content">
        <div className="oder-modal__contacts">
      <input
           className="oder-modal__field"
           type="text"
           placeholder="Name"
           required
           onChange={(e) => validateName(e)}
        ></input>

      <input
            className="oder-modal__field"
            type="text"
            id="userPhone"
            placeholder="380*********"
            name="Phone"
            onChange={(e) => validatePhone(e)}
            required
        ></input>

        </div>
        <span style={{ fontWeight: "bold", color: "red", margin: "0 0 .5em 0"  }}>
          {message}
        </span>
        <textarea
          className="oder-modal__textarea"
          placeholder="Write here in what style photoshoot do you want or show some examples..."
          id="story"
          name="story"
          rows="10"
          cols="55"
          onChange={(e) => validateMessage(e)}
        >
        </textarea>
    </div>
      <button onClick={handleSubmit} type="submit" className="oder-modal__button button">Order photos</button>
    </div>
  )

  // function handleSubmit(e) {

  //   console.log('You clicked submit.');
  // };


  // return (
  //   <div className="oder-modal__content">
  //       <div className="horisontal-line">
  //         <p className="oder-modal__title title">Place order</p>
  //       </div>
  //       {/* <div className="oder-modal__select">
  //         <button className="oder-modal__select-item" onClick={() => handleClick("0")} id="0" type="button" >
  //           пакет<br/> {priceInfo[0].name} <br /> {priceInfo[0].price}
  //         </button>
  //         <button className="oder-modal__select-item" onClick={() => handleClick("1")} id="1"  type="button" >
  //         пакет<br/> {priceInfo[1].name} <br /> {priceInfo[1].price}
  //         </button>
  //         <button className="oder-modal__select-item" onClick={() => handleClick("2")} id="2" type="button">
  //         пакет<br/> {priceInfo[2].name} <br /> {priceInfo[2].price}
  //         </button>
  //       </div> */}
  //       <div className="oder-modal__contacts">
  //         <input
  //           className="oder-modal__field"
  //           type="text"
  //           placeholder="Name"
  //           name="name"
  //           required
  //         ></input>
  //         <input
  //           className="oder-modal__field"
  //           type="tel"
  //           placeholder="380**-***-****"
  //           name="phone"
  //           pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
  //           required
  //         ></input>
  //       </div>
  //       <textarea
  //         className="oder-modal__textarea"
  //         placeholder="Write here in what style photoshoot do you want or show some examples..."
  //         id="story"
  //         name="story"
  //         rows="10"
  //         cols="55"
  //       >

  //       </textarea>
  //       <button onClick={handleSubmit} className="oder-modal__button button" type="submit">
  //         Order photos
  //       </button>
  //   </div>
  // );
}

export default OrderModal;
