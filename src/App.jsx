
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import About from "./pages/About.jsx";

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
]);

export default function App() {
  return <RouterProvider router={router} />;
}
