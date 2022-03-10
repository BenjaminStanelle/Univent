import React from "react";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import img1 from "../images/club_pic.png";
import img2 from "../images/club_symbol.png";

import "./Clubs.css";

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
//     <div id="demo" className="carousel slide" data-ride="carousel">
//       <ul className="carousel-indicators">
//         <li data-target="#demo" data-slide-to="0" className="active"></li>
//         <li data-target="#demo" data-slide-to="1"></li>
//         <li data-target="#demo" data-slide-to="2"></li>
//       </ul>

//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic2" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e2" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic2" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e2" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic1" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e1" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="card">
//                 <img className="card-img-top" src={event_img1} alt="pic2" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <a href="#e2" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <a className="carousel-control-prev" href="#demo" data-slide="prev">
//         <span className="carousel-control-prev-icon"></span>
//       </a>
//       <a className="carousel-control-next" href="#demo" data-slide="next">
//         <span className="carousel-control-next-icon"></span>
//       </a>
//     </div>
//   );
// };

// export default Clubs;

const Clubs = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            UNIVENT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Organizations
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                style={{ color: "white" }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card-group">
          {CLUBS.map((club) => (
            <div style={{ margin: "10px" }} key={club.id} className="card">
              <img src={club.image} className="card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{club.clubName}</h5>
                <p className="card-text">{club.description}</p>
              </div>
              <div className="card-footer">
                <img
                  style={{ height: "50px", width: "50px", margin: "5px" }}
                  src={img2}
                />
                <small className="text-muted">{club.clubName}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clubs;
