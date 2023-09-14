import { Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export function SubCategory() {
  const navigate = useNavigate();
  const urlparameter = useParams();
  const categoryid = urlparameter.id;
  const category = useSelector((state) => state.Maincategory.subcategories);
  let data;
  category.forEach((element) => {
    if (element.id === categoryid) data = element;
  });
  console.log(data);

  return (
    <Fragment>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={data.image}
          alt={data.name}
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-50 -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="blue-gray">
              {data.name}
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="flex  flex-wrap items-center gap-4 justify-center mt-5">
        {data.subcategory.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 [&>button]:bg-deep-orange-400 [&>button]:hover:bg-deep-orange-900  "
                : "flex items-center gap-3"
            }
          >
            <Button>{item}</Button>
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
}

export default SubCategory;
