import React from "react";
import "../App.css";
import About from "./About";
import TechEvents from "./TechEvents";
import NonTechevents from "./NonTechEvents";
import Register from "./Register";
import Team from "./Team";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <About />
      <TechEvents />
      <Register />
      <NonTechevents />
      <Team />
      <Footer />
    </div>
  );
};

export default Main;
