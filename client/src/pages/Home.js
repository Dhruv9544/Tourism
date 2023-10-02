import { Fragment, useEffect, useRef, useState } from "react";
import "./Home.css";
import Slider from "./../UI/Carousel";
import Loader from "../components/Loader";
import Category from "../components/Category";
import Season from "../components/Season";
import OneDayTrip from "../components/OneDayTrip/OneDayTrip";
import { none } from "ol/centerconstraint";
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
      <iframe
        width="700"
        height="600"
        src="https://api.maptiler.com/tiles/5bdae013-f761-4248-bfd4-d6c2bbb8c29e/?key=bpMjU6oyfnSFNlpyGs1q#6.8/22.59254/71.40007"
      ></iframe>
    </Fragment>
  );
};
export default Home;
