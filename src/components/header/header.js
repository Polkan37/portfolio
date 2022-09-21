import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Modal from "react-modal";
import "./header.css";
import customStyles from '../../constants/modalWindowCustomStyles'
import OrderModal from "../orderModal/OrderModal";

Modal.setAppElement("#root");
function Header({ title, subTitle, buttonText, buttonAction }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="header">
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
        <Modal isOpen={modalIsOpen}  onAfterOpen={afterOpenModal}  onRequestClose={closeModal}  style={customStyles}  contentLabel="Order Modal">
          
          <form className="order-modal">
            <button onClick={closeModal} className="order-modal__close" type="button">
              X
            </button>
              <OrderModal />
          </form>
        </Modal>
      </section>
    </header>
  );
}

export default Header;
