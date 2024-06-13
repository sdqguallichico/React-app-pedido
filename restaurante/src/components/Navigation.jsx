import { Link } from "react-router-dom";

export function Navigation(){
    return(
        <div>
            
            <Link to="/productos"><h1>Productos</h1></Link>
            <Link to="/productosc">Crear Producto</Link>
        </div>
    )
}