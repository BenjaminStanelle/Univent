import React, { useEffect, useState } from "react";
// import ErrorModal from "../shared/components/UIElements/ErrorModal";
// import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useParams } from "react-router-dom";
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
// import profile_pic from "../images/club_symbol.png";

const Profile = () => {
  /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/
  const [loadedUser, setLoadedUser] = useState();
  const [loadedEmail, setLoadedEmail] = useState();
  const [loadedImage, setLoadedImage] = useState();
  const [loadedStudentID, setLoadedStudentID] = useState();

  //
  const { sendRequest } = useHttpClient();
  //gets dynamic user id front the URL.
  const userId = useParams().userId;

  //use affect runs for one render, thereafter runs if the dependencies sendRequest, or userID are changed.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //await returns a promise object, waiting until the promise accepts or rejects.
        const responseData = await sendRequest(
          `http://localhost:5000/api/users/account/${userId}` /*Sends get request(by default), 
                                                              to backend with a dynamic user id.*/
          //send request function fron http-hook.js
        );
        //Loading response data into states
        setLoadedUser(responseData.existingUser.name);
        setLoadedEmail(responseData.existingUser.email); //loading into loadedEmail
        setLoadedImage(responseData.existingUser.image);
        setLoadedStudentID(responseData.existingUser.studentID);
        if (!loadedImage) {
          setLoadedImage(
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          );
        }
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, userId]); //dependencies of useEffect

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
                      <Card.Text>Full Name: </Card.Text>
                      <FormControl
                        placeholder={loadedUser}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        disabled
                      />

                      <Card.Text>Campus Email Address: </Card.Text>
                      <FormControl
                        placeholder={loadedEmail}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        disabled
                      />
                      <Card.Text>Student ID: </Card.Text>
                      <FormControl
                        placeholder={loadedStudentID}
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
                        src={loadedImage}
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
                Show selected interests with cards, give option to cancel as
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
