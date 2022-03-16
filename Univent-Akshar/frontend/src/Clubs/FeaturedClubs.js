import React from "react";

import { CardGroup, Card } from "react-bootstrap";

const FeaturedClubs = (props) => {
  return (
    <CardGroup>
      {props.FEATURED_CLUBS.map((c) => (
        <Card style={{ margin: "2%" }}>
          <Card.Img
            variant="top"
            src={c.image}
            style={{ height: "100%", width: "100%" }}
          />
          <Card.Body>
            <Card.Title>{c.clubName}</Card.Title>
            <h5>{c.title}</h5>
            <Card.Text>{c.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <img
              style={{
                margin: "2%",
                height: "3.5rem",
                width: "3.5rem",
              }}
              src={c.symbol}
            />
            <small className="text-muted">{c.clubName}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};

export default FeaturedClubs;
