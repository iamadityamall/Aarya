import React from "react";
import { FaRegMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImClock } from "react-icons/im";

const CallToAction = () => {
  return (
    <section className="flex flex-col py-10 space-y-4 font-poppins md:flex-row md:space-y-0 md:items-start md:justify-between md:space-x-4 lg:grid lg:grid-cols-4 transition-all duration-150 ease-linear">
      <div className="flex justify-between items-center md:items-start ">
        <div className="text-colorOne text-5xl p-2 md:text-2xl lg:text-5xl">
          <FaRegMap />
        </div>
        <div className="p-2 md:text-xs lg:text-lg">
          <h1 className="font-bold">ADDRESS</h1>
          <p className="lg:text-sm">
            B 101 Caribbean tower sagar city bhd khoja jamat khana andheri west
            Mumbai 400058
          </p>
        </div>
      </div>
      <div className="flex item-center md:items-start ">
        <div className="text-colorOne text-5xl p-2 md:text-2xl lg:text-5xl">
          <BsFillTelephoneFill />
        </div>
        <div className="p-2 md:text-xs lg:text-lg">
          <h1 className="font-bold">Call</h1>
          <p className="lg:text-sm">+919821277158</p>
        </div>
      </div>
      <div className="flex items-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl lg:text-5xl">
          <GrMail />
        </div>
        <div className="p-2 md:text-xs lg:text-lg">
          <h1 className="font-bold">Send us message</h1>
          <p className="lg:text-sm">info@aryainfoways.com</p>
        </div>
      </div>
      <div className="flex items-center md:items-start">
        <div className="text-colorOne text-5xl p-2 md:text-2xl lg:text-5xl">
          <ImClock />
        </div>
        <div className="p-2 md:text-xs lg:text-lg">
          <h1 className="font-bold">Opening hours</h1>
          <p className="lg:text-sm">9:30 am - 07:00 pm</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
