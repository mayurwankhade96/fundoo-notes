import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import { action as signInAction } from "./pages/auth/SignIn/action";
import { action as signUpAction } from "./pages/auth/SignUp/action";

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
    action: signUpAction,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
