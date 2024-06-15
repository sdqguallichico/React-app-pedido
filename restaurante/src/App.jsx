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
import Clientes from "./pages/Clientes"
import Restaurantes from "./pages/Restaurantes"
import Pedidos from "./pages/Pedidos"

import "./App.css";
import ProductosCrear from "./pages/ProductosCrear";
import ClientesCrear from "./pages/ClientesCrear";
import { Toaster } from "react-hot-toast";
import RestaurantesCrear from "./pages/RestaurantesCrear";
import PedidosCrear from "./pages/PedidosCrear";

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

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
              <Route path="/productos/editar/:id"element={<ProductosCrear />}/>

              <Route path="/clientes" element={<Clientes />} />
              <Route path="/clientesc" element={<ClientesCrear />} />
              <Route path="/clientes/editar/:id" element={<ClientesCrear />} />

              <Route path="/restaurantes" element={<Restaurantes />} />
              <Route path="/restaurantesc" element={<RestaurantesCrear />} />
              <Route path="/restaurantes/editar/:idrestaurante" element={<RestaurantesCrear />} />

              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/pedidosc" element={<PedidosCrear />} />
              <Route path="/pedidos/editar/:id" element={<PedidosCrear />} />






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
