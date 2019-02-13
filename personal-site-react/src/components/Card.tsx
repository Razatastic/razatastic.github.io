import React from "react";
import { Card, Icon } from "antd";

const GreetingCard = () => {
  return (
    <div className="center">
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <Icon type="github" />,
          <Icon type="linkedin" />,
          <Icon type="mail" />
        ]}
      >
        <h1>Hello,</h1>
        <h2>I'm Ahmad.</h2>
      </Card>
    </div>
  );
};

export default GreetingCard;
