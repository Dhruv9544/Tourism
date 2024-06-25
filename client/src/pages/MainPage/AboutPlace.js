import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutPlace = () => {
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
  return (
    <div>
      <section className="bg-lime-50">
        <div class="container mx-auto p-8 bg-lime-50">
          <h1 class="text-3xl font-extrabold mb-4 [font-family:'Inter-SemiBold',Helvetica] uppercase">
            History
          </h1>

          <li class="text-lg mb-6">{data.AboutPlace}</li>

          <h1 class="text-3xl font-extrabold mb-4 [font-family:'Inter-SemiBold',Helvetica] uppercase">
            Main Attraction
          </h1>

          <li class="text-lg mb-6">{data.MainAttractions}</li>
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
                {data.OpenTime} -{data.CloseTime}
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
              <p class="font-serif text-xl font-semibold ml-5">
                {data.Holiday}
              </p>
            </div>
          </div>

          <div class="mt-4 flex [font-family:'Inter-SemiBold',Helvetica]">
            <h3 class="text-xl font-bold">Website : </h3>
            <a
              href={data.OfficialWebsiteLink}
              class="ml-5  underline font-serif text-xl font-semibold text-[#21825c]"
            >
              {data.OfficialWebsiteLink}
            </a>
          </div>

          <div class="mt-4 flex [font-family:'Inter-SemiBold',Helvetica]">
            <h3 class="text-xl font-bold">Quick Glimpse : </h3>
            <a
              href={data.VisualContent}
              class="ml-5 text-[#21825c] font-serif text-xl font-semibold underline"
            >
              {data.VisualContent}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPlace;
