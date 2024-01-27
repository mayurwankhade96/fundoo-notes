import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { action as signInAction } from "./pages/SignIn/action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/signin' />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    action: signInAction,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
