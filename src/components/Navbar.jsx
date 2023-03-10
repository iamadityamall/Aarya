import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navLinks from "../data/navLinks";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import Sidebar from "./Home/Sidebar";
import QuickCallToAction from "./Home/QuickCallToAction";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { navButton, setNavButton, darkmode, changemode } = useGlobalContext();

  useEffect(() => {
    if (navButton) {
      var timeout = setTimeout(() => {
        setNavButton(false);
      }, 7000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [navButton, setNavButton]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-10 shadow-sm lg:shadow-none transition-all duration-150 ease-linear ${
          !darkmode ? "bg-colorTwo " : "bg-colorThree"
        }`}
      >
        <QuickCallToAction />
        <nav className="font-poppins w-[90vw] mx-auto lg:w-[85vw] transition-all duration-300 ease-linear">
          <section className="flex justify-between items-center sm:text-2xl py-3 md:py-4 lg:py-6 xl:w-[75vw]">
            <div className=" transition-all duration-300 ease-linear">
              <img
                src={`${
                  darkmode
                    ? "./images/arya_info_ways.jpeg"
                    : "./images/arya_info_ways.jpeg"
                }`}
                alt="logo"
                className="h-10 md:h-12 object-cover"
              />
            </div>
            <div className="hidden lg:flex lg:space-x-4 capitalize lg:items-center transition-all duration-300 ease-linear">
              {navLinks.map((navlink) => {
                const { id } = navlink;
                return (
                  <Link
                    to={navlink.name}
                    key={id}
                    spy={true}
                    smooth={true}
                    offset={-85}
                    duration={600}
                    className="p-2 text-sm hover:border-b-2 hover:border-colorOne cursor-pointer transition-all duration-150 ease-linear "
                  >
                    {navlink.name}
                  </Link>
                );
              })}

              {/* <NavLink to="/privacy" className="text-sm px-2 transition-all">
                privacy policy
              </NavLink>
              <NavLink to="/terms" className="text-sm transition-all">
                {`terms & condition`}
              </NavLink> */}
              {/* <NavLink to="/" className="text-sm px-3 transition-all">
                home
              </NavLink> */}
            </div>
            <div className="hidden lg:flex space-x-6 transition-all">
              <button
                className={`text-3xl text-colorOne   ${
                  darkmode && "text-black"
                }`}
                onClick={() => changemode()}
              >
                <MdDarkMode />
              </button>
              {/* <button className="text-sm p-4 bg-colorOne rounded-lg">
                sign in
              </button> */}
            </div>
            <div className="flex items-center lg:hidden transition-all duration-150 ease-linear">
              <button
                className={` p-2 text-colorOne lg:hidden transition-all duration-150 ease-linear  ${
                  darkmode && "text-black"
                }`}
                onClick={() => changemode()}
              >
                {!darkmode ? (
                  <BsSunFill className="text-2xl" />
                ) : (
                  <MdDarkMode className="text-2xl" />
                )}
              </button>
              <button
                type="button"
                className="text-2xl p-3"
                onClick={() => setNavButton(true)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </section>
        </nav>
      </header>
      <Sidebar setNavButton={setNavButton} navButton={navButton} />
    </>
  );
};

export default Navbar;
