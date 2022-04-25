import React, { useState } from "react";
import {
  Button,
  Collapse,
  Card,
  Form,
  DropdownButton,
  Dropdown,
  Row,
  Col,
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

  const [state, setState] = useState({
    firstname: "",
    lastName: "",
    clubType: "",
    major: "",
    studentId: "",
    email: "",
  });

  // const [firstname, setFirstname] = useState('');
  // const [lastName, setLastname] = useState('');
  // const [clubType, setClubType] = useState('');
  // const [major, setMajor] = useState('');
  // const [studentId, setStudentId] = useState('');
  // const [email, setEmail] = useState('');

  const isNullOrEmpty = (val) => {
    if (val.trim() === "" || val === null || val === undefined) {
      return true;
    }
    return false;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // console.log(event);
    setState({ ...state, [name]: value });
  };

  const submitClubHandler = (event) => {
    event.preventDefault();

    const formVal = state;

    console.log("submitting", state);

    if (
      isNullOrEmpty(formVal.firstname) ||
      isNullOrEmpty(formVal.lastName) ||
      isNullOrEmpty(formVal.clubType) ||
      isNullOrEmpty(formVal.major) ||
      isNullOrEmpty(formVal.studentId) ||
      isNullOrEmpty(formVal.email)
    ) {
      alert("Please complete all the form field");
      return;
    }
  };

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
      ))}
    </div>
  );
}

export default Form;
