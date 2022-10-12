import React from "react";
import Form from '../Form/Form'
import './modal.css'

function ModalWindow() {
  return (
    <div className="modal__content" id="order-modal">
      <div className="horisontal-line">
        <p className="modal__title title">Order</p>
      </div>
      <div className="modal__content">
        <Form />
      </div>
    </div>
  );
}

export default ModalWindow;
