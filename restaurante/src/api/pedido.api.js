import axios from "axios";

export const getAllPedidos = () => {
    return axios.get('http://localhost:8084/pedidos/listar')
}

export const getbyId = (id) =>{
    return axios.get('http://localhost:8084/pedidos/obtener/'+ id )
}

export const crearPedido = (pedido) =>{
    return axios.post('http://localhost:8084/pedidos/crear', pedido)
}

export const borrarPedido = (id) =>{
    return axios.delete('http://localhost:8084/pedidos/borrar/'+ id )
}

export const editarPedido = (id, pedido) =>{
    return axios.put('http://localhost:8084/pedidos/actualizar/'+ id, pedido )
}
