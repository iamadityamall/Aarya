import React from "react";

const Banner = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      className=""
    >
      <figure className="grid grid-cols-1 justify-items-center transition-all duration-300 ease-linear rounded-lg overflow-hidden my-10 font-poppins md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center  flex flex-col items-center space-y-7  transition-all duration-300 ease-linear w-full p-10 md:-order-last ">
          {/* <img
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            data-aos-once="true"
            src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1622920319069-Z4F95L48OSY72TJM9RJY/Ollie+Business+LinkedIn+Headshot+Photo.jpg"
            alt="person"
            className="bg-colorTwo w-32 h-32 rounded-full ring ring-offset-2 ring-colorOne transition-all duration-300 ease-linear md:h-36 md:w-36 lg:w-40 lg:h-40"
          /> */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            data-aos-once="false"
          >
            <h1 className="font-bold text-lg">Mustafa Iqbal Shaikh</h1>
            <p className="font-semibold text-sm">
              CEO and Founder,{" "}
              <span className="text-colorOne">Arya Infoways</span>
            </p>
          </div>
        </div>
        <figcaption className="p-4  md:w-full md:flex md:justify-center md:items-center lg:col-span-2 ">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-once="true"
            className="text-center transition-all duration-300 ease-linear text-sm leading-relaxed lg:text-xl lg:w-5/6"
          >
            "To be a global IT and information security providers."
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export default Banner;
