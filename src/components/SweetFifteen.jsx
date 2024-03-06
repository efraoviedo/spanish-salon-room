import React from "react";
import niña1 from "../assets/sweetFifteen/niña1.jpg";
import girl1 from "../assets/sweetFifteen/girl1.jpg";
import girl3 from "../assets/sweetFifteen/girl3.jpg";
import girl2 from "../assets/sweetFifteen/girl2.jpg";
import { Link } from "react-scroll";

const SweetFifteen = () => {
  const techs = [
    {
      id: 1,
      title:
        "Uno de los sueños mas grandes de una adolescente de 15 años es lucir lo más bella posible y eso lo podemos lograr con el mejor peinado y maquillaje.",

      src: niña1,
      style: "drop-shadow-xl-red-500 mt-[6px] pb-6 ",
    },

    {
      id: 2,
      src: girl1,
      title: "Quinceañeras",
      style: "drop-shadow-xl ",
    },
    {
      id: 3,
      src: girl3,
      title: "Elegantes 15's",
      style: "drop-shadow-xl mt-[116px] text-gray-700",
    },

    {
      id: 5,
      src: girl2,
      title: "Palacio de los 15",
      style: "drop-shadow-xl text-gray-700",
    },
    // {
    //   id: 6,
    //   src: typeScript,
    //   title: "typeScript",
    //   style: "shadow-sky-500",
    // },
    // {
    //   id: 4,
    //   src: reactImage,
    //   title: "React",
    //   style: "shadow-blue-600",
    // },
    // {
    //   id: 7,
    //   title: "Firebase",
    //   src: firebase,

    //   style: "shadow-pink-400",
    // },
    // {
    //   id: 8,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-500",
    // },
    // {
    //   id: 9,
    //   src: webPack,
    //   title: "WebPack",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 10,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-500",
    // },
  ];

  return (
    <div
      name="Quinceañeras"
      className="pt-2 bg-gradient-to-b from-gray-800 to-blue min-h-fit "
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center w-full text-white"
      >
        <div>
          <p
            className="text-3xl font-bold border-b-4
          border-gray-500 inline md:pt-4"
          >
            Quinceañeras
          </p>
          <p className="pt-4">Los mejores peinados de quinceañeras</p>
        </div>
        <div
          className="w-full md:grid grid-cols-2 sm:grid-cols-2 gap-4
        text-center px-4 sm:px-0"
        >
          {techs.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
              <p className="mt-4">{title}</p>

              <Link
                to={"Recogidos"}
                smooth
                duration={50}
                className="pl-36 m-2 duration-200
                          hover:scale-105"
              >
                <img src={src} alt="" className="w-fit mx-auto" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SweetFifteen;
