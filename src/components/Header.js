/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/css/header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <div className="header__home home">
        <div className="video-wrapper"></div>
        <iframe
          src="https://player.vimeo.com/video/734013633?h=3a9d2653ce&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        <div className="container">
          <div className="home__block">
            <h1 className="home__title">Anastasia Dartovich</h1>
            <p className="home__text">Photographer</p>
            <a href="" className="home__button button">
              Замовити
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
