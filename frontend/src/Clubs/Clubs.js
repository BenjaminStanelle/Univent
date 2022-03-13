import React from "react";
import event_img1 from "../images/event_pic1.jpeg";
import event_img2 from "../images/event_pic2.jpeg";
import img1 from "../images/club_pic.png";
import img2 from "../images/club_symbol.png";

import "./Clubs.css";

import { Carousel, Container } from "react-bootstrap";
import FeaturedClubs from "./FeaturedClubs";
import ClubsList from "./ClubsList";

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

const FEATURED_CLUBS = [
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

const CLUB_CATEGORIES = [
  {
    id: "c1",
    category: "Academic Associations",
  },
  {
    id: "c2",
    category: "Cultural/International",
  },
  {
    id: "c3",
    category: "Recreational/Sports",
  },
  {
    id: "c4",
    category: "Religious",
  },
  {
    id: "c5",
    category: "Social Fraternities/Sororities",
  },
  {
    id: "c6",
    category: "Professional Societies",
  },
  {
    id: "c7",
    category: "Special Interests",
  },
];

const Clubs = () => {
  return (
    <React.Fragment>
      <h4 className="featured-text">Check out Featured Clubs</h4>
      <Carousel>
        {CLUBS.map((c) => (
          <Carousel.Item interval={1000}>
            <FeaturedClubs FEATURED_CLUBS={FEATURED_CLUBS} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        <h2 className="basic-title-styles">Organizations</h2>
        <ClubsList CLUBS={CLUBS} CLUB_CATEGORIES={CLUB_CATEGORIES} />
      </Container>
    </React.Fragment>
  );
};

export default Clubs;
