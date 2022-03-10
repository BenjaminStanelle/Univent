import React from "react";

// import Card from "../shared/components/UIElements/Card";
// import Button from "../shared/components/FormElements/Button";
import "./EventItem.css";

// const EventItem = (props) => {
//   return (
//     <li className="event-item">
//       <Card className="event-item__content">
//         <div className="event-item__image">
//           <img src={props.image} alt="imge" />
//         </div>

//         <div className="event-item__info">
//           <h2>{props.title}</h2>
//           <p>{props.address}</p>
//           <p>{props.date}</p>
//         </div>

//         <div className="event-item__actions">
//           <Button>Organized by Multicultural Affairs</Button>
//         </div>
//       </Card>
//     </li>
//   );
// };

// export default EventItem;

const EventItem = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.address}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.date}</small>
      </div>
    </div>
  );
};

export default EventItem;
