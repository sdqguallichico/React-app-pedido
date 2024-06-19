import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, Layout, Button, Row, Col, Modal } from "antd";
const { Header, Content } = Layout;
import "../App.css";
const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8084/api/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <Layout style={{ background: "#fff" , padding:20, }}>
    <Header style={{ background: "#fff" }} className="card-content">
    <h2>Menu</h2>
           </Header>
    <Content className='card' style={{ background: "#fff" , padding:25, margin:25,}}>
      <Row gutter={[16, 16]}>
        {menuItems.map((item) => (
          <Col key={item.id}>
            <h3>{item.nombre}</h3>
          <p>{item.descripcion}</p>
          <p>${item.precio}</p>
          <button className="btn-edit" onClick={() => addToCart(item)}>Añadir a Carrito</button>
          </Col>
        ))}
      </Row>
    </Content>
    </Layout>
  );
};

export default Menu;
