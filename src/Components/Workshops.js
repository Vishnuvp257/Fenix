import React, { useState } from "react";
import PopupModal from "./PopupModal";
import Swal from 'sweetalert2';
import axios from "axios";

const Workshops = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isBlurBackground, setBlurBackground] = useState(false);

  const loguser = JSON.parse(localStorage.getItem('userData'));
  const userData = loguser ? JSON.parse(localStorage.getItem('userData')) : "no_user";

  console.log(userData, "user");

  const [eventInfo, setEventInfo] = useState({
    heading: "",
    content: "",
    org1Name: "",
    org2Name: "",
    org1Phone: "",
    org2Phone: "",
    registrationLink: "",
    venue: "",
  });

  const toggle = (title, content, org1Name, org2Name, org1Phone, org2Phone, registrationLink, venue) => {
    setEventInfo({
      heading: title,
      content,
      org1Name,
      org2Name,
      org1Phone,
      org2Phone,
      registrationLink,
      venue,
    });
    setPopupVisible(!isPopupVisible);
  };

  const loginToRegister = () => {
    Swal.fire({
      icon: "info",
      title: "Login",
      text: "Kindly login to register for the event.",
    }).then((result) => {
      setBlurBackground(false);
    });
  }


  const eventRegister = async (eventName) => {
    try {
      const email = userData.email;
      const { data } = await axios.post('/eventRegister', {
        eventName, email
      })
      // console.log(data);
      localStorage.setItem('userData', JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Registered Successfully!",
        text: "You have successfully registered for the event.",
      }).then((result) => {
        setBlurBackground(false);
      });

      // Apply the blur effect to the background
      setBlurBackground(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="section-tours" id="events">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary white letter-spacing">
          Workshops
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                  xCoders
                </span>
              </h4>
              <div className="card__details">
                <p>
                  CrossCoders is a zappy solo event where plain old coding is
                  not the only task. Participants are expected to analyze code
                  snippets and convert them into a language of their choice.
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
                        "xCoders",
                        "CrossCoders is a zappy solo event where plain old coding is not the only task. Participants are expected to analyze code snippets and convert them into a language of their choice. The most accurate conversion of the snippet takes the win. Don’t wait, let’s decode the code at ×Coders!",
                        "Yaazhini J",
                        "Sai Subash Chandra",
                        "+91 8428640960",
                        "+91 8754470644",
                        "forms.gle/RqExTs9gLNsFEPCHA",
                        "Venue1"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  {userData === "no_user" ? (
                    <a onClick={() => { loginToRegister() }} className="btn btn--white">
                      Register Now
                    </a>
                  ) : userData.workshop1 == "no" ? (
                    <a onClick={() => { eventRegister("workshop1") }} className="btn btn--white">
                      Register Now
                    </a>
                  ) : (
                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                      Registered
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2-tech">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                  Thesis-Precized
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Make us reimagine the future of tech. Thesis-Precized is your
                  platform to present your papers to a distinguished panel of
                  judges. Emerge victorious, and you take home the title of Best
                  Paper!
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
                        "Thesis-Precized",
                        "Make us reimagine the future of tech. Thesis-Precized is your platform to present your papers to a distinguished panel of judges. Emerge victorious, and you take home the title of Best Paper!",
                        "Hemalakshumi K ",
                        "Madhuvanthi R",
                        "+91 89254 53687",
                        "+91 91508 64004",
                        "forms.gle/G9GTWJTvh4SZGvqJA",
                        "Venue2"
                      )
                    }
                  >
                    Know More
                  </p>
                </div>
                <div className="card__price-box">
                  {userData === "no_user" ? (
                    <a onClick={() => { loginToRegister() }} className="btn btn--white">
                      Register Now
                    </a>
                  ) : userData.workshop2 == "no" ? (
                    <a onClick={() => { eventRegister("workshop2") }} className="btn btn--white">
                      Register Now
                    </a>
                  ) : (
                    <a className="btn btn--white" target="_blank" href="https://forms.gle/RqExTs9gLNsFEPCHA" rel="noreferrer">
                      Registered
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <PopupModal
        title={eventInfo.heading}
        content={eventInfo.content}
        name1={eventInfo.org1Name}
        name2={eventInfo.org2Name}
        phone1={eventInfo.org1Phone}
        phone2={eventInfo.org2Phone}
        register={eventInfo.registrationLink}
        venue={eventInfo.venue}
        isVisible={isPopupVisible}
        toggle={() => toggle()}
      />
    </div>
  );
};

export default Workshops;
