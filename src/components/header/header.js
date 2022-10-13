import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import "./header.css";

function Header({ title, subTitle, buttonText }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="header" id="top">
      <NavBar />
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">{title}</h1>
            <div className="hero__text">{subTitle}</div>
            <button className="hero__button button" onClick={() => setModalOpen(true)}>
              {buttonText}
            </button>
          </div>
        </div>
        <SideBar />
        {modalOpen && <Modal setOpenModal={setModalOpen} title='Замовити' place='Button in hero section'/>}
      </section>
    </header>
  );
}

export default Header;
