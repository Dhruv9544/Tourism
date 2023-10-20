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
      <div class="container mx-auto p-8 max-w-full bg-lime-50 ">
        <h1 class="text-3xl font-extrabold mb-4">History</h1>

        <p class="text-lg mb-6">
          Gir National Park and Wildlife Sanctuary, also known as Sasan Gir, is
          a forest, national park, and wildlife sanctuary near Talala Gir in
          Gujarat, India. It is located 43 km (27 mi) north-east of Somnath, 65
          km (40 mi) south-east of Junagadh and 60 km (37 mi) south-west of
          Amreli.
        </p>
        <p class="text-lg mb-6">
          Gir National Park is the only area, outside of Africa where you can
          witness the majestic Asiatic Lion species in its native environment
          along with the diverse variety of birds and small animals. It is a
          significant dilemma for the maldharis, a tribe living inside the
          forest since the livestock is often preyed upon by lions. The Panther
          and the Hyena are the two such predators. Along with the long-tailed
          langur, bear, Sambar, Chowsingha, Chital, Indian Deer, Chinkara,
          Nilgai, and many others can also be found here.
        </p>
      </div>

      <div class="container mx-auto px-4 py-8 bg-[#D3E4D0]  max-w-full">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="flex-1">
            <h1 class="text-3xl font-bold">Gir National Park</h1>
            <p class="mt-4 text-gray-600">
              Explore the majestic home of the Asiatic lions
            </p>
          </div>
          <button class="mt-4 md:mt-0 bg-white text-black font-bold py-2 px-4 rounded shadow">
            VISIT NOW
          </button>
        </div>


        {/* three boxes */}
        <div class="flex flex-wrap justify-center">
          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4">
            <h3>by bus </h3>
          </div>

          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4">
            <h3>by train</h3>
          </div>

          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4">
            <h3>by aeroplane</h3>
          </div>
        </div>

         {/* timing , Entry fee , holiday */}
        <div class="mt-8 ">
          <div class="mb-6 flex">
            <h3 class="text-xl font-bold">Timing:</h3>
            <p class="mt-1 ml">6:00 AM - 9:00 PM</p>
          </div>

          <div class="mb-6 flex">
            <h3 class="text-xl font-bold">Entry Fee:</h3>
            <p class="mt-1 ml-1">₹1000 per person</p>
          </div>

          <div class="mb-6 flex">
            <h3 class="text-xl font-bold">Holiday:</h3>
            <p class="mt-1 ml-1">Sunday</p>
          </div>
        </div>


          <div class="mt-4">
            <h3 class="text-xl font-bold">Website</h3>
            <a href="gir.com" class="mt-2 text-blue-600 underline">
              gir.com
            </a>
          </div>

          <div class="mt-4">
            <h3 class="text-xl font-bold">Quick Glimpse</h3>
            <a href="youtube.com" class="mt-2 text-blue-600 underline">
              youtube.com
            </a>
          </div>
        </div>
    </main>
  );
};

export default About;
