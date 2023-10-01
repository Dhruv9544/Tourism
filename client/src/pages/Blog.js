import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import image from "./../assets/gujarat_cover.jpg";
import BlogComponent from "../components/Blogs/Blog";
const Blog = () => {
  const [category, setcategory] = useState([]);
  const cat = useSelector((state) => state.Maincategory.subcategories);
  useEffect(() => {
    setcategory(cat);
    console.log(cat);
  }, [cat]);

  return (
    <div className="bg-[#fff3da]">
      {/* {category.map((item) => (
        <BlogComponent category={item.name}></BlogComponent>
      ))} */}
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt="Gujarat Blogs"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-50 -translate-x-2/4 justify-between rounded-xl border border-white bg-black/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="white">
              Gujarat Blogs
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="container mx-auto flex mt-5 ">
        <div className="w-3/4">
          <Outlet />
        </div>
        <div className="flex flex-col w-1/4">
          <h3 className="text-2xl font-serif font-semibold text-center p-6 border-t border-r border-black border-l">
            Categories
          </h3>
          <NavLink
            to={"all"}
            className={({ isActive }) =>
              isActive
                ? "p-6 text-center bg-orange-400 border-r border-l border-black "
                : "p-6 text-center hover:bg-blue-gray-200 border-r border-black bg-blue-gray-50 hover:bg-black/20 border-l"
            }
          >
            All Blogs
          </NavLink>
          <NavLink
            to={"latest"}
            className={({ isActive }) =>
              isActive
                ? "p-6 text-center  bg-orange-400 border-r border-l border-black"
                : "p-6 text-center hover:bg-blue-gray-200 border-r border-black bg-blue-gray-100 hover:bg-black/20 border-l"
            }
          >
            Latest Blogs
          </NavLink>
          {console.log(category.length)}
          {category.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.name}
              // relative="path"
              // relative="route"
              className={({ isActive }) =>
                isActive
                  ? `text-center gap-3 p-6 bg-orange-400 border-r border-l border-black ${
                      index % 2 === 0 ? "bg-orange-400" : "bg-orange-400"
                    }`
                  : `text-center gap-3 p-6 hover:bg-black/20 border-r border-l border-black ${
                      index % 2 === 0 ? "bg-blue-gray-50" : "bg-blue-gray-100 "
                    } ${
                      category.length - 1 === index
                        ? "border-b border-black "
                        : ""
                    }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
