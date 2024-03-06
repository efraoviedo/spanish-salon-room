import React, { useState } from "react";
import { Link } from "react-scroll";
import rubiondas2 from "../assets/hairStyles/rubiondas2.png";
// import style1 from "../assets/hairStyles/style1.jpg";
import peinadondas2 from "../assets/hairStyles/peinadondas2.png";

const Hairstyles = () => {
  const [hair, setHair] = useState(false);

  const beautystyles = [
    {
      id: 0,
      title: "Ondas",
      src: rubiondas2,
      href: "ModelHairStyles",
      link: "ModelHairStyles",
      style: "items-center",
    },
    {
      id: 1,
      src: peinadondas2,
      title: "Ondas de agua",
      // href: "https://github.com/efraoviedo/Calculadora",
      style: "",
    },
  ];

  return (
    <div
      name="Cepillados"
      className="drop-shadow-xl  
        pt-12 pb-1 bg-gradient-to-b from-blue-500
  to-gray-800 text-white min-h-fit"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold">Cepillados Peinados</p>
          <p className="w-full py-6">
            "Estos estilos elegantes y suaves son perfectos para una apariencia
            sofisticada y refinada". "Estos rizos juguetones y elásticos añaden
            un toque de fantasía y diversión a cualquier peinado". "Estas ondas
            texturizadas y desordenadas son una excelente opción para un
            ambiente bohemio y relajado". "Estos elegantes peinados trenzados
            son una opción impresionante para ocasiones especiales o eventos
            formales". "Estas coletas altas y elegantes son una opción elegante
            y con estilo para trabajar o jugar". "Estos moños desordenados y
            despeinados son una forma moderna y sencilla de lucir un estilo
            informal y moderno". "Estos estilos trenzados mitad arriba y mitad
            abajo son una opción versátil y romántica para cualquier ocasión".
            "Estos estilos elegantes y rectos son perfectos para una apariencia
            limpia y moderna". "Estos mechones ondulados y despeinados son una
            excelente opción para un estilo playero y relajado". "Estos rizos
            voluminosos y glamorosos seguramente llamarán la atención".
          </p>
          <p className="py-6">Mira con atencion algunos de nuestros peinados</p>
          {/* <p>MORE Styles</p> */}
        </div>

        <div
          className="shadow-black grid grid-cols-2 grid-rows-1 sm:grid-cols-2 gap-4
            text-center py-4 px-4 sm:px-0 sm:text-left h-fit"
        >
          {beautystyles.map(
            ({ id, src, title, style, href, link, download }) => (
              <div
                key={id}
                className={`shadow-black 
                py-2 rounded-lg ${style}`}
              >
                <p className="pl-16 pr-6 m-2 h-fit flex justify-left align-middle text-xl md:pl-60 md:pr-16">
                  {title}
                </p>

                <Link
                  to={"Cortes"}
                  smooth
                  duration={50}
                  className="flex justify-between items-center w-full pl-6 m-2 duration-200"
                >
                  <img
                    onClick={() => setHair(!hair)}
                    // link={link}
                    src={src}
                    alt="models"
                    className="bg-gradient-to-b from-white
                      to-gray-800 w-fit mx-auto m-2 rounded-md h-fit 
                      duration-200 hover:scale-125"
                  />
                </Link>

                <div className="flex items-center text-center pr-64 hover:scale-10 cursor-pointer">
                  <Link
                    to={"Alizados"}
                    smooth
                    duration={50}
                    className="pl-16 pr-4 m-2 md:pl-32 duration-100
                          hover:text-green-500"
                  >
                    Alizados
                  </Link>
                  <Link
                    to={"Recogidos"}
                    smooth
                    duration={50}
                    className="px-16 py-3 m-2 duration-200
                          hover:scale-105 hover:text-green-500"
                  >
                    Recogidos
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hairstyles;
