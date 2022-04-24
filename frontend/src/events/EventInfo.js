import React, { useEffect, useState } from "react";
// import ErrorModal from "../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
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
  Carousel,
  Container,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";

const EventInfo = () => {
  /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/
  const [gotAllEvents, setGotAllEvents] = useState(false);

  const [loadedEventName, setEventName] = useState();
  const [loadedTime, setTime] = useState();
  const [loadedDate, setDate] = useState();
  const [loadedLocation, setLocation] = useState();
  const [loadedImages, setImages] = useState();
  const [loadedClubImage, setClubImage] = useState();
  const [loadedClubs, setClubs] = useState();

  let gotAllData = false;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  //gets dynamic user id front the URL.
  const eventID = useParams().eventId;

  //use affect runs for one render, thereafter runs if the dependencies sendRequest, or userID are changed.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        //await returns a promise object, waiting until the promise accepts or rejects.
        const responseData = await sendRequest(
          `http://localhost:5000/api/events/${eventID}` /*Sends get request(by default), 
                                                              to backend with a dynamic club id.*/
          //send request function fron http-hook.js
        );
        //Loading response data into states
        setGotAllEvents(true);

        setEventName(responseData.event.eventname);
        setTime(responseData.event.time);
        setDate(responseData.event.date);
        setLocation(responseData.event.location);
        setImages(responseData.event.images[0]);
        setClubImage(responseData.event.club_image);
        setClubs(responseData.event.club);
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest, eventID]); //dependencies of useEffect
  // console.log(loadedEventName);

  let club_name = "";
  if (setClubs.length > 0 && gotAllEvents && loadedClubs) {
    console.log("->date UNDEF", loadedDate);
    gotAllData = true;
    if (loadedClubs.length > 0) {
      club_name = loadedClubs[0].replace("_", " ");
    }
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
          {/* <h1 className="basic-title-styles">{loadedEventName}</h1> */}
          <h2 className="basic-title-styles">About the Event</h2>

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
                    src={loadedImages}
                    style={{
                      height: "7rem",
                      width: "7rem",
                      margin: "1rem",
                    }}
                  />
                </Col>
                <Col md={8} className="align-self-center">
                  <Card.Title style={{ fontSize: 30 }}>
                    {loadedEventName}
                  </Card.Title>
                </Col>
                <Col md={2} className="align-self-center">
                  <Button variant="primary">RSVP</Button>
                </Col>
              </Row>
              <h5 className="basic-title-styles">Date and Time</h5>
              <p style={{ marginLeft: "2rem" }}>{loadedTime}</p>
              <h5 className="basic-title-styles">Location</h5>
              <p style={{ marginLeft: "2rem" }}>{loadedLocation}</p>
              <h5 className="basic-title-styles">Description</h5>
              <Card.Text style={{ marginLeft: "2rem" }}>
                Welcome!
                <br />
                A time to celebrate the 2022 graduates before they leave!
                <br />
              </Card.Text>
              <h5 className="basic-title-styles">Host Organization</h5>
              <p style={{ marginLeft: "2rem" }}>{club_name}</p>
            </Card.Body>
          </Card>

          <h2 className="basic-title-styles">
            Other events hosted by this club:
          </h2>
          <Container
            style={{
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              margin: "3%",
            }}
          ></Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EventInfo;
