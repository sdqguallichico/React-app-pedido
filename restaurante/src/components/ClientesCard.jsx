import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography, Layout, Button, Row, Col, Modal } from "antd";
const { Title, Text } = Typography;
const { Header, Content } = Layout;
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { getAllClientes , borrarCliente} from "../api/cliente.api";
const { confirm } = Modal;

export function ClientesCard({ cliente }) {
    const navigate = useNavigate();

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        cargarClientes();
    }, []);

    const cargarClientes = async () => {
        try {
            const response = await getAllClientes();
            setClientes(response.data);
        } catch (error) {
            console.error("Error al cargar clientes", error);
        }
    };

    const handleEliminar = () => {
        Modal.confirm({
            title: "Confirmar Eliminación",
            icon: <ExclamationCircleOutlined />,
            content: `¿Estás seguro de eliminar el producto "${cliente.nombre}"?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                borrarCliente(cliente.id)
                .then(()=>{
                    Modal.success({
                        content:"Producto Eliminado Con Exito",
                    });
                    navigate("/clientes")
                })
                .catch((error) =>{
                    Modal.error({
                        title: "error al eliminar",
                        content: `Ocurrió un error al eliminar el producto: ${error.message}`,
                    });
                });
            },
        });
    };

    return(
        <div className="grid-container">
      <div className="card">
        <div className="card-content">
          <h3>Cliente: {cliente.id}</h3>
          <p>
            <strong>Cedula: </strong>
            {cliente.cedula}
          </p>
          <p>
            <strong>Nombre: </strong> {cliente.nombre}
          </p>
          <p>
            <strong>Correo: </strong> {cliente.correo}
          </p>

          <div className="actions">
            
            <button className="btn-edit" onClick={() => {
        navigate("/clientes/editar/" + cliente.id);
      }}>Modificar</button>
            <button className="btn-sup" onClick={handleEliminar}> Eliminar</button>
            
          </div>
        </div>
      </div>
      
    </div>

    );
}


const ClientesPage = () => {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        cargarClientes();
    },[]);

    const cargarClientes = async () => {
        try {
            const res = await getAllClientes();
            setClientes(res.data);
        } catch (error) {
            console.error("error al cargar clientes",error);
        }
    };

    const handleEliminar = async (id) => {
        try {
            await borrarCliente(id);
            cargarClientes();
            Modal.success({
                content:"cloiente eliminado exitosamente",
            });
        }catch (error){
            Modal.error({
                title: "Error al eliminar",
        content: `Ocurrió un error al eliminar el producto: ${error.message}`,
            });
        }
    };

    return (
        <Layout>
            <Header style={{ background: "#fff" }} className="hp">
        <Button type="default" onClick={() => navigate("/clientesc")}>
          Crear Cliente
        </Button>
      </Header>
      <Content>
        <Row gutter={[16, 16]}>
          {clientes.map((cliente) => (
            <Col key={cliente.id}>
              <ClientesCard cliente={cliente} onDelete={() => handleEliminar(cliente.id)} />
            </Col>
          ))}
        </Row>
      </Content>
        </Layout>
    )

}


export default ClientesPage;