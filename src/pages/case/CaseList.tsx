import React from "react";
import useCaseList from "./hooks/useCaseList";
import { Col, Container, Row } from "react-bootstrap";
import { STATUS_BUTTON } from "../../constants/caseConstants";
import TypeOfWork from "../../components/modals/typeOfWork/TypeOfWork";

const CaseList = () => {
  const { open, setOpen } = useCaseList();
  return (
    <div>
      <h4>CaseList</h4>
      <div className="card mb-2">
        <div className="card-body p-2">
          <Container className="mt-0">
            <Row className="g-2 justify-content-center">
              {STATUS_BUTTON.map((i, index) => {
                return (
                  <Col key={index} className="col-auto">
                    <button onClick={() => setOpen(true)} className={`btn ${i.color} w-100`}>
                      {i?.title}
                    </button>
                  </Col>
                );
              })}
            </Row>
            <TypeOfWork show={open} onHide={() => setOpen(false)} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CaseList;
