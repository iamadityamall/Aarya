import React from "react";

import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  return (
    <section
      id="home"
      className="home h-screen w-full pt-20 flex items-center justify-center md:justify-end lg:grid lg:grid-cols-2 lg:items-center lg:justify-between lg:space-x-0 transition-all duration-150 ease-linear"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="flex flex-col capitalize font-poppins space-y-1 py-10 items-start md:w-[50vw] lg:w-[60vw] lg:space-y-2"
      >
        <h3 className="text-4xl py-2 font-bold px-1 uppercase lg:text-6xl">
          we keep your business moving
        </h3>
        <h4 className="text-[16px]  px-1 lg:text-xl lg:font-semibold">
          <span className="border-b-2 border-colorOne">{`supply chain, transportation & logistics managment`}</span>
        </h4>
        <p className="text-[15px] py-2 px-1 pt-6 leading-relaxed lg:text-lg lg:w-[30vw]">
          we at {"  "}
          <span className=" text-colorOne font-semibold">
            siddhivinayak logistics
          </span>{" "}
          provide solutions to both small and large businesses, regardless of
          your industry or commodity.
          {/* right from pickup from supplier's factory to delivery at buyer's. we
          provide all services under one roof. Regardless of your industry or
          commodity,we have solutions to both small and large businesses. */}
        </p>
        <div className="flex items-center space-x-5 p-1 pt-4 transition-all duration-150 ease-linear">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="text-white p-4 rounded-lg bg-colorOne font-semibold capitalize text-xs text-left tracking-widest transition-all duration-150 ease-linear cursor-pointer
          "
          >
            get quotation
          </Link>
          <div className="flex flex-row space-x-3 text-xl p-2 transition-all duration-150 ease-linear">
            <a href="https://instagram.com">
              <BsInstagram />
            </a>
            <a href="https://facebook.com">
              <BsFacebook />
            </a>
            <a href="https://linkedIn.com">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <figure
        className="hidden md:flex lg:w-full transition-all duration-150 ease-linear"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <img
          src="./images/delivery.png"
          alt="logistics"
          className="w-[40vw] lg:w-full"
        />
      </figure>
    </section>
  );
};

export default Hero;
