import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import InputData from "./pages/InputData";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
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
