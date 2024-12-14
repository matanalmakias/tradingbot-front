import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = ({ className }) => {
  const nav = useNavigate();
  return (
    <img
      onClick={() => nav("/")}
      className={`logo ${className}`}
      src="/assets/logo.png"
      alt="logo"
    />
  );
};

export default Logo;
