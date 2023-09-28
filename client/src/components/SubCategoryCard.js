import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StarIcon = (props) => {
  const size = props.rating;

  let arr = Array.from({ length: size }, (x, i) => i);
  // console.log(arr);
  return arr.map((item) => (
    <svg
      key={item}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  ));
};

const SubCategoryCard = () => {
  const [result, setresult] = useState([]);
  const urlparameter = useParams().subcategory;
  console.log(urlparameter);
  useEffect(() => {
    const fetchsubcategorydata = async () => {
      const Response = await fetch(
        `http://localhost:9999/getReqCategory?Category=${urlparameter}`
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
  }, [urlparameter]);

  return (
    // <div>
    //   <div class="flex justify-between gap-5 mx-16 mt-5">
    //     {result.map((item) => (
    //       <div class="w-1/2 relative rounded-lg overflow-hidden group">
    //         <img src={item.Thumbnail} alt="" class="w-full h-60" />
    //         <div class="absolute inset-0 flex items-center h-60 justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:visible">
    //           {/* <!-- Left-aligned heading and stars --> */}
    //           <div class="w-full h-60 flex items-center justify-center p-2">
    //             <h2 class="text-white text-2xl font-semibold ml-3">
    //               {item.DestinationName}
    //             </h2>
    //             <div class="flex items-center space-x-2 mr-3"></div>
    //           </div>
    //         </div>
    //         {/* below content  */}
    //         <div class=" absolute bottom-0 w-full flex items-start justify-between bg-transparent transition-opacity duration-300  p-2 opacity-100 visible group-hover:opacity-0 group-hover:invisible">
    //           {/* <!-- Right-aligned heading and stars --> */}
    //           <div class="flex items-center justify-between w-full p-2">
    //             <h2 class="text-white text-2xl font-semibold ml-3">
    //               {item.DestinationName}
    //             </h2>
    //             <div className="flex items-center space-x-2 mr-3">
    //               <StarIcon number={item.Rating} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="pt-6 pb-12 ">
      {result.map((item, index) => (
        <div id="card" key={item._id}>
          {/* <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Articles</h2> */}
          {/* <!-- container for all cards --> */}
          <div className="container w-100 2xl:w-4/5 xl:w-4/5 lg:w-4/5  mx-auto flex flex-col">
            {/* <!-- card --> */}
            <div
              v-for="card in cards"
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }  overflow-hidden bg-[#FEFEFA] rounded-lg shadow-xl  mt-4 w-100 mx-2`}
            >
              {/* <!-- media --> */}
              <div className="h-68 w-auto md:w-1/2">
                <img
                  className="inset-0 h-full w-full "
                  style={{ height: "100%" }}
                  src={item.Thumbnail}
                  alt={item.DestinationName}
                />
              </div>
              {/* <!-- content --> */}
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
        </div>
      ))}
    </div>
  );
};

export default SubCategoryCard;
