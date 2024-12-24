import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Apply from "./Pages/Apply/Apply.jsx";

const router = createBrowserRouter([
  { path: "/service/", element: <App /> },
  { path: "/service/Home", element: <Apply /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
