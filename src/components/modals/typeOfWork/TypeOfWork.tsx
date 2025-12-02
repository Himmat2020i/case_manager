import React from "react";
import { Button, Modal } from "react-bootstrap";
import { TypeOfWorkInterface } from "../../../interface/typeOfWorkInterface";

const TypeOfWork = (props: TypeOfWorkInterface) => {
  const { show, onHide } = props;
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header>
          <Modal.Title>Type Of Work</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant={"secondary"} onClick={onHide}>
            Close
          </Button>
          <Button variant={"success"}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TypeOfWork;
