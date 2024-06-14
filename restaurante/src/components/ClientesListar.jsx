import { useEffect, useState } from "react";
import { getAllClientes, borrarCliente } from "../api/cliente.api";

import ClientePage from "./ClientesCard";


export function ClientesListar() {
  const [clientes, setClientes] = useState([]);


  useEffect(() => {
    async function cargarC() {
      const res = await getAllClientes();
      setClientes(res.data);
    }

    cargarC();
  }, []);

  return (
    <ClientePage clientes={clientes} />
  );
}
