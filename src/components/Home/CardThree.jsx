import React from "react";
import { BiConversation } from "react-icons/bi";

const Card = () => {
  return (
    <article className="w-full bg-colorOne/20  p-3 rounded-xl space-y-2 font-poppinss transition-all duration-150 ease-linear">
      <figure>
        <img
          src="./images/dataSecurity.png"
          alt="service-logo"
          className="rounded-xl bg-gray-300 h-40 w-full object-cover"
        />
      </figure>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="p-2 text-colorOne text-2xl">
            <BiConversation />
          </div>
          <div className="p-2 font-bold font-poppins">Data Security</div>
        </div>
        <p className="p-2 text-sm">
          We protect digital data, such as those in a
          database, from destructive forces and from the unwanted actions of
          unauthorized users.
        </p>
      </div>
      {/* <div className="p-2">
        <button className="bg-colorOne p-3 rounded-lg md:text-xs">
          Read more
        </button>
      </div> */}
    </article>
  );
};

export default Card;
