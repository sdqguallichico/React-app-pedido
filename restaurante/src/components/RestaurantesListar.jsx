import { useEffect, useState } from "react";
import { getAllRestaurantes, borrarRestaurante } from "../api/restaurante.api";

import RestaurantesPage from "./RestaurantesCard";


export function RestaurantesListar() {
  const [restaurantes, setRestaurantes] = useState([]);


  useEffect(() => {
    async function cargarR() {
      const res = await getAllRestaurantes();
      setRestaurantes(res.data);
    }

    cargarR();
  }, []);

  return (
    <RestaurantesPage restaurantes={restaurantes} />
  );
}