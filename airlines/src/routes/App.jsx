import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";
import Vacancyitems from "../Items/vacancy/Vacancyitems.jsx";
import Notificationitems from "../Items/notification/Notificationitems.jsx";
import Apply from "../Pages/Apply/Apply.jsx";

function App() {
  const vacancyData = [
    {
      /* This is a Gound Handling */
      jobImage: "./images/Ground_Handling.jpeg",
      jobTitle: "Ground Handling",
      jobDescription:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
      jobUpdated: " Last updated 3 mins ago",
    },
    {
      /* This is a Retails Shop*/
      jobImage: "./images/Retail_shop.avif",
      jobTitle: "Airport Retails Shops",
      jobDescription:
        "As a retail team member, you'll play a key role in engaging customers by promoting, advising on, and selling a wide range of exclusive tax and duty-free products.",
      jobUpdated: " Last updated 3 mins ago",
    },

    {
      /*Maintenance and Engineering*/
      jobImage: "./images/Mantanance_Engeenering.jpeg",
      jobTitle: "Maintenance & Engineering",
      jobDescription:
        " A maintenance engineer is responsible for undertaking continuous routine maintenance on plants and machinery to ensure they run smoothly and reliably. They work with other professionals to improve efficiency and safety standards as well as organise repairs.",
      jobUpdated: " Last updated 3 mins ago",
    },
    {
      /* Cabin Crew*/
      jobImage: "./images/Cabin_crew.jpg",
      jobTitle: "Cabin Crew",
      jobDescription:
        "Cabin crew also known as Flight Attendants provide in-flight services to ensure that airline passengers have a comfortable and smooth flying experience. Their duties include answering passengers’ questions, enforcing safety measures before, during and after takeoff and serving food and beverages during flights.",
      jobUpdated: " Last updated 3 mins ago",
    },
    {
      /*Assist Service*/
      jobImage: "./images/Assist_Services.jpeg",
      jobTitle: "Assist Service",
      jobDescription:
        "A assist services or Customer Service Representative provides a company’s customers with the service they require. Their duties include receiving inbound calls, responding to complaints and selling a company’s products or services.",
      jobUpdated: " Last updated 3 mins ago",
    },

    {
      /* Airport Security Officer*/
      jobImage: "./images/Airport_Security.jpeg",
      jobTitle: "Airport Security Officer",
      jobDescription:
        "The duties of an airport security employee may vary depending on their designation and specialisation. These professionals work in teams, with government officials and law enforcement agents to ensure the security and safety of passengers and personnel in an airport.",
      jobUpdated: " Last updated 3 mins ago",
    },
    {
      /* Airlines Food Service Worker*/
      jobImage: "./images/Food_Worker.jpeg",
      jobTitle: "Airlines Food Service Worker",
      jobDescription:
        " Airline food service workers typically work in the galley of an aircraft, where they provide passengers with meals, and perform food preparation, sanitation, and stocking duties. They may also serve special meals for passengers with dietary needs.",
    },
  ];
  const notificationData = [
    {
      Title: "APPLY FOR AIRPORT JOB OF GROUND STAFF",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF RETAILS SHOPS",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF MAINTENANCE & ENGINEERING",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF CABIN CREW",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF ASSIST SERVICE",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF SECURITY OFFICER",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
    {
      Title: "APPLY FOR AIRPORT JOB OF FOOD SERVICE WORKER",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <NavigationDrawer />
          <Apply />
          <Notificationitems notificationItems={notificationData} />

          <Vacancyitems jobItems={vacancyData} />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
