import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FetchMainCategory } from "../API/FetchMainCategory";
import { FetchTopDestination } from "../API/FetchTopDestination";

const Root = () => {
  FetchMainCategory();
  FetchTopDestination();
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
export default Root;
