import React, { useState, useEffect } from 'react';
import PrimaryButton from '../materials/pr-btn';
import Icon from '../assets/icons/icon'

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for the slide-down animation to complete
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'visible' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isVisible ? 'slide-in' : 'slide-out'}`} onClick={(e) => e.stopPropagation()}>
        <Icon name="close" size="27px"/>
        <button className="close-button" onClick={handleClose}>X</button>
        {children}
      </div>
      <style jsx>{
        `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            opacity: 0;
            transition: opacity 0.3s;
            height:100dvh;
            z-index:2;

        }

        .modal-overlay.visible {
            opacity: 1;
        }

        .modal-content {
            background: white;
            width: calc(100% - 10px);
            padding: 5px;
            border-radius: 8px 8px 0 0;
            position: relative;
            transform: translateY(100%);
            transition: transform 0.3s;
            position:relative;
            display:flex;
            flex-direction:column;
        }

        .modal-content.slide-in {
            transform: translateY(0);
        }

        .modal-content.slide-out {
            transform: translateY(100%);
        }

        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
        }
        
        `}</style>
    </div>
  );
};

export default Modal;
