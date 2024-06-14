import axios from "axios";

export const getAllClientes = async() => {
    return axios.get('http://localhost:8084/clientes/listar')
}

export const getClientebyId = (id) =>{
    return axios.get('http://localhost:8084/clientes/obtener/'+ id )
}

export const crearCliente = (cliente) =>{
    return axios.post('http://localhost:8084/clientes/registro', cliente)
}

export const borrarCliente = (id) =>{
    return axios.delete('http://localhost:8084/clientes/borrar/'+ id )
}

export const editarCliente = (id, cliente) =>{
    return axios.put('http://localhost:8084/clientes/actualizar/'+ id, cliente )
}
