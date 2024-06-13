import React from "react";
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Productos from "./pages/Productos";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      
      <Route path="/productos" element={<Productos />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
