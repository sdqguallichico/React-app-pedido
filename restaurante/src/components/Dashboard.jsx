import React from "react";
import { Card, Flex, Typography } from "antd";
import { Navigation } from "./Navigation";

const Dashboard = () => {
  return (
    <Card style={{ height: 475, padding: "20px", margin: 5 }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Titlo
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            <Navigation />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            explicabo veritatis id vel quibusdam cum corporis ipsa fugit quas
            voluptate quis consequuntur suscipit ut, sint accusamus aspernatur
            ipsam, accusantium distinctio.
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Dashboard;
