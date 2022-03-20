import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
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
          <Card style={{ margin: "1%", height: "7rem" }}>
            <Card.Body style={{ margin: "1%" }}>
              <Card.Img
                src={cb.symbol}
                style={{
                  height: "100%",
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              This is some text within a card body.
            </Card.Body>
          </Card>
        ))}
      </Col>
      <Col md={3}>
        <InputGroup className="mb-3" style={{ height: "13%", margin: "1%" }}>
          <FormControl
            placeholder="Search Organizations"
            aria-label="Search Organizations"
            aria-describedby="basic-addon2"
            style={{ height: "100%", width: "70%", margin: "1%" }}
          />

          <Button
            type="submit"
            style={{ height: "100%", width: "25%", margin: "1%" }}
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
              title="Category"
              id="input-group-dropdown-1"
              style={{
                width: "110%",
              }}
            >
              {props.CLUB_CATEGORIES.map((categ) => (
                <Dropdown.Item href="#">
                  <Form.Check
                    type="checkbox"
                    id={categ.category}
                    label={categ.category}
                  />
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
