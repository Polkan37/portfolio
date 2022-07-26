export const PATTERNS = {
  name: /^([a-zA-Zа-яА-Я]+[\S ]{2,30})$/,
  phone: /^([0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4})$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: /[\S\s]+[\S ]{2,3500}/,
};
export const URL_API = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage`;

