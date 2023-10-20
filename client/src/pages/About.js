import React from "react";
const About = () => {
  return (
    <main>
      <section className=" bg-lime-50 min-h-screen flex items-center justify-center">
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
      <section className="bg-[#21825c] min-h-screen flex flex-wrap items-center justify-center">
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product"
            className="max-w-full h-auto mx-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product"
            className="max-w-full h-auto mx-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product"
            className="max-w-full h-auto mx-auto rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product"
            className="max-w-full h-auto mx-auto rounded-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
