import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import UserDashboard from "@/pages/dashboard/dashboardUser/user";
import ProductDashboard from "@/pages/dashboard/product";
import NotFound from "../pages/not-found";
import AddUser from "@/pages/dashboard/dashboardUser/addUser";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard/user",
      element: <UserDashboard />,
    },
    {
      path: "/dashboard/user/add",
      element: <AddUser />,
    },
    {
      path: "/dashboard/product",
      element: <ProductDashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}
