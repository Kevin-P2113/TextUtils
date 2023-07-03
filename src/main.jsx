import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import TextForm from "./Components/TextForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// react router which has the app component and nested about and textform component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "About/",
        element: <About></About>,
      },
      {
        path: "/",
        element: <TextForm heading="Enter your Text here:"></TextForm>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// for passing n-data: https://stackoverflow.com/questions/64112981/react-js-bootstrap-accordion-change-background-color-when-clicked
