import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Navbar</h1>
      <div id="carousel"></div>
      <Outlet></Outlet>
    </>
  );
};
export default Root;
