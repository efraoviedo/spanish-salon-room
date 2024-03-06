import React from "react";
import corteMujer from "../assets/corteMujer.jpg";
import cortemechon2 from "../assets/cortemechon2.png";
import { Link } from "react-scroll";

const HairCuts = () => {
  return (
    <div
      name="Cortes"
      className="pt-1 pb-2  bg-blue-200 text-gray-900 min-h-fit z-30 md:pt-28"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center min-h-fit"
      >
        <div className="pt-24">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            Cortes De Cabello
          </p>

          <p className="text-sm md:text-lg mt-0 pt-2">
           <br /> Hola, queremos mostrar nuestra amplia gama de cortes de cabello.
             Disponibles a Domicilio. Ofrecemos cortes clásicos y modernos para hombres mujeres
             y niños. Nuestros estilistas están altamente capacitados y
             listos para ayudarte a encontrar el corte de pelo perfecto para ti. También ofrecemos
             Servicios de color y peinado para darle a tu cabello el aspecto que deseas.
             ¡Llamanos hoy para programar una cita o obtener más información!
          </p>

          <br />

          <p className="text-sm md:text-lg">
             Consulta nuestra amplia gama de cortes de pelo y selecciona el que más te guste.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <Link
              to={"Modelscuts"}
              smooth
              duration={50}
              className="items-center w-full h-max pt-12"
            >
              <img
                src={cortemechon2}
                alt="my profile"
                className="w-full pt-6"
              />
            </Link>
            <Link
              to={"Modelscuts"}
              smooth
              duration={50}
              className="
              items-center w-full pt-12"
            >
              <img
                src={corteMujer}
                alt="my profile"
                className="w-full pt-14 ml-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HairCuts;
