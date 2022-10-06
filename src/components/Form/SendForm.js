import telegramLogin from "../../constants/telegramInfo";
import axios from 'axios';

function SendForm({name, phone, email, message}, method = 'fetch') {
  const URL_API = `https://api.telegram.org/bot${telegramLogin.token}/sendMessage`;

  let msg = `&#9989; <i>Заявка на сайті Dartovich portfolio!</i>\n`;
  msg += "<b>Отправитель: </b>" + name + "\n";
  msg += "<b>Телефон: </b>" + phone + "\n";
  msg += "<b>Пошта: </b>" + email + "\n";
  msg += "<b>Повідомлення: </b>" + message + "\n";
  
  const details = {
    chat_id:telegramLogin.chatId,
    parse_mode: "html",
    text: msg,
  };

  if(method === 'axios'){
    axios.post(URL_API, details)
      .catch((err) => {
        console.warn(err);
        return console.log(err);
      })
      .finally(() => {
        return console.log("sent");
      });
  }
  if(method === 'fetch'){
    fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    })
    .then((response) => response.json());
  }
}

export default SendForm;
