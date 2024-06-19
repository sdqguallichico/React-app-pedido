import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import NavBar from "./NavBar";
import ReservationForm from "./ReservationForm";

const ReservationPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
    setCart([...cart, menu]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <NavBar />
      <Menu addToCart={addToCart} />
      <hr />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <hr />
    </div>
  );
};

export default ReservationPage;
