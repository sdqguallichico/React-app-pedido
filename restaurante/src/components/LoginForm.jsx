import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8084/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        navigate('/dashboard');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container">
  <div className="screen">
    <div className="screen__content">
      <form onSubmit={handleLogin} className="login">
        <div className="login__field">
          
          
          <input
            type="email"
            className="login__input"
            name="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="login__field">
          <input
            type="password"
            className="login__input"
            name="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required="required"
          />
        </div>
        <button className="button login__submit" type="submit" >
          <span className="button__text">INGRESAR</span>
        </button>
       
      </form>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4"></span>
      <span className="screen__background__shape screen__background__shape3"></span>
      <span className="screen__background__shape screen__background__shape2"></span>
      <span className="screen__background__shape screen__background__shape1"></span>
    </div>
  </div>
</div>
  );
}

export default LoginForm;