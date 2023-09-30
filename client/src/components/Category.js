import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard/CategoryCard";
const Category = () => {
  const data = useSelector((state) => state.Maincategory.category);
  console.log(data);
  return (
    <div>
      <div className="container mx-auto py-12 px-9">
        <h1 className="text-3xl font-semibold  mb-8">Popular Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 gap-y-10 gap-x-10">
          {data.map((item) => (
            <CategoryCard
              title={item.name}
              image={item.image}
              key={item.name}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
