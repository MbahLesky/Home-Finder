// router.js
// This file defines the application's route configuration using React Router.
// It maps URL paths to page components and exports the router for use in App.js.
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PropertyPage from "./pages/PropertyPage";
import SelectPropertyType from "./layouts/SelectPropertyType";
import SaleRentStep from "./layouts/SaleRentStep";
import PropertyInfoStep from "./layouts/PropertyInfoStep";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/property/:id", element: <PropertyPage /> },
  { path: "/add-property/select-type", element: <SelectPropertyType /> }, 
  { path: "/add-property/sale-rent", element: <SaleRentStep /> },
  { path: "/add-property/info", element: <PropertyInfoStep /> } 
  
]);

export default router;
