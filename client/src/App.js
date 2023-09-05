import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InputData from "./pages/InputData";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/admin",
    element: <InputData></InputData>,
  },
]);

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
