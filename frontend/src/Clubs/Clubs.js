import React, { useState, useEffect } from "react";
// import event_img1 from "../images/event_pic1.jpeg";
// import event_img2 from "../images/event_pic2.jpeg";
// import img1 from "../images/club_pic.png";
// import img2 from "../images/club_symbol.png";

import "./Clubs.css";

import { Carousel, Container } from "react-bootstrap";
import FeaturedClubs from "./FeaturedClubs";
import ClubsList from "./ClubsList";

// const CLUBS = [
//   {
//     clubName: "Volleyball Association",
//     id: "c1",
//     image: img1,
//     description: "We play volleyball.",
//     symbol: img2,
//   },
//   {
//     clubName: "Accounting Society",
//     id: "c2",
//     image: event_img2,
//     description: "Whats new in counting things...",
//     symbol: img2,
//   },
//   {
//     clubName: "Aero Mavericks",
//     id: "c3",
//     image: event_img1,
//     description: "We are aerospace engineering student organization",
//     symbol: img2,
//   },
// ];

// const FEATURED_CLUBS = [
//   {
//     clubName: "Volleyball Association",
//     id: "c1",
//     image: img1,
//     description: "We play volleyball.",
//     symbol: img2,
//   },
//   {
//     clubName: "Accounting Society",
//     id: "c2",
//     image: event_img2,
//     description: "Whats new in counting things...",
//     symbol: img2,
//   },
//   {
//     clubName: "Aero Mavericks",
//     id: "c3",
//     image: event_img1,
//     description: "We are aerospace engineering student organization",
//     symbol: img2,
//   },
// ];

// const CLUB_CATEGORIES = [
//   {
//     id: "c1",
//     category: "Academic Associations",
//   },
//   {
//     id: "c2",
//     category: "Cultural/International",
//   },
//   {
//     id: "c3",
//     category: "Recreational/Sports",
//   },
//   {
//     id: "c4",
//     category: "Religious",
//   },
//   {
//     id: "c5",
//     category: "Social Fraternities/Sororities",
//   },
//   {
//     id: "c6",
//     category: "Professional Societies",
//   },
//   {
//     id: "c7",
//     category: "Special Interests",
//   },
// ];

const Clubs = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const [isData, setIsData] = useState(false);

  const [allClubs, setAllClubs] = useState([]);
  const [featuredClubsList, setFeaturedClubsList] = useState([]);
  const [clubCategories, setClubCategories] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log("parsed - ", myJson);

        const { CLUBS, FEATURED_CLUBS, CLUB_CATEGORIES } = myJson;

        if (
          CLUBS.length > 0 &&
          FEATURED_CLUBS.length > 0 &&
          CLUB_CATEGORIES.length > 0
        ) {
          setAllClubs(CLUBS);
          setFeaturedClubsList(FEATURED_CLUBS);
          setClubCategories(CLUB_CATEGORIES);
          setIsData(true);
        }
      })
      .catch((error) => {
        console.error("err -> ", error);
      });
  };
  useEffect(() => {
    getData();
    // GetDateAsync();
  }, []);

  return (
    <React.Fragment>
      {!isData && <h3>Data Not Available</h3>}
      {isData && (
        <React.Fragment>
          <h4 className="featured-text">Check out Featured Clubs</h4>
          <Carousel>
            {allClubs.map((c) => (
              <Carousel.Item key={c.id} interval={1000}>
                <FeaturedClubs FEATURED_CLUBS={featuredClubsList} />
              </Carousel.Item>
            ))}
          </Carousel>
          <Container>
            <h2 className="basic-title-styles">Organizations</h2>
            <ClubsList CLUBS={allClubs} CLUB_CATEGORIES={clubCategories} />
          </Container>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Clubs;
