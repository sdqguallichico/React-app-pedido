import { Flex } from "antd";
import React from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const MainContent = () => {
    return (
    <div style={{flex: 1}}>
        <Flex vertical gap="2.3rem">
            <Dashboard/>
        </Flex>
    </div>
)
};

export default MainContent;