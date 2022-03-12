import React from "react";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import img1 from "../images/club_pic.png";
import img2 from "../images/club_symbol.png";

import "./Clubs.css";

import { CardGroup, Card, Carousel } from "react-bootstrap";

const CLUBS = [
  {
    clubName: "Volleyball Association",
    id: "c1",
    image: img1,
    description: "We play volleyball.",
    symbol: img2,
  },
  {
    clubName: "Accounting Society",
    id: "c2",
    image: event_img2,
    description: "Whats new in counting things...",
    symbol: img2,
  },
  {
    clubName: "Aero Mavericks",
    id: "c3",
    image: event_img1,
    description: "We are aerospace engineering student organization",
    symbol: img2,
  },
];

// const Clubs = () => {
//   return (
//     <React.Fragment>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             UNIVENT
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   Dashboard
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/events">
//                   Events
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Organizations
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Profile
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 style={{ color: "white" }}
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>

//       <div className="container">
//         <div className="card-group">
//           {CLUBS.map((club) => (
//             <div
//               style={{ margin: "10px" }}
//               key={club.id}
//               className="card-custom"
//             >
//               <img src={club.image} className="card-img" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{club.clubName}</h5>
//                 <p className="card-text">{club.description}</p>
//               </div>
//               <div className="card-footer">
//                 <img
//                   style={{ height: "50px", width: "50px", margin: "5px" }}
//                   src={img2}
//                 />
//                 <small className="text-muted">{club.clubName}</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

const Clubs = () => {
  return (
    <React.Fragment>
      <Carousel>
        {CLUBS.map((c) => (
          <Carousel.Item interval={1000}>
            <CardGroup>
              {CLUBS.map((c) => (
                <Card style={{ margin: "2%" }}>
                  <Card.Img
                    variant="top"
                    src={c.image}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{c.clubName}</Card.Title>
                    <h5>{c.title}</h5>
                    <Card.Text>{c.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <img
                      style={{
                        margin: "2%",
                        height: "3.5rem",
                        width: "3.5rem",
                      }}
                      src={c.symbol}
                    />
                    <small className="text-muted">{c.clubName}</small>
                  </Card.Footer>
                </Card>
              ))}
            </CardGroup>
          </Carousel.Item>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default Clubs;
