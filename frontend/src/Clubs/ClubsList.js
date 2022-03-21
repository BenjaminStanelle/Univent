import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";

const ClubsList = (props) => {
  return (
    <Row>
      <Col md={9}>
        {props.CLUBS.map((cb) => (
          <Card key={cb.id} style={{ margin: "1%", height: "10rem" }}>
            <Card.Header style={{ fontWeight: "bold" }}>
              {cb.clubName}
            </Card.Header>
            <Card.Body style={{ margin: "0%" }}>
              <Row>
                <Col md={2}>
                  <Card.Img
                    src={cb.symbol}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  />
                </Col>
                <Col md={8}>
                  <p style={{ textAlign: "left", paddingTop: "4.5%" }}>
                    Display club summary here.
                  </p>
                </Col>
                <Col md={2}>
                  <Button variant="primary" className="mt-4">
                    More Detail
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
      <Col md={3}>
        <InputGroup className="mb-3" style={{ height: "13%", margin: "1%" }}>
          <FormControl
            placeholder="Search Clubs"
            aria-label="Search Clubs"
            aria-describedby="basic-addon2"
            style={{ height: "60%", width: "70%", margin: "1%" }}
          />

          <Button
            type="submit"
            style={{ height: "60%", width: "25%", margin: "1%" }}
          >
            SEARCH
          </Button>
          <Container
            style={{
              height: "13%",
              margin: "1%",
              marginTop: "5%",
              padding: "1%",
            }}
          >
            <h5>Category</h5>
            <DropdownButton
              variant="outline-secondary"
              title="   Category   "
              id="input-group-dropdown-1"
              style={{
                width: "110%",
              }}
            >
              {props.CLUB_CATEGORIES.map((categ) => (
                <Dropdown.Item key={categ.id} href="#">
                  {categ.category}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Container>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default ClubsList;
