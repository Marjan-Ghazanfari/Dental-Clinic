/** @format */

import "./App.css";
import TopMenu from "./components/navigation/TopMenu";
import MainMenu from "./components/navigation/MainMenu";
import ShowCase from "./components/ShowCase";
import AboutUs from "./components/AboutUs";
import Services  from "./views/Services";
import Appointment from "./components/Appointment";
import Footer from "./components/navigation/Footer";
import { useState } from "react";

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: "toothInspection",
      title: "Tooth inspection",
      body: "Comprehensive review of the mouth and detection of broken teeth and other threats.",
    },
    {
      id: 2,
      img: "toothRemoval",
      title: "Tooth removal",
      body: "Any broken tooth is a threat to the body,so this danger should be removed from the mouth.",
    },
    {
      id: 3,
      img: "removalOfTartar",
      title: "Removal of tartar",
      body: "Tartar is the enemy of every human being, because through his presence we have unpleasant breath.",
    },
    {
      id: 4,
      img: "polishingAndCleaning",
      title: "Polishing and cleaning",
      body: "A simple and safe polishing treatment improves the health of teeth that will get a better look.",
    },
    {
      id: 5,
      img: "dentalImplants",
      title: "Dental implants",
      body: "The best solution when you can not save a healthy tooth and you need to apply artificial solutions.",
    },
    {
      id: 6,
      img: "effectiveProtection",
      title: "Effective protection",
      body: "The cheapest tooth protection is their cleaning and a regular visit to the dentist.",
    },
  ]);
  return (
    <div className=''>
      <TopMenu />
      <MainMenu />
      <ShowCase />
      <AboutUs />
      <Services services={services} />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
