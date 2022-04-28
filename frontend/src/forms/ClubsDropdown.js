import React from "react";
import {
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const ALL_CLUBS = [
  "Chess Club",
  "Accounting Association",
  "UTA Coders Society"
];

function ClubsDropdown(props) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Select Club">
      {ALL_CLUBS.map((club) => (
        <Dropdown.Item> {club} </Dropdown.Item>
      ))}
    </DropdownButton>
  )
}

export default ClubsDropdown;