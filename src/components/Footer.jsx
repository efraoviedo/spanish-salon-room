import React from "react";
import polygoncyan from "../assets/polygoncyan.png";

const Footer = () => {
  return (
    <div
      className="w-full h-32 grid justify-center items-center md:flex md:justify-around md:items-center
    bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <p>Peluqueria Domicilio</p>
      <p>Telefono: 3202937958</p>
      <img
        src={polygoncyan}
        alt="my profile"
        className="w-8 items-center ml-14 pt-1 shadow-lg"
      />

      <p className="flex justify-center items-center">WhatsApp: +57 3202937958</p>
    </div>
  );
};

export default Footer;
