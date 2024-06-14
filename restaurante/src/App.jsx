import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Button,Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Navigation } from "./components/Navigation";
import MainContent from "./components/MainContent";

import Productos from "./pages/Productos";

import "./App.css";
import ProductosCrear from "./pages/ProductosCrear";
import { Toaster } from "react-hot-toast";

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <Sidebar className="us" />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="trigger-btn"
          />
        </Sider>

        <Layout>
          <Header className="header">
            <CustomHeader />
          </Header>
          <Content className="content">
          <Flex gap="large">
       
          <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productosc" element={<ProductosCrear />} />
              <Route
                path="/productos/editar/:id"
                element={<ProductosCrear />}
              />
              <Route path="/" element={<Dashboard />} />
            </Routes>
            <Toaster />
          </Flex>
            

           
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
