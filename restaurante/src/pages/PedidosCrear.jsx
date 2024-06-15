import { useForm } from "react-hook-form";
import {
    crearPedido,
    borrarPedido,
    editarPedido,
    getbyId,
} from "../api/pedido.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const PedidosCrear = () => {
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
            await editarPedido(params.id, data);
            toast.success("Pedido Actualizado Con Exito", {
                position: "bottom-center",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await crearPedido(data);
            toast.success("Pedido Creado Con Exito", {
                position: "bottom-center",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }
        navigate("/pedidos");
    });

    useEffect(() => {
        async function loadPedidos() {
            if (params.id) {
                const res = await getbyId(params.id);
                console.log(res);
                setValue("descripcion", res.data.descripcion);
                setValue("numeropersonas", res.data.numeropersonas);
                setValue("total", res.data.total);
                setValue("fechaHora", res.data.fechaHora)
            }
        }
        loadPedidos();
    }, []);

    return (
        <div className="container">
            <div className="login-box">
                <h2>Agrega Un Pedido</h2>
                <form onSubmit={onSubmit}>
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
                            name="numeropersonas"
                            id=""
                            {...register("numeropersonas", { required: true })}
                        />
                        <label>Personas:</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="number"
                            name="total"
                            id=""
                            {...register("total", { required: true })}
                        />
                        <label>Total:</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="date"
                            name="fechaHora"
                            {...register("fechaHora", { required: true })}
                        />
                        <label>
                            Fecha:
                            {errors.fecha && <span>Este Campo Es Requerido</span>}
                        </label>
                    </div>


                    <button type="submit">
                        <span></span>
                        <span></span>
                        Guardar Pedido
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PedidosCrear;
