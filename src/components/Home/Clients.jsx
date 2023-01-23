import React from "react";
// import ClientLogo from "./ClientLogo";

import { dataImages } from "../../data/images";
// import ClientTestomonialCard from "./ClientTestomonialCard";

const Clients = () => {
  const [images] = React.useState(dataImages);
  const [index1, setIndex1] = React.useState(4);

  React.useEffect(() => {
    const slider = setInterval(() => {
      setIndex1((prev) => {
        let index = prev + 1;
        if (index > images.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index1, images]);

  return (
    <section className="grid grid-cols-1 justify-items-start gap-y-10 py-16 md:justify-items-center lg:grid-cols-2 lg:items-center lg:justify-items-center transition-all duration-150 ease-linear">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="lg:flex justify-center flex-col space-y-2"
      >
        <h1 className="text-center text-2xl font-bold md:text-center lg:text-4xl lg:text-center">
          Our Vendors
        </h1>
        <p className="text-center">
          <span className="text-sm border-b-2 border-colorOne lg:text-lg p-2">
            We have built our vendors base with years of trust. Here are some of
            our most valuble vendors.
          </span>
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="grid"
      >
        <h4 className="text-center underline underline-offset-4 font-poppins font-bold">
          AccelPro Technologies -Zero Trust Network Access (ZTNA)
        </h4>
        <p className="p-2">
          AccelPro a provider of World’s Fastest ZTNA Products, with innovative
          “Cloud in a Box” architecture, having automated update management
          system to keep organizations always stay ahead against emerging cyber
          security threats & data loss while providing automated end to end
          secure access to corporate network resources, & applications in much
          faster way from anywhere, any device & using any internet connection.
          AccelPro Next Generation ZTNA products eliminates the gaps in legacy
          VPN approach & provides fresh outlook resulting in always secured
          automated end to end secure access with enhanced user experience.
          Trusted by 100+ enterprises & telcos, AccelPro is fast growing company
          delivering innovative cutting-edge technology in automated end to end
          secure access space. Learn more at{" "}
          <a
            className="text-blue-600"
            href="https://www.accelpro.net"
            target={"_blank"}
            rel="noreferrer"
          >
            www.accelpro.net
          </a>
        </p>
      </div>

      {/* <div className="w-full lg:mr-10">
        <ClientLogo />
      </div> */}

      {/* <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:col-span-2 lg:py-10">
        <ClientTestomonialCard />
        <ClientTestomonialCard />
        <ClientTestomonialCard />
      </div> */}
    </section>
  );
};

export default Clients;
