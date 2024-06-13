import { Flex } from "antd";
import React from "react";
import Dashboard from "./Dashboard";

const MainContent = () => {
    return (
    <div style={{flex: 1}}>
        <Flex vertical gap="2.3rem">
            <Dashboard/>
        </Flex>
    </div>
)
};

export default MainContent