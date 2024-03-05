import React, { useState } from "react";
import PopupModal from "./PopupModal";
import "../App.css";

const TechEvents = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBlurBackground, setBlurBackground] = useState(false);

  // State variables to store event information
  const [eventInfo, setEventInfo] = useState({
    heading: "",
    content: "",
    venue: "",
  });

  // Function to toggle the popup visibility
  const toggle = (title, content, venue) => {
    const formattedContent = content
      ? content.split("\n").map((line, index) => <p key={index}>{line}</p>)
      : null;
    setEventInfo({
      heading: title,
      content: formattedContent,
      venue,
    });
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div
      className={`section-tours ${isBlurBackground ? "blur-background" : ""}`}
      id="events"
    >
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary white letter-spacing">
          Technical Events
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                  Paper Presentation
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Participants present research findings or projects, sharing
                  insights and methodologies. The audience engages in Q&A
                  sessions, fostering academic discussion and networking.
                  Diverse topics across various fields contribute to
                  intellectual growth within the academic community.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "Paper Presentation",
                        ' Three members per team. \n  Topic selection for the presentation is upto participant\'s own interest. \n  Ppt should not exceed 12 slides and abstract should not exceed 250 words. \n Ppt should be in .docx format. \n Each team have 6-8 minutes for oral presentation with ppt. \n Participants must send submit their ppt in .docx file on or before 16th March 2024 to "fenix2k24.aubit@gmail.com." \n',
                        "C-203"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                  Tech Casino
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Tech Casino delivers a unique gaming experience with 10
                  participants per round, bidding coins marked 5, 10, 20, and
                  30. On-screen questions prompt bids by raising hands. The top
                  three participants answering collect coins, advancing the
                  finalist based on the highest total value.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "Tech Casino",
                        "Using Mobile phones are not allowed. \n For Aptitude questions participants must show their manual answer in their paper \n There will be a total of 15 rounds. \n If the participant keeps on winning he/she will be keeps on moving to the further roundsnspire us to redefine the tech landscape.",
                        "C-205"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3 bold-white">
                  DesignDynasty
                </span>
              </h4>
              <div className="card__details">
                <p>
                  DesignDynasty offers an immersive UI/UX experience, refining
                  design skills through creative challenges and workshops.
                  Network with design enthusiasts for collaboration, making it
                  your gateway to the dynamic realm of UI/UX exploration and
                  learning.
                </p>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p
                    className="btn btn--white"
                    onClick={() =>
                      toggle(
                        "DesignDynasty",
                        "Participants must  bring their own laptops or devices with the necessary design software installed. \n Two to three members are allowed per team.\n The problem statement will be allocated in a random manner. This could be related to education, technology, sustainability, etc.\n It is strictly prohibited to use preexisting templates or copied designs. If found the participating will be directly disqualified without any concerns.\n Usability, creativity, theme adherence, and overall user experience are considered as judging criteria.",
                        "C-202"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm-padding" id="section-tours">
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--4-tech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1 bold-white">
                    BugBash
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    BugBash offers a dynamic platform for participants to engage
                    in real-world debugging challenges, fostering skill
                    enhancement and networking. Dive into this exciting event
                    for an immersive experience in bug-squashing and skill
                    development!
                  </p>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p
                      className="btn btn--white"
                      onClick={() =>
                        toggle(
                          "BugBash",
                          "Participant must have a basic knowledge related to C, SQL, Java.\n The event possess two rounds in which the participant need to pass the preliminary round to qualify for the final round. \n Participants need to debug the question within 20 mins.\n Cheating in any form will directly lead to the disqualification of the participant.",
                          "C-201"
                        )
                      }
                    >
                      Know More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupModal
        title={eventInfo.heading}
        content={eventInfo.content}
        venue={eventInfo.venue}
        isVisible={isPopupVisible}
        toggle={() => toggle()}
      />
    </div>
  );
};

export default TechEvents;
