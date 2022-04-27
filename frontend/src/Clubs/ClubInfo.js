import React, { useEffect, useState } from "react";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const ClubInfo = () => {
  const history = useHistory();
  //route change for when user clicks more details button

  const routeChange = (clubId) => () => {
    let path = "/events/newEvent/" + clubId;

    history.push(path);
  };

  const routeChangeContact = (formRoute) => () => {
    history.push(formRoute);
  };

  /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/
  const [gotAllClubs, setGotAllClubs] = useState(false);

  const [loadedClubName, setClubName] = useState();
  const [loadedDescription, setDescription] = useState();
  const [loadedImage, setImage] = useState();
  const [loadedClubCat, setClubCat] = useState();
  const [loadedUsers, setUsers] = useState();
  const [loadedEvents, setEvents] = useState();

  let gotAllData = false;

  const { sendRequest } = useHttpClient();
  //gets dynamic user id front the URL.
  const clubID = useParams().clubId;

  //use affect runs for one render, thereafter runs if the dependencies sendRequest, or userID are changed.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //await returns a promise object, waiting until the promise accepts or rejects.
        const responseData = await sendRequest(
          `http://localhost:5000/api/clubs/${clubID}` /*Sends get request(by default), 
                                                              to backend with a dynamic club id.*/
          //send request function fron http-hook.js
        );
        //Loading response data into states
        setGotAllClubs(true);
        setClubName(responseData.club.clubname);
        setDescription(responseData.club.description); //loading into loadedEmail
        setImage(responseData.club.image);
        setClubCat(responseData.club.clubCat);
        setUsers(responseData.club.users);
        setEvents(responseData.club.events);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, clubID]); //dependencies of useEffect

  const [existingEvents, setExistingEvents] = useState();
  //use affect runs for one render, thereafter runs if the dependencies sendRequest, or userID are changed.
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        //await returns a promise object, waiting until the promise accepts or rejects.
        const responseData = await sendRequest(
          `http://localhost:5000/api/events/getEvents` /*Sends get request(by default), 
                                                              to backend.*/
          //send request function fron http-hook.js
        );
        //Loading response data into states

        setExistingEvents(responseData.events);
      } catch (err) {}
    };
    fetchEvents();
  }, [sendRequest]); //dependencies of useEffect

  let filteredEv = [{}];
  let club_name = "";
  if (gotAllClubs && existingEvents && loadedEvents && loadedClubName) {
    gotAllData = true;
    if (loadedClubName.length > 0) {
      club_name = loadedClubName.replace("_", " ");
    }
    filteredEv = existingEvents.filter((ev) => loadedEvents.includes(ev.id));
  }
  return (
    <React.Fragment>
      {!gotAllData && (
        <Container style={{ textAlign: "center" }}>
          <LoadingSpinner />
        </Container>
      )}
      {gotAllData && (
        <React.Fragment>
          <h2 className="basic-title-styles">About the Club</h2>

          <Card
            style={{
              // alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              margin: "3%",
            }}
          >
            <Card.Body>
              <Row>
                <Col md={2}>
                  <Card.Img
                    src={loadedImage}
                    style={{
                      height: "5.5rem",
                      width: "5.5rem",
                      borderRadius: "50%",
                      margin: "2rem",
                    }}
                  />
                </Col>
                <Col md={8} className="align-self-center">
                  <Card.Title style={{ fontSize: 40 }}>{club_name}</Card.Title>
                </Col>
                <Col md={2} className="align-self-center">
                  <Button
                    variant="primary"
                    onClick={routeChangeContact("/forms")}
                  >
                    Contact
                  </Button>
                </Col>
              </Row>
              <Card.Text>
                <br />
                Welcome!
                <br />
                <br />
                {loadedDescription}
                <br />
              </Card.Text>
            </Card.Body>
            <Button
              variant="info"
              className="mt-4"
              onClick={routeChange(clubID)}
            >
              Create Event
            </Button>
          </Card>
          <h2 className="basic-title-styles">Public Events</h2>
          <Container
            style={{
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              margin: "3%",
            }}
          >
            {!filteredEv.length && (
              <Card>
                <Card.Body>
                  There are currently no public events hosted by this group.
                </Card.Body>
              </Card>
            )}
            {filteredEv.length > 0 &&
              filteredEv.map((evt) => (
                <Card key={evt.id} style={{ margin: "1%", width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={evt.images[0]}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{evt.eventname}</Card.Title>
                    <Card.Text>{evt.time}</Card.Text>
                    <Card.Text>{evt.location}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{evt.club}</small>
                  </Card.Footer>
                </Card>
              ))}
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ClubInfo;
