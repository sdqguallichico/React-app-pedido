import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Productos } from "./pages/Productos";
import { ProductosCrear } from "./pages/ProductosCrear";
import { Inicio } from "./pages/inicio";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productosc" element={<ProductosCrear />} />
        <Route path="/productos/editar/:id" element={<ProductosCrear />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
