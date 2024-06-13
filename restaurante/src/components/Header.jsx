import React from "react";
import { Avatar, Flex, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CustomHeader = () => {
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        Bienvenidos Un Placer Tenerte Aqui
      </Typography.Title>

      <Flex align="center" gap="3rem">
        <Avatar icon={<UserOutlined />} />
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
