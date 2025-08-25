import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PropertyPage from "./pages/PropertyPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/property/:id", element: <PropertyPage /> },
]);

export default router;
