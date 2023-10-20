import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./components/Admin/DestinationInputData";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubCategory from "./pages/SubCategory";
import SubCategoryCard from "./components/SubCategoryCard";
import CustomSearch from "./pages/CustomSearch";
import Blog from "./pages/Blog";
import Latest from "./components/Blogs/Latest";
import All from "./components/Blogs/All";
import CategoryBlog from "./components/Blogs/CategoryBlog";
import BlogData from "./components/Admin/BlogInputData";
import { MainPage } from "./pages/MainPage";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignup";
import DashBoard from "./components/Admin/DashBoard";
import AdminLayout from "./components/Admin/Layout/AdminLayout";
import AddPlace from "./components/Admin/DestinationInputData";
// const Home = React.lazy(() => import("./pages/Home"));
// const Root = React.lazy(() => import("./pages/Root"));
// const Blog = React.lazy(() => import("./pages/Blog"));
// const SubCategory = React.lazy(() => import("./pages/SubCategory"));
// const SubCategoryCard = React.lazy(() =>
//   import("./components/SubCategoryCard")
// );
// const CategoryBlog = React.lazy(() =>
//   import("./components/Blogs/CategoryBlog")
// );
// const Latest = React.lazy(() => import("./components/Blogs/Latest"));
// const All = React.lazy("./components/Blogs/All");
// const BlogData = React.lazy("./pages/BlogData");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
         element: <About />,
        //element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "ourblogs",
        element: <Blog />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "all/",
            element: <All />,
            errorElement: <ErrorPage />,
          },
          {
            path: "latest",
            element: <Latest />,
            errorElement: <ErrorPage />,
          },
          {
            path: ":category",
            element: <CategoryBlog />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "customsearch",
        element: <CustomSearch />,
        errorElement: <ErrorPage />,
      },
      {
        path: "category/:id",
        element: <SubCategory />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":subcategory",
            element: <SubCategoryCard />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },

  {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "addplace",
        element: <AddPlace />,
        errorElement: <ErrorPage />,
      },
      {
        path: "addblog",
        element: <BlogData />,
        errorElement: <ErrorPage />,
      },
      {
        path: "addcategroy",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
