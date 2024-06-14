import { useEffect, useState } from "react";
import { getAllProduct } from "../api/producto.api";
import { ProductosCard } from "./ProductosCard";

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
                <ProductosCard key={producto.id} producto={producto}/>
            ))}
        </div>
    )
}
