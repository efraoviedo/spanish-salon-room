import React from "react";
import liso22 from "../assets/liso22.png";
import liso11 from "../assets/liso11.png";
import { Link } from "react-scroll";

const Straighthair = () => {
  return (
    <div
      name="Alizados"
      className="pt-1 pb-2 bg-pink-50 text-gray-900 min-h-fit z-30"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center min-h-fit"
      >
        <div className="pt-24">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            keratinas 
          </p>
           <p>Tratamiento de alizado permanente</p>
          <p className="text-lg mt-0 pt-2">
            <br />Si eres de las personas que tienen cabello rizado, ondulado o muy
            crespo. Cabello con ondas pronunciadas y siempre quieres tener el cabello liso.
            o extra suave o menos rizado, necesitarás a nuestro experto
            porque tenemos los mejores tratamientos alisados de Keratina!{" "}
          </p>

          <br />

          <p className="text-lg">Los mejores tratamientos para el cabello.</p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <Link
              to={"Tintura"}
              smooth
              duration={50}
              className="items-center w-full h-max pt-2"
            >
              <img src={liso11} alt="my profile" className="w-full pt-10" />
            </Link>
            <Link
              to={"Tintura"}
              smooth
              duration={50}
              className="
              items-center w-full pt-8"
            >
              <img
                src={liso22}
                alt="my profile"
                className="w-full  pt-10 ml-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Straighthair;
