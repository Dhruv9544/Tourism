import React from "react";
import pngwing2 from "./../assets/pngwing2.png";
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
      <section className="bg-[#21825c] min-h-screen flex flex-wrap items-center justify-center">
        <div className="text-white font-bold flex flex-wrap justify-around items-center container mx-auto p-5 text-2xl font-serif  ">
          <button className="focus:border-b focus:outline-none focus:border-b-current">
            About Place
          </button>
          <button className="focus:ring py-2 px-4 rounded-md focus:outline-none focus:border-b-current">
            Gallary
          </button>
          <button className="focus:border-b focus:outline-none focus:border-b-current">
            Location
          </button>
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
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Product"
            className="max-w-full h-auto mx-auto rounded-lg"
          />
        </div>
      </section>
      <section className="bg-lime-50">
        <div class="container mx-auto p-8 bg-lime-50">
          <h1 class="text-3xl font-extrabold mb-4 [font-family:'Inter-SemiBold',Helvetica] uppercase">
            History
          </h1>

          <li class="text-lg mb-6">
            Gir National Park and Wildlife Sanctuary, also known as Sasan Gir,
            is a forest, national park, and wildlife sanctuary near Talala Gir
            in Gujarat, India. It is located 43 km (27 mi) north-east of
            Somnath, 65 km (40 mi) south-east of Junagadh and 60 km (37 mi)
            south-west of Amreli.
          </li>
          <li class="text-lg mb-6">
            Gir National Park is the only area, outside of Africa where you can
            witness the majestic Asiatic Lion species in its native environment
            along with the diverse variety of birds and small animals. It is a
            significant dilemma for the maldharis, a tribe living inside the
            forest since the livestock is often preyed upon by lions. The
            Panther and the Hyena are the two such predators. Along with the
            long-tailed langur, bear, Sambar, Chowsingha, Chital, Indian Deer,
            Chinkara, Nilgai, and many others can also be found here.
          </li>
          <h1 class="text-3xl font-extrabold mb-4 [font-family:'Inter-SemiBold',Helvetica] uppercase">
            Main Attraction
          </h1>

          <li class="text-lg mb-6">
            Gir National Park and Wildlife Sanctuary, also known as Sasan Gir,
            is a forest, national park, and wildlife sanctuary near Talala Gir
            in Gujarat, India. It is located 43 km (27 mi) north-east of
            Somnath, 65 km (40 mi) south-east of Junagadh and 60 km (37 mi)
            south-west of Amreli.
          </li>
          <li class="text-lg mb-6">
            Gir National Park is the only area, outside of Africa where you can
            witness the majestic Asiatic Lion species in its native environment
            along with the diverse variety of birds and small animals. It is a
            significant dilemma for the maldharis, a tribe living inside the
            forest since the livestock is often preyed upon by lions. The
            Panther and the Hyena are the two such predators. Along with the
            long-tailed langur, bear, Sambar, Chowsingha, Chital, Indian Deer,
            Chinkara, Nilgai, and many others can also be found here.
          </li>
        </div>
      </section>

      <section className="bg-[#D3E4D0] ">
        {" "}
        <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row justify-between">
            <div class="flex-1">
              <h1 class="text-3xl font-bold uppercase [font-family:'Inter-SemiBold',Helvetica]">
                Gir National Park
              </h1>
              <p class="mt-4 font-light [font-family:'Inter-SemiBold',Helvetica] uppercase">
                Explore the majestic home of the Asiatic lions
              </p>
            </div>
            <button class="mt-4 md:mt-0 bg-white text-black font-bold py-2 px-4 rounded shadow">
              VISIT NOW
            </button>
          </div>

          {/* three boxes */}
          <div class="flex flex-wrap justify-between">
            <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
              <h3>By Bus </h3>
            </div>

            <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
              <h3>By Train</h3>
            </div>

            <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
              <h3>By Aeroplane</h3>
            </div>
          </div>

          {/* timing , Entry fee , holiday */}
          <div class="mt-8 [font-family:'Inter-SemiBold',Helvetica]">
            <div class="mb-6 flex">
              <h3 class="text-xl font-bold">Timing :</h3>
              <p class="font-semibold ml-5 text-[#21825c] font-serif text-xl">
                6:00 AM - 9:00 PM
              </p>
            </div>

            <div class="mb-6 flex">
              <h3 class="text-xl font-bold">Entry Fee :</h3>
              <p class="font-serif text-xl font-semibold ml-5 text-[#21825c]">
                ₹1000 per person
              </p>
            </div>

            <div class="mb-6 flex">
              <h3 class="text-xl font-bold">Holiday :</h3>
              <p class="font-serif text-xl font-semibold ml-5">Sunday</p>
            </div>
          </div>

          <div class="mt-4 flex [font-family:'Inter-SemiBold',Helvetica]">
            <h3 class="text-xl font-bold">Website : </h3>
            <a
              href="gir.com"
              class="ml-5  underline font-serif text-xl font-semibold text-[#21825c]"
            >
              gir.com
            </a>
          </div>

          <div class="mt-4 flex [font-family:'Inter-SemiBold',Helvetica]">
            <h3 class="text-xl font-bold">Quick Glimpse : </h3>
            <a
              href="youtube.com"
              class="ml-5 text-[#21825c] font-serif text-xl font-semibold underline"
            >
              youtube.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
