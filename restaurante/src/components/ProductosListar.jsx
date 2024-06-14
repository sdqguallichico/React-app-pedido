import { useEffect, useState } from "react";
import { getAllProduct, borrarProducto } from "../api/producto.api";

import ProductosPage from "./ProductosCard";


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
    <ProductosPage productos={productos} />
  );
}
