import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Modal from "react-modal";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./header.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "#85b5b3",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

function Header({ title, subTitle, buttonText }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    // document.body.style.overflow = 'hidden'
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <header className="header" id="top">
      <NavBar />
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">{title}</h1>
            <div className="hero__text">{subTitle}</div>
            <button onClick={openModal} className="hero__button button">
              {buttonText}
            </button>
          </div>
        </div>
        <SideBar />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal Window"
          appElement={document.getElementById("order-modal")}
        >
          <div className="modal">
            <button onClick={closeModal} className="modal__close" type="button">
              X
            </button>
            <ModalWindow />
          </div>
        </Modal>
      </section>
    </header>
  );
}

export default Header;
