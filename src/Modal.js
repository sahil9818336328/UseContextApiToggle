import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { globalContext } from "./context";

const Modal = () => {
  const getContext = useContext(globalContext);
  // console.log(getContext);
  const { isModalOpen, closeModal } = getContext;
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
