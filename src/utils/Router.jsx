import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import LoginPage from "../pages/login/LoginPage.jsx";
import SignupPage from "../pages/signup/SignupPage.jsx";
import FeedbackPage from "../pages/feedback/FeedbackPage.jsx";
import PrivateRoutes from "./PrivateRoute.jsx";
import LandingPage from "../pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  // {
  //   path: "/feedback",
  //   element: <FeedbackPage />,
  // },

  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/feedback",
        element: <FeedbackPage />,
      },
    ],
  },
]);

export default router;
