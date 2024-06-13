import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import Productos from "./pages/Productos";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/productos" element={<Productos />} />
    </Routes>
  </Router>
);

export default AppRoutes;
