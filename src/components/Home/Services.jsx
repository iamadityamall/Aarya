import React from "react";
import Card from "./Card";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";

const Services = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      id="services"
      className="py-20 flex flex-col space-y-10 font-poppins items-start md:items-center transition-all duration-150 ease-linear lg:h-screen justify-center"
    >
      <div className="md:flex md:flex-col md:items-center">
        <h1 className="text-center text-2xl py-4 font-bold tracking-wide capitalize lg:text-4xl">
          our services
        </h1>
        <p className="grid p-6 text-center text-xs font-semibold lg:text-lg">
          <span className="py-2 border-b-2 border-colorOne">
            Dealing in IT solutions and providing consulting to corporate
            customers.{" "}
          </span>
          <span className="py-2 border-b-2 border-colorOne">
            Dealing in various OEM product for Information Technology as well as
            Information and Cyber Security.{" "}
          </span>
          <span className="py-2 border-b-2 border-colorOne">
            Venturing into Garment management solutions for both factory as well
            as store.
          </span>
        </p>
      </div>

      <div></div>

      <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <Card />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <p className="text-xs text-center font-semibold lg:text-sm">
        visit and experience many more services with best customer experience
      </p>
    </section>
  );
};

export default Services;
