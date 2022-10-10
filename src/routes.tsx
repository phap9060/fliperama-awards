import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import MainPage from "./pages/mainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/vote",
    element: <MainPage />,
  },
]);
export default router;
