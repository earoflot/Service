import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import Vacancy from "../Pages/Service/Vacancy.jsx";
import Home from "../Pages/Home/Home.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container"></div>
        <NavigationDrawer />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
