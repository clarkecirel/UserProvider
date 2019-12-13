import React from "react";
import { Card, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";
import { UserContext, } from "../providers/UserProvider";

const User = () => {
  const user = useContext(UserContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ user.username }</Card.Header>
        <Card.Meta>
          Date Joined: { user.dateJoined }
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: { user.membershipLevel }</p>
      </Card.Content>
    </Card>
  );
};

export default User;