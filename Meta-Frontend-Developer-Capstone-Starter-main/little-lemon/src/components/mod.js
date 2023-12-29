// SuccessModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Erfolg!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Die Aktion wurde erfolgreich abgeschlossen.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Schließen
            </Button>
        </Modal.Footer>
        </Modal>
  );
};

export default SuccessModal;