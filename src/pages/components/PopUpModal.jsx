import React from 'react';

const PopUpModal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`modal-cg ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content-cg">
        {children}
        <button className="button-cg" onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUpModal;
