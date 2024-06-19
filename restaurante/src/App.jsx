import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { Layout, Button,Flex } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Navigation } from "./components/Navigation";
import MainContent from "./components/MainContent";

import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes"
import Restaurantes from "./pages/Restaurantes"
import Pedidos from "./pages/Pedidos"

import "./App.css";
import ProductosCrear from "./pages/ProductosCrear";
import ClientesCrear from "./pages/ClientesCrear";
import { Toaster } from "react-hot-toast";
import LoginForm from "./components/LoginForm"
import RestaurantesCrear from "./pages/RestaurantesCrear";
import PedidosCrear from "./pages/PedidosCrear";

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState(null);
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
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/productos" element={user ? <Productos /> : <Navigate to="/login" />} />
                <Route path="/productosc" element={user ? <ProductosCrear /> : <Navigate to="/login" />} />
                <Route path="/productos/editar/:id" element={user ? <ProductosCrear /> : <Navigate to="/login" />} />
                <Route path="/clientes" element={user ? <Clientes /> : <Navigate to="/login" />} />
                <Route path="/clientesc" element={user ? <ClientesCrear /> : <Navigate to="/login" />} />
                <Route path="/clientes/editar/:id" element={user ? <ClientesCrear /> : <Navigate to="/login" />} />
                <Route path="/restaurantes" element={user ? <Restaurantes /> : <Navigate to="/login" />} />
                <Route path="/restaurantesc" element={user ? <RestaurantesCrear /> : <Navigate to="/login" />} />
                <Route path="/restaurantes/editar/:idrestaurante" element={user ? <RestaurantesCrear /> : <Navigate to="/login" />} />
                <Route path="/pedidos" element={user ? <Pedidos /> : <Navigate to="/login" />} />
                <Route path="/pedidosc" element={user ? <PedidosCrear /> : <Navigate to="/login" />} />
                <Route path="/pedidos/editar/:id" element={user ? <PedidosCrear /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to="/login" />} />
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
