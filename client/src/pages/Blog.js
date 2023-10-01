import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import image from "./../assets/category/hillstation.jpg";
import BlogComponent from "../components/Blogs/Blog";
const Blog = () => {
  const [category, setcategory] = useState([]);
  const cat = useSelector((state) => state.Maincategory.subcategories);
  useEffect(() => {
    setcategory(cat);
    console.log(cat);
  }, [cat]);

  return (
    <div>
      {/* {category.map((item) => (
        <BlogComponent category={item.name}></BlogComponent>
      ))} */}
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt="Gujarat Blogs"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-50 -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="blue-gray">
              Gujarat Blogs
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="flex  flex-wrap items-center gap-4 justify-center mt-5"></div>
      <div className="flex mt-5">
        <div className="">
          <Outlet />
        </div>
        <div className="flex flex-col">
          <h1>Categories</h1>
          <NavLink
            to={"all"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 [&>button]:bg-deep-orange-400 [&>button]:hover:bg-deep-orange-900  "
                : "flex items-center gap-3"
            }
          >
            <Button>All Blogs</Button>
          </NavLink>
          <NavLink
            to={"latest"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 [&>button]:bg-deep-orange-400 [&>button]:hover:bg-deep-orange-900  "
                : "flex items-center gap-3"
            }
          >
            <Button>Latest Blogs</Button>
          </NavLink>
          {category.map((item) => (
            <NavLink
              key={item.name}
              to={item.name}
              // relative="path"
              // relative="route"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 [&>button]:bg-deep-orange-400 [&>button]:hover:bg-deep-orange-900  "
                  : "flex items-center gap-3"
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
