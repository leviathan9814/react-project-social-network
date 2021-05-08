import React, { useState } from "react";
import Modal from "react-modal";

import "./modal.css";

Modal.setAppElement("#root");

const ModalProfile = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button className="btn btn-dark" onClick={openModal}>My CV</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <h2>Modal</h2>
                <p>body</p>
                <button onClick={closeModal}>Close CV</button>
            </Modal>
        </div>
    )
}

export default ModalProfile;