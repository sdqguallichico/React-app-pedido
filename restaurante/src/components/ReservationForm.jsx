import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReservationForm = ({ cart }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cedula, setCedula] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      nombre,
      correo,
      telefono,
      cedula,
      
    };

    axios
      .post("http://localhost:8084/api/reservations", reservation)
      .then((response) => {
        alert("Reservation successful!");
      }) 
      .catch((error) => console.error("Error creating reservation:", error));
      navigate("/reservas")

  };

  return (
    <div className="" style={{ background: "#ffff" }}>
      <div className="login-box">
        <h2>Pedido Cliente</h2>
        <form onSubmit={handleSubmit} method="POST">
          <div className="user-box">
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Nombre:</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="correo"
              id=""
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label>Correo:</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name="telefono"
              id=""
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label>Telefono:</label>
          </div>

          <div className="user-box">
            <input
              type="text"
              name="cedula"
              id=""
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            <label>Cedula:</label>
          </div>

          <button type="submit" >
            <span></span>
            <span></span>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
