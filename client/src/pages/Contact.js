import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hillstation from "./../assets/category/hillstation.jpg";
function Contact() {
  useEffect(() => {
    const fetchblog = async () => {};
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-8">
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {/* First Blog Post */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/2">
                <img
                  src={hillstation}
                  alt="Blog"
                  className="w-full h-auto md:h-full"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h1 className="text-4xl uppercase font-bold text-gray-800 mb-4">
                  Blog Title 1
                </h1>
                <p className="text-gray-800 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor viverra turpis, vel congue ex fermentum nec.
                  Donec nec semper urna, non malesuada metus. Nullam auctor
                  viverra turpis, vel congue ex fermentum nec. Donec nec semper
                  urna, non malesuada metus.
                </p>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center text-gray-600 mb-4">
                    <p className="mr-2">Posted on</p>
                    <span className="text-blue-500">September 29, 2023</span>
                    <p className="mx-2">in</p>
                    <span className="text-blue-500">Category</span>
                    <p className="mx-2">by</p>
                    <span className="text-blue-500">Author Name</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Blog Post (similar structure as the first) */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
              <div className="md:w-1/2">
                <img
                  src={hillstation}
                  alt="Blog"
                  className="w-full h-auto md:h-full"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h1 className="text-4xl uppercase font-bold text-gray-800 mb-4">
                  Blog Title 2
                </h1>
                <p className="text-gray-800 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor viverra turpis, vel congue ex fermentum nec.
                  Donec nec semper urna, non malesuada metus. Donec nec semper
                  urna, non malesuada metus. Donec nec semper urna, non
                  malesuada metus.
                </p>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center text-gray-600 mb-4">
                    <p className="mr-2">Posted on</p>
                    <span className="text-blue-500">September 29, 2023</span>
                    <p className="mx-2">in</p>
                    <span className="text-blue-500">Category</span>
                    <p className="mx-2">by</p>
                    <span className="text-blue-500">Author Name</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more blog posts as needed */}
        </Carousel>
      </div>
    </div>
  );
}
export default Contact;
