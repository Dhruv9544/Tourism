import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./pages/InputData";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubCategory from "./pages/SubCategory";
import SubCategoryCard from "./components/SubCategoryCard";
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
      },
      {
        path: "contact",
        element: <Contact />,
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
    path: "/admin",
    element: <InputData />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
