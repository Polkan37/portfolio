import React from 'react'
import NavBar from '../NavBar/NavBar';
import telegrem from '../../resources/img/icons-telegram.png';
import facebook from '../../resources/img/icons-facebook.png';
import instagram from '../../resources/img/icons-instagram.png';
import "./header.css";

function Header({title, subTitle, buttonText, buttonAction}) {
  return (
    <header className="header">
        <NavBar />
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <h1 className="hero__title">{title}</h1>
              <div className="hero__text">{subTitle}</div>
              <button onClick={buttonAction} className="hero__button button">
                {buttonText}
              </button>
            </div>
          </div>
          <aside className="sidebar">
            <div className="sidebar__line"></div>
            <a href="/" className="sidebar__item" target="_blank">
              <img src={telegrem} alt="telegram icon" />
            </a>
            <a href="/" className="sidebar__item" target="_blank">
              <img src={instagram} alt="instagram icon" />
            </a>
            <a href="/" className="sidebar__item" target="_blank">
              <img src={facebook} alt="facebook icon" />
            </a>
            <div className="sidebar__line"></div>
          </aside>
        </section>
      </header>
  )
}

export default Header
