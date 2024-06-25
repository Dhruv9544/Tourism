import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Home from "./pages/Home";
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
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminSignup";
import DashBoard from "./components/Admin/DashBoard";
import AdminLayout from "./components/Admin/Layout/AdminLayout";
import AddPlace from "./components/Admin/DestinationInputData";
import MainPage from "./pages/MainPage/MainPage";
import AboutPlace from "./pages/MainPage/AboutPlace";
import Location from "./pages/MainPage/Location";
import Gallery from "./pages/MainPage/Gallery";
import AllBlogs from "./components/Admin/AllBlogs";
import AllPlaces from "./components/Admin/AllPlaces";
import BlogEditData from "./components/Admin/BlogEditData";

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
        errorElement: <ErrorPage />,
        children: [
          {
            path: "aboutplace",
            element: <AboutPlace />,
            errorElement: <ErrorPage />,
          },
          {
            path: "gallery",
            element: <Gallery />,
            errorElement: <ErrorPage />,
          },
          {
            path: "location",
            element: <Location />,
            errorElement: <ErrorPage />,
          },
        ],
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
      {
        path: "category/:id/:subcategory/:name",
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "about",
            element: <AboutPlace />,
            errorElement: <ErrorPage />,
          },
          {
            path: "gallery",
            element: <Gallery />,
            errorElement: <ErrorPage />,
          },
          {
            path: "location",
            element: <Location />,
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
        path: "allblogs",
        element: <AllBlogs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "allplaces",
        // element: Allplaces
        element: <AllPlaces />,
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
        path: "addcategory",
        element: <BlogData />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blogsedit",
        element: <BlogEditData />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <PrimeReactProvider>
      <RouterProvider router={routes}></RouterProvider>
    </PrimeReactProvider>
  );
};

export default App;
