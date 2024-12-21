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
        <div className="container">
          <NavigationDrawer></NavigationDrawer>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vacancy" element={<Vacancy />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
