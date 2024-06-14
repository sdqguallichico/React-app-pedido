import { useForm } from "react-hook-form";
import {
  crearProducto,
  borrarProducto,
  editarProducto,
  getbyId,
} from "../api/producto.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductosCrear = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await editarProducto(params.id, data);
      toast.success("Producto Actualizado Con Exito", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await crearProducto(data);
      toast.success("Producto Creado Con Exito", {
        position: "bottom-center",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/productos");
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const res = await getbyId(params.id);
        console.log(res);
        setValue("nombre", res.data.nombre);
        setValue("descripcion", res.data.descripcion);
        setValue("precio", res.data.precio);
      }
    }
    loadProduct();
  }, []);

  return (
    <div className="container">
      <div className="login-box">
        <h2>Agrega Un Producto</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="nombre"
              {...register("nombre", { required: true })}
            />
            <label>
              Nombre:
              {errors.nombre && <span>Este Campo Es Requerido</span>}
            </label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="descripcion"
              {...register("descripcion", { required: true })}
            />
            <label>
              Descripcion:
              {errors.descripcion && <span>Este Campo Es Requerido</span>}
            </label>
          </div>
          <div className="user-box">
            <input
              type="number"
              name="precio"
              id=""
              {...register("precio", { required: true })}
            />
            <label>Precio:</label>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductosCrear;
