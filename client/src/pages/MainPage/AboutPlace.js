const AboutPlace = () => {
  return (
    <div>
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
        <div class="container mx-auto px-4 py-8">
          {/* three boxes */}

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
    </div>
  );
};

export default AboutPlace;
