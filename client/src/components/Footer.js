import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export const FooterWithLogo = () => {
  return (
    <footer className="w-full bg-[#252525] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#252525]  text-center md:justify-between">
        {/* <img src={nature} alt="logo-ct" className="w-10" /> */}
        <h1 className="text-white">Tourism</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
          <li>
            <Link to={"about"}>
              <Typography
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={"admin"}>
              <Typography
                color="white"
                className="font-normal transition-colors  hover:text-blue-500 focus:text-blue-500"
              >
                Admin
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Typography
                color="white"
                className="font-normal transition-colors  hover:text-blue-500 focus:text-blue-500"
              >
                Our Blogs
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={"contact"}>
              <Typography
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 Tourism Tailwind
      </Typography>
    </footer>
  );
};
