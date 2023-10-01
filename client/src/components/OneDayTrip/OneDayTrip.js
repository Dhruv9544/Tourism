import Carousel from "./Carousel";
import { useState, useEffect } from "react";
const OneDayTrip = () => {
  const [districts, setdistricts] = useState([]);
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
          setdistricts(result.data);
          console.log(result.data);
        })
        .catch((error) => console.log("error", error));
    };
    fetchdistricts();
  }, []);
  return (
    <>
      <div className="bg-[#fff3da]">OneDayTrip</div>
      <Carousel district="Junagadh"></Carousel>
    </>
  );
};

export default OneDayTrip;
