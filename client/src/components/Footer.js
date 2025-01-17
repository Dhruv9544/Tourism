import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export const FooterWithLogo = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  return (
    <footer className="w-full bg-[#252525] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#252525]  text-center md:justify-between">
        <Link to={"/"}>
          <h1 className="text-white">Tourism</h1>
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
          <li>
            <Link to={"adminblogs"}>
              <Typography
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Blog Admin
              </Typography>
            </Link>
          </li>
          <li>
            <Link to={"admin/dashboard"}>
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
                Contact
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; {year} Tourism
      </Typography>
      <Typography color="white" className="text-center font-normal">
        Last Updated : {currentDate}
      </Typography>
    </footer>
  );
};
