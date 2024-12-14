import React from "react";
import { Button, Modal } from "react-bootstrap";
function Modal1({ component, showState, title, onClose, titleCls }) {
  const [show, setShow] = React.useState(showState);

  const handleClose = () => {
    setShow(false);
    onClose();
  };
  const handleShow = () => setShow(true);

  return (
    <Modal className="custom-modal" show={show} onHide={handleClose}>
      <Modal.Header dir="rtl" className={titleCls} closeButton>
        {title}
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          סגור
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal1;
