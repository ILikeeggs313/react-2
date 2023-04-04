import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
// import { drinks } from "./db.json";

function FoodMenu({ snacks, drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            {/* we have {snacks.length} available: */}
          </CardText>
          <ListGroup>
            {snacks && snacks.map(snack => (
              <Link to={`snacks/${snack.id}`} key={snacks.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <ListGroup>
            {drinks?.map(drink => (
              <Link to={`drinks/${drink.id}`} key={drinks.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
