import CategoryCard from "./CategoryCard/CategoryCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Category = () => {
  const dat = useSelector((state) => state.Maincategory.category);
  return (
    <div>
      <section id="creations">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h1 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Popular Category
            </h1>

            <button className="hidden btn md:block font-medium uppercase px-2 border border-black text-black bg-[#ffffdd] rounded-lg hover:bg-[#eaea48] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ffffdd] dark:hover:bg-[#ebeb3d] dark:focus:ring-blue-800 ">
              See All
            </button>
          </div>

          <div className="flex flex-wrap justify-between w-full space-y-6 text-2xl text-white uppercase sm:items-center">
            {dat.map((item) => (
              <CategoryCard image={item.image} title={item.name}></CategoryCard>
            ))}
          </div>

          {/* <div className="item-container mt-10">
            <CategoryCard
              image={historical}
              title={"HISTORICAL"}
            ></CategoryCard>
            <CategoryCard image={nature} title={"NATURE"}></CategoryCard>
            <CategoryCard
              image={hillstation}
              title={"HILL STATION"}
            ></CategoryCard>
          </div> */}

          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
