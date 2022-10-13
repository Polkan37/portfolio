import React from "react";
import Form from "../Form/Form";
import "./modal.css";

function Modal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal__content" id="order-modal">
          <button className="modal__close" onClick={() => props.setOpenModal(false)}>X</button>
          <div className="horisontal-line">
            <p className="modal__title title">{props.title}</p>
          </div>
          <div className="modal__content">
            <Form setOpenModal={props.setOpenModal} place={props.place} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
