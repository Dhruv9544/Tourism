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
      <div className="mt-20">
        <FooterWithLogo />
      </div>
    </>
  );
};
export default Root;
