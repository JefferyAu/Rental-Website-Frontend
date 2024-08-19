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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
