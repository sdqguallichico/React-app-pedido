import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Layout, Button, Row, Col, Modal  } from "antd";
const { Title, Text } = Typography;
const { Header, Content } = Layout;
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { borrarPedido, getAllPedidos } from "../api/pedido.api";
const { confirm } = Modal;

export function PedidosCard({ pedido }) {
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    cargarPedidos();
  }, []);

  const cargarPedidos = async () => {
    try {
      const response = await getAllPedidos();
      setPedidos(response.data);
    } catch (error) {
      console.error("Error al cargar los Pedidos:", error);
    }
  };



  const handleEliminar = () => {
    Modal.confirm({
      title: "Confirmar Eliminación",
      icon: <ExclamationCircleOutlined />,
      content: `¿Estás seguro de eliminar el pedido "${pedido.id}"?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        borrarPedido(pedido.id)
        cargarPedidos()
          .then(() => {
            Modal.success({
              content: "Pedido eliminado exitosamente",
            });
            // Aquí puedes redirigir a otra página o realizar alguna otra acción
            navigate("/pedidos")
          })
          .catch((error) => {
            Modal.error({
              title: "Error al eliminar",
              content: `Ocurrió un error al eliminar el edido: ${error.message}`,
            });
          });
      },
    });
  };



  return (
    <div
      className="grid-container"
      
    >
      <div className="card">
        <div className="card-content">
          <h3>Pedido: {pedido.id}</h3>
          <p>
            <strong>Descripcion: </strong> {pedido.descripcion}
          </p>
          <p>
            <strong>Personas: </strong>
            {pedido.numeropersonas}
          </p>
          <p>
            <strong>Fecha: </strong>
            {pedido.fechaHora}
          </p>
          <p>
            <strong>Total: </strong> {pedido.total}
          </p>

          <div className="actions">
            
            <button className="btn-edit" onClick={() => {
        navigate("/pedidos/editar/" + pedido.id);
      }}>Modificar</button>
            <button className="btn-sup" onClick={handleEliminar}> Eliminar</button>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

const PedidosPage=()=> {
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    cargarPedidos();
  }, []);

  const cargarPedidos = async () => {
    try {
      const response = await getAllPedidos();
      setPedidos(response.data);
    } catch (error) {
      console.error("Error al cargar los Pedidos:", error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await borrarPedido(id);
      cargarPedidos(); // Vuelve a cargar los Pedidos después de eliminar
      Modal.success({
        content: "Pedido eliminado exitosamente miju",
      });
    } catch (error) {
      Modal.error({
        title: "Error al eliminar",
        content: `Ocurrió un error al eliminar el Pedido: ${error.message}`,
      });
    }
  };

  return (
    <Layout>
      <Header style={{ background: "#fff" }} className="hp">
        <Button type="default" onClick={() => navigate("/pedidosc")}>
          Crear Pedido
        </Button>
      </Header>
      <Content>
        <Row gutter={[16, 16]}>
          {pedidos.map((pedido) => (
            <Col key={pedido.id}>
              <PedidosCard pedido={pedido} onDelete={() => handleEliminar(pedido.id)} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default PedidosPage;
