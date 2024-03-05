import React from "react";
import "../App.css";
import About from "./About";
import TechEvents from "./TechEvents";
import NonTechevents from "./NonTechEvents";
import Register from "./Register";
import Team from "./Team";
import Map from "./Map";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <About />
      <TechEvents />
      <NonTechevents />
      <Register />
      <Team />
      <Map/>
      <Footer />
    </div>
  );
};

export default Main;
