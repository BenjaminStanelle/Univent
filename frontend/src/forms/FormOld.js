import React, { useState } from "react";
import {
  Button,
  Collapse,
  Card,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const FORMS_LIST = [
  {
    id: "1",
    title: "Apply for organization",
    expiredAt: "0000-00-00",
    link: "",
  },
  { id: "2", title: "Volunteer", expiredAt: "0000-00-00", link: "" },
  { id: "3", title: "Donate for Cause", expiredAt: "0000-00-00", link: "" },
  { id: "4", title: "Be a speaker", expiredAt: "0000-00-00", link: "" },
];

function Form() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h2 className="basic-title-styles">FORMS</h2>
      {FORMS_LIST.map((f) => (
        <Card style={{ margin: "1%" }} key={f.id}>
          <Card.Body>
            <h2>{f.title}</h2>
            <div>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Apply
              </Button>
              <Collapse in={open}>
                <Form style={{ margin: "1%" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Select Club"
                    >
                      <Dropdown.Item href="#/action-1">
                        Chess Club
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Accounting Association
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        UTA Coders Society
                      </Dropdown.Item>
                    </DropdownButton>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Collapse>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Form;
