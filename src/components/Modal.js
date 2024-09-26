// Modal.js
import React from 'react';
import '../styles/Modal.css'; // Ensure you have styling for your modal

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null; // Return nothing if the modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Me</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
