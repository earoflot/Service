import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Vacancy from "../Pages/Service/Vacancy.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container"></div>
        <NavigationDrawer />
        <Vacancy />

        <Footer />
      </div>
    </>
  );
}

export default App;
