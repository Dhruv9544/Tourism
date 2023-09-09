import { useEffect, useRef, useState } from "react";
import "./Home.css";
import Slider from "./../UI/Carousel";
import Loader from "../components/Loader";
import Category from "../components/Category";
const Home = () => {
  const [loading, setloading] = useState(false);
  const carouselref = useRef(null);
  useEffect(() => {
    setloading(true);
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
      setloading(false);
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
      {loading && <Loader></Loader>}
      <div id="carousel" ref={carouselref}>
        <div className="title">
          <h1>Top Destination</h1>
        </div>
      </div>

      <div className="category">
        <div className="card">
          <Category></Category>
        </div>
      </div>
    </>
  );
};
export default Home;
