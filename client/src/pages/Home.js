import { Fragment, useEffect, useRef, useState } from "react";
import "./Home.css";
import Slider from "./../UI/Carousel";
import Loader from "../components/Loader";
import Category from "../components/Category";
import Season from "../components/Season";
import OneDayTrip from "../components/OneDayTrip/OneDayTrip";
import { ip } from "../ip";
const Home = () => {
  const [loading, setloading] = useState(false);
  const carouselref = useRef(null);
  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const Response = await fetch(`${ip}/gettopdestination`);
      if (!Response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await Response.json();
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
    <Fragment>
      {loading && <Loader></Loader>}
      <div id="carousel" className="" ref={carouselref}></div>

      <div className="category">
        <div className="card">
          <Category></Category>
        </div>
      </div>
      <div>
        <OneDayTrip />
      </div>
      <div className="season">
        <Season></Season>
      </div>
    </Fragment>
  );
};
export default Home;
