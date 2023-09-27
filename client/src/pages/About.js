import React, { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:9999/search?q=${formData.search}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // const data = JSON.parse(result);
        // console.log(data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="w-full md:w-1/2 mx-auto p-4">
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
            className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default About;
