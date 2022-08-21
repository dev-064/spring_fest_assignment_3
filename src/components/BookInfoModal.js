import React, { useState } from "react";
import Modal from "react-modal";

function BookInfoModal(props) {
    
      const [isOpen, setIsOpen] = useState(false);

      function openModal() {
      
          setIsOpen(!isOpen);
      }

      return (
        <div>
          <button onClick={openModal}>Display modal</button>

          <Modal
            className="custom_modal"
            overlayClassName="custom_overlay"                
            onRequestClose={openModal}
            contentLabel="Tiny nomadic modal popover"
            isOpen={isOpen}>
            <div>React modal dialog component.</div>
            <button onClick={openModal}>Close </button>
          </Modal>
        </div>
      );
    

}

export default BookInfoModal;