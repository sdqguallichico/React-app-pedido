import { useEffect, useState } from "react";
import { getAllProduct } from "../api/producto.api";

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
        <div>
            {productos.map(producto=>(
                <div>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcion}</p>
                </div>
            ))}
        </div>
    )
}
