import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
export default router;
