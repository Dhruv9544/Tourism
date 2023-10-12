import { useEffect, useState } from "react";
import StarIcon from "../UI/StarIcon";
const CustomSearch = () => {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchsearch = () => {
    fetch(`http://localhost:9999/search?q=${formData.search}`)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        const data = JSON.parse(result).data;
        console.log(data);
        setResult(data);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchsearch();
  };

  return (
    <div className="bg-[#fff3da] max-w-screen min-h-screen">
      <div className=" h-100 max-h-screen md:w-1/2 mx-auto p-4 ">
        <form className="relative" onSubmit={handleSubmit}>
          <div className="relative rounded-lg shadow-lg">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg bg-gray-100 focus:outline-none focus:bg-white text-gray-800"
              placeholder="Search..."
              name="search"
              value={formData.search}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 px-4 py-2 bg-[#000] text-white rounded-r-lg hover:bg-gray-700 focus:outline-none focus:bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="pt-6 pb-12 ">
        {result ? console.log(result.length) : console.log(result.length)}
        {result.map((item, index) => (
          <div id="card" key={item._id}>
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
                    className="inset-0 h-full w-full object-center"
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
    </div>
  );
};

export default CustomSearch;
