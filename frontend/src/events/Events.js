import React, { useEffect, useState } from "react";

// import Card from "../shared/components/UIElements/Card";
// import Button from "../shared/components/FormElements/Button";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import { useHttpClient } from "../shared/hooks/http-hook";
import "./EventList.css";
import EventsList from "./EventsList";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHistory } from "react-router-dom";

import {
  Carousel,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Card,
  CardGroup,
  Button,
  Container,
} from "react-bootstrap";

const EVENTS = [
  {
    id: "e1",
    title: "Tea with Teik: Q&A with UTAs Interim President",
    image: event_img1,
    date: "Friday, March 4 at 12:00PM CST",
    address: "Palo Duro Lounge",
    organizedBy: "UTA members Society",
  },
  {
    id: "e2",
    title: "Women in Leadership",
    image: event_img2,
    date: "Friday, March 6 at 04:00PM CST",
    address: "Central Library",
    organizedBy: "Women Coding Organization",
  },
  {
    id: "e3",
    title: "Executive Board Meeting",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Friday, March 10 at 12:00PM CST",
    address: "University Center Campus",
    organizedBy: "Board at UTA",
  },
];

const EventList = (props) => {
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [key, setKey] = useState("");
  let gotAllData = false;
  /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/
  const [existingEvents, setExistingEvents] = useState();

  const { sendRequest } = useHttpClient();
  //gets dynamic user id front the URL.
  //const userId = useParams().userId;

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

  const searchEvents = (keywords) => {
    fetch("http://localhost:5000/api/search", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword: keywords }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.events);
        setEvents(data.events);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (EVENTS.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  if (existingEvents) {
    gotAllData = true;
  }
  //goes through every place we have and renders a <PlaceItem> for every place
  return (
    <React.Fragment>
      {!gotAllData && (
        <Container style={{ textAlign: "center" }}>
          <LoadingSpinner />
        </Container>
      )}
      {gotAllData && (
        <React.Fragment>
          <div>
            <h2 className="basic-title-styles">EVENTS</h2>
            <Row>
              <Col md={3}>
                <InputGroup
                  className="mb-3"
                  style={{ height: "10%", margin: "1%" }}
                >
                  <FormControl
                    placeholder="Search Events"
                    aria-label="Search Events"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      setKey(e.target.value);
                    }}
                    style={{ height: "100%", width: "70%", margin: "1%" }}
                  />

                  <Button
                    type="submit"
                    onClick={() => {
                      searchEvents(key);
                    }}
                    style={{ height: "100%", width: "25%", margin: "1%" }}
                  >
                    SEARCH
                  </Button>

                  <div className="d-flex justify-content-lg-center">
                    <Col md={9}>
                      {events.length == 0 ? <div></div> : <h3>Events</h3>}

                      {events.map((item, index) => {
                        return (
                          <Card
                            key={item._id}
                            style={{
                              margin: "1%",
                              paddingRight: "50px",
                              paddingLeft: "30px",
                            }}
                          >
                            <Card.Body>
                              <Row>
                                <p style={{ fontFamily: "Copperplate" }}>
                                  {console.log(item)}
                                  {item.eventname}
                                </p>

                                <Button
                                  style={{
                                    marginLeft: "30px",
                                    marginRight: "10px",
                                  }}
                                  variant="primary"
                                  onClick={() => {
                                    let path = "/events/" + item._id;

                                    history.push(path, item);
                                  }}
                                >
                                  {" "}
                                  Detail{" "}
                                </Button>
                              </Row>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </Col>
                  </div>

                  {/* <div
                    key={"default-radio"}
                    className="mb-3"
                    style={{ margin: "1rem" }}
                  >
                    <Form.Check type="radio" id="weekend" label="Weekend" />
                    <Form.Check type="radio" id="tomorrow" label="Tomorrow" />
                  </div> */}
                </InputGroup>
              </Col>

              <Col md={9}>
                <Carousel>
                  {EVENTS.map((ev) => (
                    <Carousel.Item key={ev.id} interval={2500}>
                      <CardGroup>
                        {EVENTS.map((evt) => (
                          <Card key={evt.id} style={{ margin: "1%" }}>
                            <Card.Img
                              variant="top"
                              src={evt.image}
                              style={{ height: "15rem", width: "100%" }}
                            />
                            <Card.Body>
                              <Card.Title>{evt.title}</Card.Title>
                              <Card.Text>{evt.date}</Card.Text>
                              <Card.Text>{evt.address}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted">
                                {evt.organizedBy}
                              </small>
                            </Card.Footer>
                          </Card>
                        ))}
                      </CardGroup>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </div>
          <EventsList EVENTS={existingEvents} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EventList;