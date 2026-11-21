
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import About from "./Pages/About.jsx";

import MainLayout from "./Layouts/MainLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> }
    ],
  },
   {
    basename: "/adasa",
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
