import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full text-white bg-black flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">Norm's Company</h1>
      <div className="flex gap-4">
        <button
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Login
        </button>
        <button
          className="cursor-pointer hover:underline"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className="cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="cursor-pointer hover:underline"
          onClick={() => navigate(1)}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default Navbar;
