import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/service/",
//     element: <App />,
//     children: [
//       {
//         path: "/service/vacancy",
//         element: <Vacancy />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
