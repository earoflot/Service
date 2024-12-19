import "bootstrap/dist/css/bootstrap.min.css";
import NavigationDrawer from "./Components/NavigationDrawer/NavigationDrawer";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import HomeImages from "./Components/Main/Home_imges/HomeImages";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <NavigationDrawer></NavigationDrawer>
          <HomeImages></HomeImages>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
