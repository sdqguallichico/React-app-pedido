import { useEffect, useState } from "react";
import { getAllProduct } from "../api/producto.api";
import { ProductosCard } from "./ProductosCard";
import { Flex ,Layout} from "antd";
import { Navigation } from "./Navigation";
import CustomHeader from "./Header";
const { Sider, Header, Content } = Layout;
export function ProductosListar() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarP() {
      const res = await getAllProduct();
      setProductos(res.data);
    }

    cargarP();
  }, []);

  return (
    
    <Flex className="flex-wrap-container">
      {productos.map((producto, index) => (
        <ProductosCard key={index} producto={producto} />
      ))}
    </Flex>
  );
}
