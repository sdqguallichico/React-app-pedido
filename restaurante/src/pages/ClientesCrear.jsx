import { useForm } from "react-hook-form";
import { crearCliente,editarCliente,getClientebyId } from "../api/cliente.api";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ClientesCrear = () =>{
    const {register,handleSubmit, formState:{errors},setValue,}= useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async(data) =>{
        if (params.id) {
            await editarCliente(params.id, data)
            toast.success("Cliente Actualizado Con Exito", {
                position: "bottom-center",
                style: {
                background: "#101010",
                color: "#fff",
        },
            });
        } else {
            await crearCliente(data);
            toast.success("Cliente Creado Con Exito",{
                position: "bottom-center",
                style: {
                background: "#101010",
                color: "#fff",
                },
            });
        }
        navigate("/clientes");
    });

    useEffect(() => {
        async function loadCliente() {
            if(params.id) {
                const res = await getClientebyId(params.id);
                setValue("cedula", res.data.cedula);
                setValue("nombre", res.data.nombre);
                setValue("correo", res.data.correo);
            }
        }
        loadCliente();
    },[]);

    return (
        <div className="container">
      <div className="login-box">
        <h2>Agrega Un Cliente</h2>
        <form onSubmit={onSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="cedula"
              {...register("cedula", { required: true })}
            />
            <label>
              Cedula:
              {errors.cedula && <span>Este Campo Es Requerido</span>}
            </label>
          </div>
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
              name="correo"
              id=""
              {...register("correo", { required: true })}
            />
            <label>
            Correo:
            {errors.correo && <span>Este Campo Es Requerido</span>}
            </label>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            Guardar 
          </button>
        </form>
      </div>
    </div>
    );
};


export default ClientesCrear;