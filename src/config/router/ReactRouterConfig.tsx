import {createBrowserRouter} from "react-router-dom";
import Error from "../../ui/page/Error";
import Property from "../../ui/page/Property";
import Blog from "../../ui/page/Blog";
import Faq from "../../ui/page/Faq";
import ContactUs from "../../ui/page/ContactUs";
import PropertyDetail from "../../ui/page/PropertyDetail";
import HomePage from "../../ui/page/HomePage";
import LoginPage from "../../ui/page/LoginPage";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement:<Error/>
  },
  {
    path: "property",
    element: <Property />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "contactUs",
    element: <ContactUs />,
  },
  {
    path: "property/detail/:propertyId",
    element: <PropertyDetail/>,
  },
  {
    path: "error",
    element: <Error />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);