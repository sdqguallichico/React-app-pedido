import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Layout, Button, Row, Col, Modal  } from "antd";
const { Title, Text } = Typography;
const { Header, Content } = Layout;
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { borrarProducto, getAllProduct , oBpr} from "../api/producto.api";
const { confirm } = Modal;

export function ProductosCard({ producto }) {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await oBpr();
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };



  const handleEliminar = () => {
    Modal.confirm({
      title: "Confirmar Eliminación",
      icon: <ExclamationCircleOutlined />,
      content: `¿Estás seguro de eliminar el producto "${producto.nombre}"?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        borrarProducto(producto.id)
          .then(() => {
            Modal.success({
              content: "Producto eliminado exitosamente",
            });
            // Aquí puedes redirigir a otra página o realizar alguna otra acción
            navigate("/productos")
          })
          .catch((error) => {
            Modal.error({
              title: "Error al eliminar",
              content: `Ocurrió un error al eliminar el producto: ${error.message}`,
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
          <h3>Producto: {producto.id}</h3>
          <p>
            <strong>Nombre: </strong>
            {producto.nombre}
          </p>
          <p>
            <strong>Descripcion: </strong> {producto.descripcion}
          </p>
          <p>
            <strong>Tipo: </strong> {producto.precio}
          </p>

          <div className="actions">
            
            <button className="btn-edit" onClick={() => {
        navigate("/productos/editar/" + producto.id);
      }}>Modificar</button>
            <button className="btn-sup" onClick={handleEliminar}> Eliminar</button>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

const ProductosPage=()=> {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await oBpr();
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await borrarProducto(id);
      cargarProductos(); // Vuelve a cargar los productos después de eliminar
      Modal.success({
        content: "Producto eliminado exitosamente",
      });
    } catch (error) {
      Modal.error({
        title: "Error al eliminar",
        content: `Ocurrió un error al eliminar el producto: ${error.message}`,
      });
    }
  };

  return (
    <Layout>
      <Header style={{ background: "#fff" }} className="hp">
        <Button type="default" onClick={() => navigate("/productosc")}>
          Crear Producto
        </Button>
      </Header>
      <Content>
        <Row gutter={[16, 16]}>
          {productos.map((producto) => (
            <Col key={producto.id}>
              <ProductosCard producto={producto} onDelete={() => handleEliminar(producto.id)} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}

export default ProductosPage;
