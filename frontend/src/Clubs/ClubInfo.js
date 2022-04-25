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

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
  return (
    <React.Fragment>
      {!gotAllClubs && (
        <Container style={{ textAlign: "center" }}>
          <LoadingSpinner />
        </Container>
      )}
      {gotAllClubs && (
        <React.Fragment>
          <h3 className="basic-title-styles">About the Club</h3>

          <Card>
            <Card.Body>
              <Col>
                <Card.Img
                  src={loadedImage}
                  style={{
                    height: "5.5rem",
                    width: "5.5rem",
                    borderRadius: "50%",
                    margin: "2rem",
                  }}
                />
                <Card.Title>{loadedClubName}</Card.Title>
              </Col>
              <Button variant="primary">Contact</Button>
              Welcome! The Maverick Chess Club is devoted to enjoying the game
              of chess and helping each other improve. Come enjoy this classic
              game of strategy and lets sharpen our minds together. -No dues or
              membership fees! -Players of all skill levels are welcome!

            </Card.Body>
            <Button
                    variant="info"
                    className="mt-4"
                    onClick={routeChange(clubID)}
                  >
                    Create Event
                  </Button>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ClubInfo;
