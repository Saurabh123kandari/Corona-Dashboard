import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

function Display(props) {
  const newdata = props.data.Global;

  function activeCase() {
    const datasub = newdata.TotalConfirmed - newdata.TotalRecovered;
    return <div>{datasub}</div>;
  }

  //   let itemToRender;
  if (newdata) {
    return (
      <Container>
        <Row>
          <Col>
            {" "}
            <div>
              <Alert variant="primary">
                <text>Current Active Case</text>
                <h3>{activeCase()}</h3>
              </Alert>
            </div>
          </Col>
          <Col>
            <div>
              <Alert variant="warning">
                <text>Total Confirmed</text>
                <h3>{newdata.TotalConfirmed}</h3>
              </Alert>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div>
              <Alert variant="danger">
                <text>Total Deaths</text>
                <h3>{newdata.TotalDeaths}</h3>
              </Alert>
            </div>
          </Col>
          <Col>
            <div>
              <Alert variant="success">
                <text>Total Recovered</text>
                <h3>{newdata.TotalRecovered}</h3>
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return <div>{newdata}</div>;
}

export default Display;
