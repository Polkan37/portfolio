import React from "react";
import logo from "../../resources/img/logo.png";
import {footerTexts, links} from '../../constants/main.constants'
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <div className="footer__header">{footerTexts.header}</div>
          <div className="footer__info-text">
            <p><span>{footerTexts.phoneTitle}:</span> {footerTexts.phoneContent}</p>
            <p><span>{footerTexts.emailTitle}:</span> {footerTexts.emailContent}</p>
            <p><span>{footerTexts.adressTitle}:</span> {footerTexts.adressContent}</p>
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
          <div className="footer__header">{footerTexts.socialsTitle}</div>
          <ul className="footer__social-links-list">
            {links.map(function(el, id) {
              return (
                <li key={id} className="social-links__item">
                  <a href={el.href} target="_blank" rel="noreferrer">
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
