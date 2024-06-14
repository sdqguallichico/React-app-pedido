import { useNavigate } from "react-router-dom";
import { Card, Flex, Typography ,Layout} from "antd";
import { Navigation } from "./Navigation";

export function ProductosCard({ producto }) {
  const navigate = useNavigate();
  return (
    
   
   <Layout>
     
     <Card style={{ width: 300, height: 200, padding: "20px", margin: 3 }} onClick={() => {
      navigate('/productos/editar/' + producto.id)
    }}
    >
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={1} strong>
            {producto.nombre}
          </Typography.Title>


          <Typography.Text type="secondary" strong>
            {producto.descripcion}
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
   </Layout>
  );
}
