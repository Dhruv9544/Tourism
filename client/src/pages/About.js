import { Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import adventure from "./../assets/category/adventure.jpg";
export function About() {
  return (
    <div className="bg-[#FFEBEB]">
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature "
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-50 -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="blue-gray">
              Religious Places
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="flex flex-wrap justify-between w-full  space-y-6 text-2xl text-white uppercase sm:items-center ">
        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 mt-5">
          <img
            src={adventure}
            alt=""
            className="w-72 rounded-md shadow-lg shadow-black/60"
          />
          <div className="absolute bottom-0 p-[4.5rem] px-[3.3rem] text-white duration-700 bg-black opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out animate-fade-in   transition-opacity ">
            <div className="flex justify-between w-full">
              <div className="font-normal">
                <p className="text-xl">Abstact Painting</p>
                <p className="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
