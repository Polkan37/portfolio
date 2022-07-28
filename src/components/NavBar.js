import React from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/header.css";

function NavBar() {
  const navMenu = document.querySelector(".nav__list-wrapper"),
    navBurger = document.querySelector(".icon-menu"),
    navClose = document.querySelector(".close-icon-menu");

  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if (navBurger) {
    navBurger.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      navBurger.classList.remove("show-menu");
      navClose.classList.add("show-menu");
    });
  }

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      navClose.classList.remove("show-menu");
      navBurger.classList.add("show-menu");
    });
  }
  return (
    <nav className="header__nav">
      <div className="container">
        <div className="nav__menu">
          <a href="index.html">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </a>

          <div className="nav__list-wrapper">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#price" className="nav__link">
                  Price
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact me
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__button">
            <i className="uil uil-bars icon-menu show-menu"></i>
            <i className="uil uil-times close-icon-menu"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
