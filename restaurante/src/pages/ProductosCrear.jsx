import { useForm } from "react-hook-form";
import {
    crearProducto,
    borrarProducto,
    editarProducto,
    getbyId,
} from "../api/producto.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function ProductosCrear() {
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
        } else {
            await crearProducto(data);
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
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && <span>Este Campo Es Requerido</span>}
                </label>
                <label>
                    Descripcion:
                    <input
                        type="text"
                        name="descripcion"
                        {...register("descripcion", { required: true })}
                    />
                    {errors.descripcion && <span>Este Campo Es Requerido</span>}
                </label>
                <label>
                    Precio:
                    <input
                        type="number"
                        name="precio"
                        id=""
                        {...register("precio", { required: true })}
                    />
                </label>
                <button>Guardar</button>
            </form>

            {params.id && (
                <button
                    onClick={async () => {
                        const aceptado = window.confirm("estas seguro");
                        if (aceptado) {
                            await borrarProducto(params.id);
                            navigate("/productos");
                        }
                    }}
                >
                    Borrar
                </button>
            )}
        </div>
    );
}