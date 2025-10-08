import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { STATUS_BUTTON } from "../../constants/caseConstants";

const CaseList = () => {
  return (
    <div>
      <h4>CaseList</h4>
      <div className="card mb-2">
        <div className="card-body p-2">
          <Container className="mt-0">
            <Row className="g-2 justify-content-center">
              {STATUS_BUTTON.map((i, index) => {
                return (
                  <>
                    <Col key={index} className="col-auto">
                      <button className={`btn ${i.color} w-100`}>{i?.title}</button>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default CaseList;
