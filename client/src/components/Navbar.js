import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
const Navbar = () => {
  const size = useWindowSize();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    const removeClass = isMobileMenuOpen ? "container2" : "container1";
    const addClass = isMobileMenuOpen ? "container1" : "container2";
    const cardElementClasses = document.getElementById("car1").classList;
    cardElementClasses.remove(removeClass);
    cardElementClasses.add(addClass);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      const cardElementClasses = document.getElementById("car1").classList;
      cardElementClasses.remove("container2");
      cardElementClasses.add("container1");
      setIsMobileMenuOpen(false);
    }
  }, [size.width]);

  return (
    <section className="bg-[#252525]">
      {/* <!-- Hero Container --> */}
      <div className="container max-w-6xl mx-auto px-6 py-4">
        {/* <!-- Menu/Logo Container --> */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <!-- Logo --> */}
          <Link to={"/"}>
            {/* <!-- <img src="images/logo.svg" alt="" /> --> */}
            <h1 className="text-3xl">Tourism</h1>
            {/* <!-- Menu --> */}
          </Link>
          <div className="hidden h-5 md:flex md:space-x-8">
            <div className="group">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 group-hover:border-b-2 group-hover:border-blue-50 border-b-2 border-green-200"
                    : "mx-2 group-hover:border-b-2 group-hover:border-green-200"
                }
              >
                Home
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 group-hover:border-b-2 group-hover:border-blue-50 border-b-2 border-green-200"
                    : "mx-2 group-hover:border-b-2 group-hover:border-green-200"
                }
              >
                About
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 group-hover:border-b-2 group-hover:border-blue-50 border-b-2 border-green-200"
                    : "mx-2 group-hover:border-b-2 group-hover:border-green-200"
                }
              >
                Contact Us
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to={"ourblogs"}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 group-hover:border-b-2 group-hover:border-blue-50 border-b-2 border-green-200"
                    : "mx-2 group-hover:border-b-2 group-hover:border-green-200"
                }
              >
                Our Blogs
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to={"customsearch"}
                className={({ isActive }) =>
                  isActive
                    ? "mx-2 group-hover:border-b-2 group-hover:border-blue-50 border-b-2 border-green-200"
                    : "mx-2 group-hover:border-b-2 group-hover:border-green-200"
                }
              >
                Custom Search
              </NavLink>
            </div>
          </div>
          {/* <!-- Hamburger Button --> */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className=" flex flex-col items-center justify-center  w-full h-60 py-1 space-x-3 space-y-3 text-lg text-white uppercase bg-[#252525] md:hidden">
            <div>
              <NavLink href="#" className="hover:text-pink-500">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink href="#" className="hover:text-pink-500">
                About
              </NavLink>
            </div>
            <div>
              <NavLink href="#" className="hover:text-pink-500">
                Contact Us
              </NavLink>
            </div>
            <div>
              <NavLink href="#" className="hover:text-pink-500">
                Our Blogs
              </NavLink>
            </div>
            <div>
              <NavLink href="#" className="hover:text-pink-500">
                Custom Search
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
