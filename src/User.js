import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

const User = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={user.picture} alt={user.name} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default User;
