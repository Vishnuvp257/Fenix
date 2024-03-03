import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Main from "../Components/Main";
import bitlogo from "../img/Anna-University.png";
import fenixlogo from "../img/logo.png";
import fenixLanding from "../img/Fenix_24.png";
import { motion, useScroll } from "framer-motion";
import Loader from "../Components/Loader/Loader";
import bgvideo from "../video/Fenix_bg.mp4";
import Counter from "../Components/Counter";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const initialScrollProgress = 0;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const checkboxRef = useRef(null);

  const toggleCheckbox = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3300);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <div id="blur">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            ref={checkboxRef}
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background"> &nbsp; </div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#" className="navigation__link one">
                    {" "}
                    Home{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#about" className="navigation__link two">
                    {" "}
                    About{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#events" className="navigation__link three">
                    {" "}
                    Events{" "}
                  </a>
                </div>
              </li>
              <li className="navigation__item">
                <div className="navigation__link" onClick={toggleCheckbox}>
                  <a href="#team" className="navigation__link four">
                    {" "}
                    Contact{" "}
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgvideo} type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>

        <div className="header" id="header">
          <div className="header__logo-box">
            <img className="bitlogo" src={bitlogo} alt="clg-logo" />
          </div>

          <div className="header__text-box">
            <div className="logos">
              <img
                className="heading-primary--sub zor"
                src={fenixlogo}
                alt="new-logo"
              />
              <img
                className="heading-primary--main zorphix"
                src={fenixLanding}
                alt="Fenix-logo"
              />
            </div>
            <Counter />
            <h1 className="heading-primary--sub date">March 19th 2024</h1>

            <a href="#about" className="btn btn--white btn--animated bold">
              Get Started
            </a>
          </div>
        </div>

        <Main />
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
      />
    </div>
  );
};

export default Home;
