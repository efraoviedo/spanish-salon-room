import React from "react";
import moño1 from "../assets/sweetFifteen/moño1.jpg";
import rubia6 from "../assets/sweetFifteen/rubia6.jpg";
import rubia9 from "../assets/sweetFifteen/rubia9.png";
import brownhair1 from "../assets/sweetFifteen/brownhair1.webp";
import rubia5 from "../assets/sweetFifteen/rubia5.jpeg";
import noviaRamo from "../assets/sweetFifteen/noviaRamo.png";
import { Link } from "react-scroll";

const HairUpdos = () => {
  function handleClick(event) {
    event.target.requestFullscreen();
  }

  const techs = [
    {
      id: 1,
      src: moño1,
      title: "Elegantes moños",
      style: "drop-shadow-xl",
    },
    {
      id: 2,
      src: rubia6,
      title: "Grandes ondas",
      style: "drop-shadow-xl",
    },
    {
      id: 3,
      src: rubia9,
      title: "Peinado Natural",
      style: "drop-shadow-xl",
    },

    {
      id: 5,
      src: brownhair1,
      title: "Ondas en rubio cafe",
      style: "drop-shadow-xl",
    },
    {
      id: 6,
      src: noviaRamo,
      title: "Novias",
      style: "shadow-sky-500",
    },
  ];

  return (
    <div>
      <div
        name="Recogidos"
        className="pt-8 bg-gradient-to-b 
       from-gray-800 to-blue min-h-fit "
      >
        <div
          className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full text-white"
        >
          <div>
            <p
              className="text-4xl font-bold border-b-4
          border-cyan-600 p-2 inline"
            >
              Recogidos Moños
            </p>
            <p className="py-6 pb-1">
              Diferentes estilos de peinado con altura
            </p>
          </div>
          <div className="grid md:flex gap-8">
            <div className="flex">
              <Link
                to={"Modelscuts"}
                smooth
                duration={50}
                className="h-max pt-12"
              >
                <p className="text-center text-white">
                  Semirecogidos <br />
                </p>
                <img
                  src={rubia5}
                  alt="my profile"
                  className="md:w-screen md:h-96"
                />
              </Link>
            </div>

            <div
              className="md:grid grid-cols-2 sm:grid-cols-2
      gap-4 text-center py-4 px-6 sm:px-0 text-gray-700"
            >
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
                >
                  <img
                    onClick={handleClick}
                    src={src}
                    alt=""
                    className="w-fit mx-auto"
                  />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairUpdos;
