import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import pngwing2 from "./../../assets/pngwing2.png";
const About = () => {
  return (
    <main className="relative bg-lime-50">
      <img
        src={pngwing2}
        alt="leaf"
        className="absolute h-56 right-0 rotate-90 top-[-1.2rem] "
      />
      <img src={pngwing2} alt="leaf" className="absolute left-[-1.8rem] h-52" />

      <section className=" bg-lime-50 min-h-screen flex items-center justify-center ">
        <div className="container mx-auto ">
          <div className="flex flex-col sm:flex-row  ">
            {/* Left Side (Title, Description, Rating, and Visit Now) */}
            <div className="w-full sm:w-1/2">
              <h2 className="[font-family:'Inter-Bold',Helvetica]  text-black text-5xl font-bold mb-2">
                GIR NATIONAL PARK
              </h2>
              <p className="mt-8 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.3rem] tracking-[0] leading-[normal]">
                <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-[1.3rem] tracking-[0]">
                  Gir National Park and Wildlife Sanctuary, also known as Sasan
                  Gir, is a forest, national park, and wildlife sanctuary near
                  Talala Gir in Gujarat, India. It is located 43 km (27 mi)
                  north-east of Somnath, 65 km (40 mi) south-east of Junagadh
                  and 60 km (37 mi) south-west of Amreli.{" "}
                </span>
              </p>
              <div className="flex items-center mt-8">
                <span className="text-xl ">Rating : </span>
                <span className="text-yellow-500 text-2xl mr-2">
                  ⭐⭐⭐⭐⭐
                </span>
                <span className="text-gray-500">5.0 (1234 reviews)</span>
              </div>
              <div className="mt-14 w-[469px] h-[94px] bg-[#d2e4d0] flex items-center justify-center">
                <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
                  Visit Now- 12,000/-
                </div>
              </div>
            </div>

            {/* Right Side (Image) */}

            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Product "
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#000000] flex flex-wrap items-center justify-center">
        <div className="text-white font-bold flex flex-wrap justify-around items-center container mx-auto p-5 text-2xl font-serif  ">
          <NavLink to={"aboutplace"}>
            <button className="focus:border-b focus:outline-none focus:border-b-current">
              About Place
            </button>
          </NavLink>
          <NavLink to={"gallery"}>
            <button className="focus:ring py-2 px-4 rounded-md focus:outline-none focus:border-b-current">
              Gallery
            </button>
          </NavLink>
          <NavLink to={"location"}>
            <button className="focus:border-b focus:outline-none focus:border-b-current">
              Location
            </button>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </main>
  );
};

export default About;
