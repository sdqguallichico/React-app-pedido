import axios from "axios";

export const getAllProduct = () => {
    return axios.get('http://localhost:8084/productos/listar')
}