import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Layout, Button, Row, Col, Modal  } from "antd";
const { Title, Text } = Typography;
const { Header, Content } = Layout;
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { borrarRestaurante, getAllRestaurantes } from "../api/restaurante.api";
const { confirm } = Modal;

export function RestaurantesCard({ restaurante }) {
  const navigate = useNavigate();

  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    cargarRestaurantes();
  }, []);

  const cargarRestaurantes = async () => {
    try {
      const response = await getAllRestaurantes();
      setRestaurantes(response.data);
    } catch (error) {
      console.error("Error al cargar los restaurantes:", error);
    }
  };



  const handleEliminar = () => {
    Modal.confirm({
      title: "Confirmar Eliminación",
      icon: <ExclamationCircleOutlined />,
      content: `¿Estás seguro de eliminar el restaurante "${restaurante.nombrerestaurante}"?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        borrarRestaurante(restaurante.idrestaurante)
          .then(() => {
            Modal.success({
              content: "Restaurante eliminado exitosamente",
            });
            // Aquí puedes redirigir a otra página o realizar alguna otra acción
            navigate("/restaurantes")
          })
          .catch((error) => {
            Modal.error({
              title: "Error al eliminar",
              content: `Ocurrió un error al eliminar el restaurante: ${error.message}`,
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
          <h3>{restaurante.idrestaurante} : {restaurante.nombrerestaurante}</h3>
          <p>
            <strong>Nombre: </strong>
            {restaurante.nombrerestaurante}
          </p>
          <p>
            <strong>Direccion: </strong> {restaurante.direccion}
          </p>
          <p>
            <strong>Telefono: </strong> {restaurante.telefono}
          </p>

          <div className="actions">
            
            <button className="btn-edit" onClick={() => {
        navigate("/restaurantes/editar/" + restaurante.idrestaurante);
      }}>Modificar</button>
            <button className="btn-sup" onClick={handleEliminar}> Eliminar</button>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

const RestaurantesPage=()=> {
  const navigate = useNavigate();
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    cargarRestaurantes();
  }, []);

  const cargarRestaurantes = async () => {
    try {
      const response = await getAllRestaurantes();
      setRestaurantes(response.data);
    } catch (error) {
      console.error("Error al cargar los restaurantes:", error);
    }
  };

  const handleEliminar = async (idrestaurante) => {
    try {
      await borrarRestaurante(idrestaurante);
      cargarRestaurantes(); // Vuelve a cargar los productos después de eliminar
      Modal.success({
        content: "Restarante eliminado exitosamente",
      });
    } catch (error) {
      Modal.error({
        title: "Error al eliminar",
        content: `Ocurrió un error al eliminar el restarante: ${error.message}`,
      });
    }
  };

  return (
    <Layout>
      <Header style={{ background: "#fff" }} className="hp">
        <Button type="default" onClick={() => navigate("/restaurantesc")}>
          Crear Restaurante
        </Button>
      </Header>
      <Content>
        <Row gutter={[16, 16]}>
          {restaurantes.map((restaurante) => (
            <Col key={restaurante.idrestaurante}>
              <RestaurantesCard restaurante={restaurante} onDelete={() => handleEliminar(restaurante.idrestaurante)} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default RestaurantesPage;
