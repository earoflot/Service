// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./routes/App.jsx";
// import "./index.css";
// import Home from "./Pages/Home/Home.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/service/",
//     element: <App />,
//     children: [{ path: "/service/home/", element: <Home /> }],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./routes/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
