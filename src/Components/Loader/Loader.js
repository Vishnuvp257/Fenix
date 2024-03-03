import React from "react";
import { useEffect } from "react";
import "./Loader.css";
import loadervid from "../../video/loader1.mp4";

const Loader = () => {
  useEffect(() => {
    const fadeOutLoader = () => {
      const loaderVideo = document.querySelector(".bg-video__content");
      const loaderText = document.querySelector(".loading-text");

      loaderText.classList.add("fade-out");
      loaderVideo.classList.add("fade-out");
    };

    // Call the function after a delay (adjust as needed)
    const delay = 3000; // 3 seconds
    const fadeOutTimeout = setTimeout(fadeOutLoader, delay);

    return () => clearTimeout(fadeOutTimeout);
  }, []);
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={loadervid} type="video/mp4" />
          Your browser is not supported!
        </video>
        <div className="loading-text">LOADING...</div>
      </div>
    </div>
  );
};

export default Loader;
