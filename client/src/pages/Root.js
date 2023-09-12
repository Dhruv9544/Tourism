import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FetchMainCategory } from "../API/FetchMainCategory";

const Root = () => {
  FetchMainCategory();
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
export default Root;
