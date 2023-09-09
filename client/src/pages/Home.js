import { useEffect, useRef } from "react";
import "./Home.css";
import Slider from "./../UI/Carousel";
const Home = () => {
  const carouselref = useRef(null);
  useEffect(() => {
    const fetchdata = async () => {
      const Response = await fetch("http://localhost:9999/gettopdestination");
      if (!Response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await Response.json();
      // console.log(data);
      const result = data.data;
      let dataarray = [];
      for (const key in result) {
        dataarray.push({
          id: key,
          name: result[key].DestinationName,
          imgUrl: result[key].Thumbnail,
          desc: result[key].AboutPlace,
        });
      }
      console.log(dataarray);
      if (carouselref) {
        Slider(dataarray);
      }
    };
    fetchdata().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <div id="carousel" ref={carouselref}></div>
      <div>HELLO</div>
    </>
  );
};
export default Home;
