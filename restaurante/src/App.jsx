import { Button, Layout, Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import React, { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import "./App.css";
import { SiTrueup } from "react-icons/si";
import SideContent from "./components/SideContent";
import MainContent from "./components/MainContent";
import AppRoutes from "./Routes";

const { Sider, Header, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <AppRoutes />
        <Sidebar className="us" />

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="triger-btn"
        />
      </Sider>

      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
