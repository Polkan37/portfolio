import React from 'react'
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import "./header.css";

function Header({title, subTitle, buttonText, buttonAction}) {
  return (
    <header className="header" id="top">
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
          <SideBar />
        </section>
      </header>
  )
}

export default Header
