import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
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
      <section className="bg-yellow-100 min-h-screen flex flex-wrap items-center justify-center">
        <div className="text-white font-bold flex flex-wrap justify-around items-center container mx-auto p-5 text-2xl font-serif  ">
          {data?.RelatedPhotos?.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 p-4">
              <img
                src={item}
                alt="Product"
                className="object-cover w-full h-64 rounded-lg"
                style={{ minHeight: "200px", minWidth: "200px" }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
