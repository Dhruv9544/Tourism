import { Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import adventure from "./../assets/category/adventure.jpg";
export function About() {
  return (
    <Fragment>
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
      <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 mt-20 border border-red-700">
        <div class="relative group  flex flex-col justify-center items-center border border-red-800">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl font-bold">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group  flex flex-col justify-center items-center border border-red-800">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group  flex flex-col justify-center items-center border border-red-800">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group  flex flex-col justify-center items-center">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group  flex flex-col justify-center items-center">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group  flex flex-col justify-center items-center">
          <img src={adventure} alt="" class="w-72" />
          <div class="absolute bottom-0 p-[4.5rem] px-16 text-white duration-700 bg-black opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-opacity-40 ease-in-out transition-transform">
            <div class="flex justify-between w-full">
              <div class="font-normal">
                <p class="text-xl">Abstact Painting</p>
                <p class="text-sm">245 likes -35 Shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
