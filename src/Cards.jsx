import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardText, CardBody, CardTitle } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Cards = (props) => {
  const newdata = props.data.Global;

  function activeCase() {
    const datasub = newdata.TotalConfirmed - newdata.TotalRecovered;
    return <div>{datasub}</div>;
  }
  function closedCase() {
    const dataplus = newdata.TotalRecovered + newdata.TotalDeaths;
    return <div>{dataplus}</div>;
  }

  if (newdata) {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Currently Active Cases</Card.Title>
                  <Card.Text className="card_text">{activeCase()}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Total Closed Cases</Card.Title>
                  <Card.Text className="card_text">{closedCase()}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return <div></div>;
};
export default Cards;

// import React from "react";
// // import "./Cards-style.css";

// const Cards = (props) => {
//   const newdata = props.data.Global;

//   function activeCase() {
//     const datasub = newdata.TotalConfirmed - newdata.TotalRecovered;
//     return <div>{datasub}</div>;
//   }

//   if (newdata) {
//     return (
//       <div>
//         <div className="cards">
//           <div className="card">
//             <div className="Card text-center">
//               <div className="card-body text-dark">
//                 <h4 className="card-title">Currently Active Cases</h4>
//                 <p className="card-text text-secondary ptext">{activeCase()}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <div className="Card text-center">
//               <div className="card-body text-dark">
//                 <h4 className="card-title">Total Recovered Cases</h4>
//                 <p className="card-text text-secondary ptext">
//                   {newdata.TotalConfirmed}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return <div></div>;
// };

// export default Cards;
