// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Property from "./ui/page/Property";
import Blog from "./ui/page/Blog";
import Faq from "./ui/page/Faq";
import ContactUs from "./ui/page/ContactUs";
import PropertyDetail from "./ui/page/PropertyDetail";
import Error from "./ui/page/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
