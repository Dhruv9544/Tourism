import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ip } from "../../ip";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Blog(props) {
  const [blogs, setblogs] = useState([]);
  const [count, setcount] = useState(1);
  useEffect(() => {
    const fetchblogs = () => {
      var requestOptions = {
        method: "GET",
      };

      fetch(`${ip}/getallblog?Category=${props.category}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // const data = JSON.parse(result);
          setblogs(result.data);
          console.log(result.data);
          setcount(result.results);
        })
        .catch((error) => console.log("error", error));
    };
    fetchblogs();
  }, [count]);

  return (
    <div className="bg-[#fff3da]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold ml-5">{props.category}</h1>
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={count + 4}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute bg-black z-30 left-0 ml-8 focus:outline-none focus:bg-black-400 focus:ring-2 focus:ring-offset-2 focus:ring-black-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex border  lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {blogs.map((item, index) => (
                      <Slide index={index}>
                        <div>
                          <div className="bg-white rounded-lg  shadow-lg overflow-hidden md:flex">
                            <div className="w-100   md:w-1/2">
                              <img
                                src={item.Thumbnail}
                                alt="Blog"
                                className="w-full h-auto md:h-full"
                              />
                            </div>
                            <div className="md:w-1/2 border border-black p-1">
                              <h1 className="text-4xl uppercase  font-bold text-gray-800 mb-4">
                                {item.Title}
                              </h1>
                              <p className="text-gray-800 p-2 break-words leading-relaxed">
                                {item.About}
                              </p>
                              <div className="mt-6">
                                <div className="flex flex-wrap items-center text-gray-600 mb-4">
                                  <p className="mr-2">Posted on</p>
                                  <span className="text-blue-500">
                                    {item.CreatedAt}
                                  </span>
                                  <p className="mx-2">in</p>
                                  <span className="text-blue-500">
                                    {item.Category}
                                  </span>
                                  <p className="mx-2">by</p>
                                  <span className="text-blue-500">
                                    {item.Author_Name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute bg-black z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute bg-black z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {blogs.map((item, index) => (
                      <Slide index={index}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.Thumbnail}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              {item.Title}
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                {item.Title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute bg-black z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
            className="block md:hidden "
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={1}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute bg-black z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                  >
                    {blogs.map((item, index) => (
                      <Slide index={index}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.Thumbnail}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              {item.Title}
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                {item.Title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute bg-black z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
