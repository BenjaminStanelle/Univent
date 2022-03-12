import React from "react";

import Card from "../shared/components/UIElements/Card";
import Button from "../shared/components/FormElements/Button";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import "./EventList.css";

import { Carousel } from "react-bootstrap";

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
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "Friday, March 10 at 12:00PM CST",
    address: "University Center Campus",
    organizedBy: "Board at UTA",
  },
];

const EventList = (props) => {
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
  //goes through every place we have and renders a <PlaceItem> for every place
  return (
    <Carousel>
      {EVENTS.map((ev) => (
        <Carousel.Item interval={2500}>
          <div className="card-group">
            {EVENTS.map((evt) => (
              <div key={evt.id} className="card">
                <img src={evt.image} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{evt.title}</h5>
                  <p className="card-text">{evt.date}</p>
                  <p className="card-text">{evt.address}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{evt.organizedBy}</small>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventList;
