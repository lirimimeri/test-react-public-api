import React from "react";
import { Col, Card, CardBody, Button } from "reactstrap";

const User = (props) => {
  return (
    <Col className="col-xl-3 col-sm-12 col-md-6">
      <Card>
        <img alt="Card cap" className="card-img-top" src={props.img} />

        <CardBody>
          <h4>{props.username}</h4>
          <h5>{props.name}</h5>
          <p>
            <i className="fas fa-map-marker-alt fa-2x"></i>
            {props.city}
          </p>
          <i>
            <p>{props.street}</p>
          </i>
          <i>
            <p>{props.suite}</p>
          </i>
          <div className="text-center w-100">
            <Button 
              color="dark" 
              onClick={props.showModal}>
              Main Profile
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default User;
