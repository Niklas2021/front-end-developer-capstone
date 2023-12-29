// SuccessModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, handleClose, text}) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {text}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
  );
};

export default SuccessModal;