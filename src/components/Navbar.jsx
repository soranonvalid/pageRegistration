import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/")}>Login</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>

      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
    </div>
  );
};

export default Navbar;
