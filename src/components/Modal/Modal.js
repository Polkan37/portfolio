import { useEffect, useRef } from "react";
import Form from "../Form/Form";
import disableScroll from "../disableScroll";
import "./modal.css";

function Modal(props) {
  const ref = useRef()
  disableScroll(true);
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        props.setOpenModal(false);
        disableScroll(false);
      }
    }

    document.querySelector('.modal-wrapper').addEventListener("click", checkIfClickedOutside);
  }, [])


  return (
    <div className="modal-wrapper">
      <div className="modal" ref={ref}>
        <div className="modal__content" id="order-modal">
          <button
            className="modal__close"
            onClick={() => {
              props.setOpenModal(false);
              disableScroll(false);
            }}
          >
            X
          </button>
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
