import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
      {category.map((item) => (
        <BlogComponent category={item.name}></BlogComponent>
      ))}
    </div>
  );
};

export default Blog;
