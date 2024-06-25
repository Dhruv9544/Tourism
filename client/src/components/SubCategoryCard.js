import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StarIcon from "../UI/StarIcon";

const SubCategoryCard = () => {
  const [result, setresult] = useState([]);
  const urlparameter = useParams();
  console.log(urlparameter);
  useEffect(() => {
    const fetchsubcategorydata = async () => {
      const Response = await fetch(
        `http://localhost:9999/getReqCategory?Category=${urlparameter.subcategory}`
      );
      if (!Response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await Response.json();
      setresult(data.data);
      // console.log(result);
    };
    fetchsubcategorydata().catch((e) => {
      console.log(e);
    });
  }, [urlparameter.subcategory]);

  return (
    <div className="pt-6 pb-12 ">
      {result.map((item, index) => (
        <div id="card" key={item._id}>
          <Link
            to={`/category/${urlparameter.id}/${urlparameter.subcategory}/${item.DestinationName}`}
          >
            <div className="container w-100 2xl:w-4/5 xl:w-4/5 lg:w-4/5  mx-auto flex flex-col">
              <div
                v-for="card in cards"
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }  overflow-hidden bg-[#FEFEFA] rounded-lg shadow-xl  mt-4 w-100 mx-2`}
              >
                <div className="h-68 w-auto md:w-1/2">
                  <img
                    className="inset-0 h-full w-full object-center"
                    style={{ height: "100%" }}
                    src={item.Thumbnail}
                    alt={item.DestinationName}
                  />
                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">
                    {item.DestinationName}
                  </h3>
                  <p className="mt-2">{item.AboutPlace}</p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    Open Time : {item.OpenTime}
                  </p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    Close Time : {item.CloseTime}
                  </p>
                  <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    Holiday : {item.Holiday}
                  </p>
                  <div className="flex text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                    Rating : <StarIcon rating={item.Rating} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryCard;
