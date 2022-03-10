import React from "react";

import Card from "../shared/components/UIElements/Card";
import Button from "../shared/components/FormElements/Button";
import "./EventItem.css";

const EventItem = (props) => {
  return (
    <li className="event-item">
      <Card className="event-item__content">
        <div className="event-item__image">
          <img src={props.image} alt="imge" />
        </div>

        <div className="event-item__info">
          <h2>{props.title}</h2>
          <p>{props.address}</p>
          <p>{props.date}</p>
        </div>

        <div className="event-item__actions">
          <Button>Organized by Multicultural Affairs</Button>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;
