import React from "react";

import Card from "../shared/components/UIElements/Card";
import EventItem from "./EventItem";
import Button from "../shared/components/FormElements/Button";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import "./EventList.css";

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
    <div>
      <div className="container">
        <div className="card-group">
          {EVENTS.map((ev) => (
            <div key={ev.id} className="card">
              <img src={ev.image} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ev.title}</h5>
                <p className="card-text">{ev.date}</p>
                <p className="card-text">{ev.address}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{ev.organizedBy}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {EVENTS.map((e) => (
        <div className="card-group">
          <EventItem
            key={e.id}
            id={e.id}
            image={e.image}
            title={e.title}
            date={e.date}
            address={e.address}
          />
        </div>
      ))} */}
    </div>
  );
};

export default EventList;
