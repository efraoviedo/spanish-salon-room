import React from "react";
import frontpage from "../assets/frontpage.jpg";
// import corteMujer from "../assets/corteMujer.jpg";
import rubia2 from "../assets/rubia2.jpg";

const Modelscuts = () => {
  function handleClick(event) {
    event.target.requestFullscreen();
  }

  return (
    <div
      name="Modelscuts"
      className="pb-8 bg-pink-50 text-gray-900 min-h-fit z-30"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center min-h-fit"
      >
        <div className="pt-8">
          <p className="text-4xl font-bold border-gray-500">
            {/* <Link to="/HairStyles2">HairCuts</Link> */}
            Mas Cortes de Cabello
          </p>

          <p className="text-md:text-lg mt-0 pt-4">
           Tenemos los mejores estilos de cortes de cabello. Puedes tener cualquier corte
           que desees, y si no sabes cuál es perfecto para ti, te asesoramos.
          </p>

          <br />

          <p className="text-lg">
            Selecciona el mas adecuado para ti o el que mas te gusta .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shrink">
            <img
              onClick={handleClick}
              src={frontpage}
              alt="my model"
              className="w-full pt-32 relative"
            />
            <p className="pr-48 pt-8 md:pt-16 absolute text-xs md:text-sm">
              Estilistas expertos calificados en cuidado y mantenimiento del cabello estan <br />{" "}
              listo para atenderlo en el momento que lo deseen
            </p>

            <img
              onClick={handleClick}
              src={rubia2}
              alt="my model"
              className="w-full h-full pt-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelscuts;
