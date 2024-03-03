import React, { useState } from "react";
import "../App.css";
import "../component-css/Popup.css";

const PopupModal = ({ title, content, register, venue, isVisible, toggle }) => {
  const [showAbout, setShowAbout] = useState(true);
  const [showVenue, setShowVenue] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowVenue(false);
  };

  const toggleVenue = () => {
    setShowAbout(false);
    setShowVenue(true);
  };

  return (
    <div className="popup-container">
      <div className={`background-blur ${isVisible ? "active" : ""}`}></div>
      <div id="pop" className={isVisible ? "new_active" : ""}>
        <div>
          <h2 className="event_heading">{title}</h2>
          <div className="event_section">
            <button className="about-button" onClick={toggleAbout}>
              Rules
            </button>
            <button className="venue-button" onClick={toggleVenue}>
              Venue
            </button>
          </div>
          {showAbout ? <p className="event_content">{content}</p> : null}
          {showVenue ? (
            <div className="venue">
              <div className="text-center">
                <h1>{venue}</h1>
              </div>
            </div>
          ) : null}
          <div className="modal-button">
            <a className="btn btn--green" onClick={() => toggle()}>
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
