import "bootstrap/dist/css/bootstrap.min.css";
import NavigationDrawer from "./Components/NavigationDrawer/NavigationDrawer";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Services from "./Pages/Service/Services";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <NavigationDrawer></NavigationDrawer>
          <Services></Services>

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
