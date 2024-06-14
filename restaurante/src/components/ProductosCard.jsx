import { useNavigate } from "react-router-dom";

export function ProductosCard({producto}) {
    const navigate = useNavigate()
  return (
    <div
    onClick={() => {
        navigate('/productos/editar/' + producto.id)
    }} 
    >
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <hr />
    </div>
  );
}
