import React from "react";
import {
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  FormControl,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

import profile_pic from "../images/club_symbol.png";

const Profile = () => {
  return (
    <React.Fragment>
      <h1 className="basic-title-styles">My Account</h1>
      <h3 className="basic-title-styles">Profile</h3>
      <Card>
        <Card.Body>
          <Tabs
            defaultActiveKey="Profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Profile" title="Profile">
              <Row>
                <Col md={8}>
                  <Card>
                    <Card.Header>Profile Information</Card.Header>
                    <Card.Body>
                      <Card.Text>First Name: </Card.Text>
                      <FormControl
                        placeholder="Akshar"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Card.Text>Last Name: </Card.Text>
                      <FormControl
                        placeholder="Patel"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Card.Text>Campus Email Address: </Card.Text>
                      <FormControl
                        placeholder="akshar.patel@mavs.uta.edu"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        disabled
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Header>Profile Picture</Card.Header>
                    <Card.Body>
                      <div>Featured</div>
                      <Image
                        src={profile_pic}
                        roundedCircle
                        style={{
                          height: "9rem",
                          width: "9rem",
                        }}
                      />
                      <>
                        <Form.Group controlId="formFileSm" className="mb-3">
                          <Form.Label>Profile Picture Upload</Form.Label>
                          <Form.Control type="file" size="sm" />
                        </Form.Group>
                      </>
                      <Button variant="outline-danger">Delete Picture</Button>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Contact Information" title="Contact Information">
              <div>
                Mine eye hath play'd the painter and hath stell'd, Thy beauty's
                form in table of my heart
              </div>
            </Tab>
            <Tab eventKey="Interests" title="Interests">
              <div>
                Show selected interests with cards, gove option to cancel as
                well.
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Check all categories that insterests you, we will
                      customize your dashboard accordingly.
                    </p>
                    <Form>
                      {["Sports", "Religion", "Arts"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type="checkbox"
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
          </Tabs>
          <Button variant="primary" style={{ marginTop: "1rem" }}>
            Update
          </Button>{" "}
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Profile;
