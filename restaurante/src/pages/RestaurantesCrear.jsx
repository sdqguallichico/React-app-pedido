import { useForm } from "react-hook-form";
import {
  crearRestaurante,
  borrarRestaurante,
  editarRestaurante,
  getbyId,
} from "../api/restaurante.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const RestaurantesCrear = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();
  
    const onSubmit = handleSubmit(async (data) => {
      if (params.idrestaurante) {
        await editarRestaurante(params.idrestaurante, data);
        toast.success("Restaurantes Actualizado Con Exito", {
          position: "bottom-center",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      } else {
        await crearRestaurante(data);
        toast.success("Restaurante Creado Con Exito", {
          position: "bottom-center",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      }
      navigate("/restaurantes");
    });
  
    useEffect(() => {
      async function loadRestaurantes() {
        if (params.idrestaurante) {
          const res = await getbyId(params.idrestaurante);
          console.log(res);
          setValue("nombrerestaurante", res.data.nombrerestaurante);
          setValue("direccion", res.data.direccion);
          setValue("telefono", res.data.telefono);
        }
      }
      loadRestaurantes();
    }, []);
  
    return (
      <div className="container">
        <div className="login-box">
          <h2>Agrega Un Restaurante</h2>
          <form onSubmit={onSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="nombrerestaurante"
                {...register("nombrerestaurante", { required: true })}
              />
              <label>
                Nombre:
                {errors.nombrerestaurante && <span>Este Campo Es Requerido</span>}
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="direccion"
                {...register("direccion", { required: true })}
              />
              <label>
                Direccion:
                {errors.direccion && <span>Este Campo Es Requerido</span>}
              </label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="telefono"
                {...register("telefono", { required: true })}
              />
              <label>
                Telefono:
                {errors.telefono && <span>Este Campo Es Requerido</span>}
              </label>
            </div>
            
  
            <button type="submit">
              <span></span>
              <span></span>
              Guardar Registro
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RestaurantesCrear;
  