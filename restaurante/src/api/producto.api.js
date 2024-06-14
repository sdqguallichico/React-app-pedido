import axios from "axios";

export const getAllProduct = () => {
    return axios.get('http://localhost:8084/productos/listar')
}

export const getbyId = (id) =>{
    return axios.get('http://localhost:8084/productos/obtenerplato/'+ id )
}

export const crearProducto = (producto) =>{
    return axios.post('http://localhost:8084/productos/crearplato', producto)
}

export const borrarProducto = (id) =>{
    return axios.delete('http://localhost:8084/productos/borrarplato/'+ id )
}

export const editarProducto = (id, producto) =>{
    return axios.put('http://localhost:8084/productos/actualizarplato/'+ id, producto )
}
