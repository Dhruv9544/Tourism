import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMemo } from "react";
const CategoryCard = (props) => {
  const subcategory = useSelector((state) => state.Maincategory.subcategories);
  console.log(subcategory);
  const data = useMemo(() => {
    return subcategory.find((c) => c.name === props.title);
  }, []);
  console.log(data.subcategory[0]);
  return (
    <div className="w-80  bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 hover:scale-110  duration-200 sm:items-center">
      {/* <Link> */}
      <img
        className="rounded-t-lg w-80 h-60 "
        src={props.image}
        alt={props.title}
      />
      {/* </Link> */}
      <div className="p-5">
        <p className="mb-3 font-bold text-black dark:text-black">
          {props.title}
        </p>
        <Link
          to={`category/${props.id}/${data.subcategory[0]}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#ffffdd] rounded-lg hover:bg-[#ecec6f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ffffdd] dark:hover:bg-[#ecec6f] dark:focus:ring-blue-800"
        >
          Explore
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
