import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useMemo } from "react";
const CategoryCard = (props) => {
  console.log(props);
  const subcategory = useSelector((state) => state.Maincategory.subcategories);
  const data = useMemo(() => {
    return subcategory.find((c) => c.name === props.title);
  }, [props.title, subcategory]);
  const firstSubcategory = data?.subcategory?.[0] || "";
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 uppercase">{props.title}</h2>

        <Link
          to={`category/${props.id}/${firstSubcategory}`}
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
