import React from 'react';
import { Card, Typography, Layout, Button, Row, Col, Modal } from "antd";
import { useNavigate } from 'react-router-dom';
const { Header, Content } = Layout;

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ background: "#fff" , padding:20, }}>
    <Header style={{ background: "#fff" }} className="card-content">
    <h2>Orden</h2>
           </Header>
    <Content className='card' style={{ background: "#fff" , padding:25, margin:25,}}>
      <Row gutter={[16, 16]}>
        {cart.map((item, index) => (
          <Col key={index}>
            <h3>{item.nombre}</h3>
          <p>${item.precio}</p>
                    <button onClick={() => removeFromCart(index)}>Quitar</button>

          </Col>
        ))}
      </Row>
      <Button type="default" onClick={() => navigate("/reservas/pedido")}>
          Crear Reserva
        </Button>

    </Content>
    
    </Layout>
  );
};

export default Cart;
