// ContactFormModal.jsx

import React from "react";

import { useModal } from "../context/ModalProvider.jsx";

const ContactFormModal = ({ modalMessage }) => {

  const { closeModal } = useModal();

  return (
    <div className="modal-cg">
      <div className="modal-content-cg">
        <div>
          <p className="modal-message-cg">{modalMessage}</p>
          <button className="button-cg" onClick={closeModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
