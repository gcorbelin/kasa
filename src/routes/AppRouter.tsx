import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";
import { Detail, loader as detailLoader } from "../pages/Detail/Detail";
import { About } from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "detail/:detailId",
    element: <Detail />,
    loader: detailLoader,
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
