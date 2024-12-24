import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationDrawer from "../Components/NavigationDrawer/NavigationDrawer";
import Footer from "../Components/Footer/Footer";

function App() {
  const postData = [
    {
      /* This is a Gound Handling */
      Image: "./public/images/Ground_Handling.jpeg",
      Title: "Ground Handling",
      Description:
        "Ground handling is a vital part of the aviation industry that involves the services required to operate an aircraft while it's on the ground at an airport",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* This is a Retails Shop*/
      Image: "./src/assets/images/Retail_shop.avif",
      Title: "Airport Retails Shops",
      Description:
        "As a retail team member, you'll play a key role in engaging customers by promoting, advising on, and selling a wide range of exclusive tax and duty-free products.",
      Updated: " Last updated 3 mins ago",
    },

    {
      /*Maintenance and Engineering*/
      Image: "./src/assets/images/Mantanance_Engeenering.jpeg",
      Title: "Maintenance & Engineering",
      Description:
        " A maintenance engineer is responsible for undertaking continuous routine maintenance on plants and machinery to ensure they run smoothly and reliably. They work with other professionals to improve efficiency and safety standards as well as organise repairs.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* Cabin Crew*/
      Image: "./src/assets/images/Cabin_crew.jpg",
      Title: "Cabin Crew",
      Description:
        "Cabin crew also known as Flight Attendants provide in-flight services to ensure that airline passengers have a comfortable and smooth flying experience. Their duties include answering passengers’ questions, enforcing safety measures before, during and after takeoff and serving food and beverages during flights.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /*Assist Service*/
      Image: "./src/assets/images/Assist_Services.jpeg",
      Title: "Assist Service",
      Description:
        "A assist services or Customer Service Representative provides a company’s customers with the service they require. Their duties include receiving inbound calls, responding to complaints and selling a company’s products or services.",
      Updated: " Last updated 3 mins ago",
    },

    {
      /* Airport Security Officer*/
      Image: "./src/assets/images/Airport_Security.jpeg",
      Title: "Airport Security Officer",
      Description:
        "The duties of an airport security employee may vary depending on their designation and specialisation. These professionals work in teams, with government officials and law enforcement agents to ensure the security and safety of passengers and personnel in an airport.",
      Updated: " Last updated 3 mins ago",
    },
    {
      /* Airlines Food Service Worker*/
      Image: "./src/assets/images/Food_Worker.jpeg",
      Title: "Airlines Food Service Worker",
      Description:
        " Airline food service workers typically work in the galley of an aircraft, where they provide passengers with meals, and perform food preparation, sanitation, and stocking duties. They may also serve special meals for passengers with dietary needs.",
      Updated: " Last updated 3 mins ago",
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
      <NavigationDrawer />

      <Footer />
    </>
  );
}

export default App;
