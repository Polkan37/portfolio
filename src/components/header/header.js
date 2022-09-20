import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import Modal from "react-modal";
import "./header.css";
import './orderModal.css';
import priceInfo from "../../constants/priceInfo";
import customStyles from '../../constants/modalWindowCustomStyles'

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submited');
    // closeModal();
  }

  const handleClick = (id) => {
    const selected = document.getElementById(id);
    selected.classList.add('selected');
  }

  return (
    <header className="header" id="yourAppElement">
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
          contentLabel="Order Modal"
        >
          <div>
            <form onSubmit={handleSubmit} className="order-modal">
              <div className="horisontal-line">
                <p className="oder-modal__title title">Place order</p>
              </div>
              <button onClick={closeModal} className="order-modal__close">
                X
              </button>
              <div className="oder-modal__select">
                <button className='oder-modal__select-item' onClick={() => handleClick('0')} id="0" type="button"> {priceInfo[0].name} <br /> {priceInfo[0].price} </button>
                <button className='oder-modal__select-item' onClick={() => handleClick('1')} id="1" type="button"> {priceInfo[1].name} <br /> {priceInfo[1].price} </button>
                <button className='oder-modal__select-item' onClick={() => handleClick('2')} id="2" type="button"> {priceInfo[2].name} <br /> {priceInfo[2].price} </button>
              </div>
              <div className="oder-modal__contacts">
                <input
                  className="oder-modal__field"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                ></input>
                <input
                  className="oder-modal__field"
                  type="tel"
                  placeholder="380**-***-****"
                  name="phone"
                  pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                  required
                ></input>
              </div>
              <textarea
                className="oder-modal__textarea"
                placeholder="Write here in what style photoshoot do you want or show some examples..."
                id="story"
                name="story"
                rows="8"
                cols="45"
              ></textarea>
              <div>
                <button className="oder-modal__button button" type="submit">
                  Order photos
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </section>
    </header>
  );
}

export default Header;
