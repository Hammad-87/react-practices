import React from "react";
import { Row, Col, Image } from "react-bootstrap";
function User(props) {
  const { user } = props;
  console.log(user);
  return (
    <div>
      <Row>
        <Col xs={4}>
          <Image style={{ width: "100%" }} src={user.picture.large} />
        </Col>
        <Col xs={8}>
          <h1>{user.name.first + " " + user.name.last}</h1>
        </Col>
      </Row>
    </div>
  );
}

export default User;
