import React from "react";
import { Link } from "react-scroll";
// import frontpage from "../assets/frontpage.jpg";
import frontpage1 from "../assets/frontpage1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="Inicio" className="md:h-screen pt-24  w-full flex items-center z-40 pb-1">
      <img src={frontpage1} alt="my profile" className="w-screen h-fit pt-1" />

      <div className="pl-8 md:pl-20 pt-4 md:pt-64 items-center absolute">
        <h2
          className="pt-4 text-xl sm:text-5xl font-bold
          text-black"
        >
          Bienvenidos a nuestro salón de belleza.
        </h2>
        <p className="text-xs md:text-sm inset-0 text-gray-300 py-4 max-w-md">
          ¡Hola y bienvenido a nuestro salón de belleza! Estamos emocionados de
          tenerte aquí y ofrecerte los mejores servicios de belleza y cuidado
          personal. Nuestro equipo de profesionales altamente cualificados está
          a tu disposición para brindarte una experiencia única y relajante.
          Ofrecemos una amplia gama de tratamientos, desde cortes de cabello
          hasta tinturas y queratinas alisantes. ¡Esperamos verte pronto y
          ayudarte a sentirte bella y rejuvenecida!
        </p>

        <Link
          to="Recogidos"
          smooth
          duration={50}
          className="shadow-lg mt-0 md:mt-26 w-44 h-10 md:w-48 inset-0 group text-white px-6 py-3 my-2
            flex items-center text-right rounded-md bg-gradient-to-r
            from-cyan-400 to-cyan-500 lg:mt-0 transition ease-in duration-700 cursor-pointer"
        >
          Looks Top
          <span className="group-hover:rotate-90 duration-300 pl-4">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
