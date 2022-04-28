import React, { useState } from "react";
import ClubsDropdown from "../forms/ClubsDropdown";
import { Button, Collapse, Card, Form } from "react-bootstrap";

// Renamed to Entry from Form to prevent ambiguity with the react-bootstrap component
function Entry(props) {
  const [open, setOpen] = useState(false);

  return (
    <Card style={{ margin: "1%" }} key={props.id}>
      <Card.Body>
        <h2>{props.title}</h2>
        <div>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="collapsible"
            aria-expanded={open}
          >
            Apply
          </Button>

          <Collapse in={open}>
            <Form style={{ margin: "1%" }}>
              <Form.Group className="mb-3" controlId="clubs-email">
                <ClubsDropdown />
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="clubs-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="clubs-checkout">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Collapse>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Entry;
