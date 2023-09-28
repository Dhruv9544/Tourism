import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FetchMainCategory } from "../API/FetchMainCategory";
import { FetchTopDestination } from "../API/FetchTopDestination";
import { FooterWithLogo } from "../components/Footer";

const Root = () => {
  FetchMainCategory();
  FetchTopDestination();
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="">
        <FooterWithLogo />
      </div>
    </>
  );
};
export default Root;
