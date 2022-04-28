import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EventsList = (props) => {
  // POST method implementation for creating new events:

  const history = useHistory();
  //route change for when user clicks more details button
  const routeChange = (eventId) => () => {
    let path = "/events/" + eventId;

    history.push(path);
  };

  return (
    <Row>
      <Col md={12}>
        {props.EVENTS.map((ev) => (
          <Card key={ev.id} style={{ margin: "1%", height: "10rem" }}>
            <Card.Header
              style={{
                fontWeight: "500",
                fontSize: 20,
                fontFamily: "Copperplate",
              }}
            >
              {ev.eventname.replace("_", " ")}
            </Card.Header>
            <Card.Body style={{ margin: "0%" }}>
              <Row>
                <Col md={2}>
                  <Card.Img
                    src={ev.images[0]}
                    style={{
                      height: "5.5rem",
                      width: "5.5rem",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  />
                </Col>
                <Col md={8}>
                  <div style={{ textAlign: "left", paddingTop: "2%" }}></div>
                  <p>{ev.time}</p>
                  <p>{ev.location}</p>
                </Col>
                <Col md={2}>
                  <Button
                    variant="primary"
                    className="mt-4"
                    onClick={routeChange(ev.id)}
                  >
                    More Detail
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default EventsList;
