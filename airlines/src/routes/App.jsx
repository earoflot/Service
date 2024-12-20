import "bootstrap/dist/css/bootstrap.min.css";
import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <NavigationDrawer></NavigationDrawer>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
