import Carousel from "./Carousel";
import { useState, useEffect } from "react";
const OneDayTrip = () => {
  const [districts, setdistricts] = useState([]);
  const [formData, setFormData] = useState({
    district: "Junagadh",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchdistricts = () => {
      var requestOptions = {
        method: "GET",
      };

      fetch(`http://localhost:9999/getdistricts`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // const data = JSON.parse(result);
          setdistricts(result.data[0].district);
          console.log(result.data[0].district);
        })
        .catch((error) => console.log("error", error));
    };
    fetchdistricts();
  }, []);

  return (
    <div className="content-center">
      <div className=" flex w-screen items-center justify-center bg-[#fff3da] ">
        <select
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          className="text-black p-2 text-center  bg-[#cbb380] "
        >
          <option defaultValue="Junagadh">Junagadh</option>
          {!districts
            ? "Loading"
            : districts.map((item) => (
                <option key={item} value={item} className="text-black ">
                  {item}
                </option>
              ))}
        </select>
      </div>

      <Carousel district={formData.district}></Carousel>
    </div>
  );
};

export default OneDayTrip;
