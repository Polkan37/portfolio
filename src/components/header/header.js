import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import { mainInfo, buttonNames } from "../../constants/main.constants";
import Modal from "../Modal/Modal";
import "./header.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="header" id="top">
      <NavBar />
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">{mainInfo.title}</h1>
            <div className="hero__text">{mainInfo.subTitle}</div>
            <button className="hero__button button" onClick={() => setModalOpen(true)}>
              {mainInfo.buttonText}
            </button>
          </div>
        </div>
        <SideBar />
        {modalOpen && <Modal setOpenModal={setModalOpen} title={buttonNames.order} place='Button in hero section'/>}
      </section>
    </header>
  );
}

export default Header;
