import React from "react";
import { Row, Col, Card, Tabs, Tab, FormControl } from "react-bootstrap";

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
                        placeholder="First Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Card.Text>Last Name: </Card.Text>
                      <FormControl
                        placeholder="Last Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Card.Text>Campus Email Address: </Card.Text>
                      <FormControl
                        placeholder="Campus Email Address"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Header>Profile Picture</Card.Header>
                    <Card.Body>
                      <div>Featured</div>
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
            <Tab eventKey="Interests" title="Interests" disabled>
              <div>
                Mine eye hath play'd the painter and hath stell'd, Thy beauty's
                form in table of my heart
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Profile;
