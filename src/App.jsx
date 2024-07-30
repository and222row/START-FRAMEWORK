import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/home/Home";

function App() {
  const route = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/portfolio", element: <Portfolio /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
