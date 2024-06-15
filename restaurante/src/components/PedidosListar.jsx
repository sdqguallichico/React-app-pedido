import { useEffect, useState } from "react";
import { getAllPedidos, borrarPedido } from "../api/pedido.api";

import PedidosPage from "./PedidosCard";


export function PedidosListar() {
  const [pedidos, setPedidos] = useState([]);


  useEffect(() => {
    async function cargarPedido() {
      const res = await getAllPedidos();
      setPedidos(res.data);
    }

    cargarPedido();
  }, []);

  return (
    <PedidosPage pedidos={pedidos} />
  );
}
