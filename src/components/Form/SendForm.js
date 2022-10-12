import axios from "axios";
import { URL_API } from "../../constants/form.constants";

function composeMessage({ name, phone, email, message }) {
  let msg = `📷 <i>Заявка на сайті <b>Dartovich portfolio!</b></i>
      <b>Ім'я: </b>${name}
      <b>Телефон: </b>${phone}
      <b>Пошта: </b>${email}
      <b>Повідомлення: </b>${message}`;
  return msg;
}

const sendTelegramMsgWithAxios = (url, details) => {
  axios
    .post(url, details)
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("msg sent by axios");
    });
};

const sendTelegramMsgWithFetch = (url, details) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  }).then(console.log("msg sent with fetch"));
};

function sendForm(formData, method = "fetch") {
  const DETAILS = {
    chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
    parse_mode: "html",
    text: composeMessage(formData),
  };
  method === "fetch"
    ? sendTelegramMsgWithFetch(URL_API, DETAILS)
    : sendTelegramMsgWithAxios(URL_API, DETAILS);
}

export default sendForm;
