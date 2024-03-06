import React, { useState } from "react";
import { FaBeer, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import hexagonogrande from "../assets/hexagonogrande.png";
// import Home from "./Home";

const Header = () => {
  const [head, setHead] = useState(false);

  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Peluqueria",
      sublinks: [
        { id: 3, link: "Cortes" },
        { id: 4, link: "Quinceañeras" },
      ],
    },
    {
      id: 5,
      link: "Peinados",
      sublinks: [
        { id: 6, link: "Recogidos" },
        { id: 7, link: "Alizados" },
        { id: 8, link: "Cepillados" },
      ],
    },
    {
      id: 9,
      link: "Tintura",
      // style: "pt-4 mt-4",
    },
    {
      id: 10,
      link: "Contacto",
    },
    // ...otros enlaces
  ];

  return (
    <>
      <div
        className="z-50 flex justify-between items-center w-full h-16 md:h-8 drop-shadow-2xl
       text-gray-800 font-bold bg-gradient-to-b from-pink-50 to-pink-100 
       ml-0 px-2 sm:px-1 sm:ml-0 fixed pt-8 sm:pt-10 pb-16"
      >
        <div className="bg-black justify-center items-center sm:pl-1">
          <img src={hexagonogrande} alt="hexagono" className="w-26 pt-2 " />
        </div>
        <div className="lg:pr-80">
          <Link to="Inicio" smooth duration={50} className="cursor-pointer">
            <h1
              className=" pl-0 text-2xl md:text-4xl font-Oswald ml-0 md:ml-1 pt-8 
           hover:text-blue-900 "
            >
              Peluqueria Domicilios
            </h1>
          </Link>
          <p className="text-xs md:text-sm ml-0 md:ml-1 pl-1">
            {" "}
            Servicio de Tinturas Cortes y Peinados a domicilio
          </p>
        </div>

        <div className="text-sm flex">
          <ul className=" hidden md:grid grid-rows-2 md:grid-cols-5 md:h-20">
            {links.map(({ id, link, sublinks }) => (
              <li
                key={id}
                className={`px-6 cursor-pointer capitalize font-medium text-gray-900 drop-shadow-lg shadow-green-600/50 hover:scale-105 duration-200 hover:text-green-500 to green-900 pt-8`}
                // onMouseEnter={() => setHead(true)}
                // onMouseLeave={() => setHead(false)}
              >
                {sublinks ? (
                  <div className="relative group">
                    <span>{link}</span>
                    <ul
                      className="w-36 h-fit text-black hover:bg-blue-700 font-signature absolute rounded-xl hidden top-full left-0 bg-blue-500 border p-2
                        pl-2 border-b-4 border-gray-500 md:pt-4 group-hover:block"
                    >
                      {sublinks.map((sublink) => (
                        <li
                          className="bg-cyan-400 w-30 pl-2 flex justify-center items-center h-8 text sm rounded-lg"
                          key={sublink.id}
                        >
                          <Link
                            className="w-full hover:bg-cyan-300 rounded-lg"
                            to={sublink.link}
                            smooth
                            duration={50}
                          >
                            {sublink.link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link to={link} smooth duration={50}>
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* <p>de aca para abajo todo es el menu oculto al reducir la pantalla</p> */}

        <div
          onClick={() => setHead(!head)}
          className="bg-pink-100 mr-44 cursor-pointer pr-2 text-black md:hidden hover:text-xl hover:bg-blue-200"
        >
          {head ? <FaTimes size={35} /> : <FaBeer size={35} />}
        </div>

        {head && (
          <ul
            className="flex flex-col justify-center items-center
              absolute top-0 right-0 w-full h-screen bg-gradient-to-b
              from-blue-900  to-gray-400 text-blue-900 hover:scale-y-105
              duration-200 pt-1 pr-36"
          >
            {links.map(({ id, link, sublinks }) => (
              <li
                key={id}
                className="px-3 cursor-pointer capitalize py-2 text-4xl"
                // onClick={() => setHead(!head)}
              >
                {sublinks ? (
                  <div className="relative group text-lg">
                    <span>{link}</span>
                    {/* <ul className="w-36 text-white font-signature absolute rounded-xl hidden top-full left-0 bg-blue-700 border border-gray-300 p-2 group-hover:block"> */}

                    <ul
                      className=" top-0 left-full border-gray-300 p-2 group-hover:block
                    absolute rounded-xl hidden text-gray-900"
                    >
                      {sublinks.map((sublink) => (
                        <li
                          className="bg-cyan-400 border-cyan-700 w-30 pl-2 flex justify-center items-center h-8 text sm rounded-lg"
                          key={sublink.id}
                        >
                          <Link
                            className="w-full hover:bg-cyan-300 rounded-lg"
                            onClick={() => setHead(!head)}
                            to={sublink.link}
                            smooth
                            duration={50}
                          >
                            {sublink.link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    onClick={() => setHead(!head)}
                    to={link}
                    smooth
                    duration={50}
                    className="text-xl hover:text-xl hover:text-cyan-700"
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
