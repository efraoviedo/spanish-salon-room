import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <GrFacebookOption size={40} style={{ color: "white" }} />
        </>
      ),
      href: "https://www.facebook.com/people/Peluquer%C3%ADa-a-domicilio/100028295666976/",
      style: "rounded-tr-md bg-blue-900",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <IoLogoInstagram size={40} />
        </>
      ),
      href: "https://www.instagram.com/efraoviedo/",
      style: "rounded-tr-md bg-red-700",
    },
    {
      id: 3,
      child: (
        <>
          GMail <HiOutlineMail size={40} style={{ color: "white" }}   />
        </>
      ),
      href: "https://mail.google.com/mail",
      // href: "mailto:efraoviedo@gmail.com",
      style: "rounded-tr-md bg-blue-900",

    },
    {
      id: 4,
      child: (
        <>
          Whatsapp <FaWhatsappSquare size={40} style={{ color: "white" }}/>
        </>
      ),
      href: "https://web.whatsapp.com/send?phone=+57 320 2937958",
      // href: "whatsapp://send?text=Tu%20mensaje%20aquí&phone=numero",
      style: "rounded-tr-md bg-green-600",
      // download: true,
    },
  ];
  return (
    <div className="hidden md:hidden bd-black lg:flex flex-col top-[18%] left-10 fixed">
      {links.map(({ id, child, href, style, download }) => (
        <div
          key={id}
          className={
            "flex justify-between items-center w-30 h-14 text-xs px-2 ml-[-100px] hover:ml-[-40px] hover:rounded-md duration-500 bg-black" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full
       text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}

     




    </div>
  //  </div> 


  );
};

export default SocialLinks;
