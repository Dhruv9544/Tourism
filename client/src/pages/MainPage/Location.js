import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ip } from "../../ip";

const Location = () => {
  const [data, setData] = useState([]);

  const { id, subcategory, name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${ip}/getAllPlaces?DestinationName=${name}`);
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
    <div className="bg-[#D3E4D0] ">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="flex-1">
            <h1 class="text-3xl font-bold uppercase [font-family:'Inter-SemiBold',Helvetica]">
              {name}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-72 bg-gray-200 m-4 text-center flex-shrink-0 rounded-lg">
            <h2 className="text-xl font-bold p-4">By Bus</h2>
            <p className="px-4 pb-4">{data?.GetThereByBus}</p>
          </div>

          <div className="w-72 bg-gray-200 m-4 text-center flex-shrink-0 rounded-lg">
            <h2 className="text-xl font-bold p-4">By Train</h2>
            <p className="px-4 pb-4">{data?.GetThereByTrain}</p>
          </div>

          <div className="w-72 bg-gray-200 m-4 text-center flex-shrink-0 rounded-lg">
            <h2 className="text-xl font-bold p-4">By Aeroplane</h2>
            <p className="px-4 pb-4">{data?.GetThereByPlane}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
