import React, { useState } from "react";
import "../styles/Composants/InfoModal.css";

const InfoModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Contenu de la modal</p>
      </div>
    </div>
  );
};

export default InfoModal;
