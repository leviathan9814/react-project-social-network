import React, { useState } from "react";
import Modal from "react-modal";

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
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <h2>Modal</h2>
                <p>body</p>
                <button onClick={closeModal}>Close modal</button>
            </Modal>
        </div>
    )
}

export default ModalProfile;