import axios from "axios";
export const getAllRestaurantes = () => {
    return axios.get('http://localhost:8084/restaurantes/listar')
}

export const getbyId = (idrestaurante) =>{
    return axios.get('http://localhost:8084/restaurantes/obtener/'+ idrestaurante )
}

export const crearRestaurante = (restaurante) =>{
    return axios.post('http://localhost:8084/restaurantes/crear', restaurante)
}

export const borrarRestaurante = (idrestaurante) =>{
    return axios.delete('http://localhost:8084/restaurantes/borrar/'+ idrestaurante )
}

export const editarRestaurante = (idrestaurante, restaurante) =>{
    return axios.put('http://localhost:8084/restaurantes/actualizar/'+ idrestaurante, restaurante )
}
