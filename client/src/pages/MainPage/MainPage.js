import React, { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import pngwing2 from "./../../assets/pngwing2.png";
import StarIcon from "../../UI/StarIcon";
const MainPage = () => {
  const [data, setData] = useState([]);

  const { id, subcategory, name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:9999/getAllPlaces?DestinationName=${name}`
      );
      if (!res.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await res.json();
      setData(data.data[0]);
    };
    fetchData().catch((e) => {
      console.log(e);
    });
  }, [name]);

  console.log(data);

  return (
    <main className="relative bg-lime-50">
      <section className=" bg-lime-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto mt-5 ">
          <div className="flex flex-col sm:flex-row space-x-10">
            {/* Left Side (Title, Description, Rating, and Visit Now) */}
            <div className="w-full sm:w-1/2">
              <h2 className="[font-family:'Inter-Bold',Helvetica]  text-black text-5xl font-bold mb-2">
                {data.DestinationName}
              </h2>
              <p className="mt-8 font-serif text-black text-base leading-normal text-justify font-medium">
                <span className="inline-block">{data.BriefHistory}</span>
              </p>

              <div className="flex items-center mt-8">
                <span className="text-xl ">Rating : </span>
                <span className="text-yellow-500 text-2xl mr-2 flex">
                  <StarIcon rating={data.Rating} />
                </span>
                <span className="text-gray-500">5.0 (1234 reviews)</span>
              </div>
              <div className="mt-14 w-[469px] h-[94px] bg-[#d2e4d0] flex items-center justify-center">
                <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
                  Visit Now- 1200/-
                </div>
              </div>
            </div>

            {/* Right Side (Image) */}

            <div className="w-full sm:w-1/2 mt-4 sm:mt-0 flex justify-center items-center">
              <img
                src={data.Thumbnail}
                alt="Product"
                className="w-full rounded-lg"
                style={{ maxHeight: "300px" }} // Optional: Set a max height if needed
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#000000] flex flex-wrap items-center justify-center">
        <div className="text-white font-bold flex flex-wrap justify-around items-center container mx-auto p-5 text-2xl font-serif  ">
          <NavLink to={`/category/${id}/${subcategory}/${name}/about`}>
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

export default MainPage;
