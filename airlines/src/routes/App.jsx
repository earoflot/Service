import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import Vacancy from "../Pages/Service/Vacancy.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <NavigationDrawer />
          <Vacancy />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
