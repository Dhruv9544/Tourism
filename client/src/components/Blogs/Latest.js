import { useState, useEffect } from "react";

const Latest = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const fetchblogs = () => {
      var requestOptions = {
        method: "GET",
      };

      fetch(`http://localhost:9999/blog/`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // const data = JSON.parse(result);
          setblogs(result.data);
          console.log(result.data);
        })
        .catch((error) => console.log("error", error));
    };
    fetchblogs();
  }, []);
  return (
    <div>
      {blogs.map((item) => (
        <div className="bg-white border-y-2 rounded-lg shadow-lg shadow-blue-gray-300/50 border border-white overflow-hidden md:flex m-5">
          <div className="md:w-1/2">
            <img
              src={item.Thumbnail}
              alt="Blog"
              className="w-full h-auto md:h-full object-cover"
              style={{ transformOrigin: "center" }}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl uppercase font-bold text-gray-800 mb-4">
              {item.Title}
            </h1>
            <p className="text-gray-800 break-words leading-relaxed">
              {item.About}
            </p>
            <div className="mt-6">
              <div className="flex flex-wrap items-center text-gray-600 mb-4">
                <p className="mr-2">Posted on</p>
                <span className="text-blue-500">{item.CreatedAt}</span>
                <p className="mx-2">in</p>
                <span className="text-blue-500">{item.Category}</span>
                <p className="mx-2">by</p>
                <span className="text-blue-500">{item.Author_Name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latest;
