import React from "react";
import links from "../../constants/sideBarIcons";
import logo from "../../resources/img/logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <div className="footer__header">Контактная информация</div>
          <div className="footer__info-text">
            <p><span>телефон:</span> +380 12 345 67 89</p>
            <p><span>E-mail:</span> info@gmail.com</p>
            <p><span>Адрес:</span> г.Кривой Рог, ул.Гагарина</p>
          </div>
        </div>
        <a href="#top" className="footer__logo">
          <img
            src={logo}
            width="100%"
            height="100%"
            alt="Dartovich site logo"
          />
        </a>
        <div className="footer__social-links">
          <div className="footer__header">Социальные сети</div>
          <ul className="footer__social-links-list">
            {links.map(function(el, id) {
              return (
                <li key={id} className="social-links__item">
                  <a href="/" target="_blank">
                    <img src={el.url} alt={el.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
