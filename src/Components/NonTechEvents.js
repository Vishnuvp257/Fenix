import React, { useState } from "react";
import PopupModal from "./PopupModal";
import Swal from "sweetalert2";
import "../App.css";
import "sweetalert2/dist/sweetalert2.min.css";
import axios from "axios";

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
          Non-Technical Events
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1-nontech">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1 bold-white">
                  BGM Expert
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Prepare to be swept away into the mesmerizing world of "BGM
                  Expert"! Join fellow enthusiasts in a thrilling quest to
                  decipher the soundtracks of cinema's greatest masterpieces.
                  From stirring symphonies to catchy tunes, every melody holds
                  the key to unlocking the magic of movie music.
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
                        "BGM Expert",
                        "Solo participant or a Team of two members can take part in the competition.\n Sign language reference, helping by someone other than teammates are strictly prohibited.\n Judges decision are final.",
                        "C-211"
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
              <div className="card__picture card__picture--2-nontech ">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2 bold-white">
                  Word Whiz
                </span>
              </h4>
              <div className="card__details">
                <p>
                  WordWhiz is a captivating event challenging participants with
                  word games, puzzles, and language tasks. Showcase your
                  vocabulary and language skills in a battle of wits. WordWhiz
                  provides a platform for friendly competition and exploration.
                  Join us for a word-filled adventure!
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
                        "Word Whiz",
                        "Two members per team.\n The participants will be provided with noise canceling headphones with a very loud volume  song in the background and has to guess the word (which can be shown as a question) within the given time. \n Sign language references are strictly prohibited. \n Tie breaker round will be conducted if two teams ends in same number of points at the end.",
                        "C-209"
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
              <div className="card__picture card__picture--3-nontech">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3 bold-white">
                  connection
                </span>
              </h4>
              <div className="card__details">
                <p>
                  Embark on a unique cultural discovery journey in "Connection,"
                  a game challenging participants to decipher names of movies,
                  celebrities, and songs using clever pictorial clues. Answers,
                  presented in Tamil and English. Engage yourselves !
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
                        "connection",
                        "Two to Three Members per team. \n There will be two rounds. Preliminary round followed by a final round. \n Any kind of Malpractice will lead to the elimination from the competition.",
                        "C-208"
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
                <div className="card__picture card__picture--4-nontech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1 bold-white">
                    Treasure hunt
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    Embark on a high-energy adventure, deciphering clues and
                    solving challenges to unveil hidden treasures. Teams race
                    against time, combining wit and teamwork for a thrilling
                    experience that blends strategy, exploration, and excitement
                    in the quest for hidden treasures!
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
                          "Treasure hunt",
                          " Four Members per team. \n The participants are on a quest to uncover the hidden wonders of the park, guided by clues that lead them to nature's treasures.\n A total of Five Rounds will be conducted to identify the winner",
                          "C-213"
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
                <div className="card__picture card__picture--5-nontech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3 bold-white">
                    VortexVerse
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    Dive into the ultimate pop culture experience with
                    "VortexVerse"! Immerse in a unique quiz blending characters,
                    storylines, and trivia from diverse fandoms. Test your
                    knowledge across multiple universes in this engaging quiz
                    fusing different pop culture realms.
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
                          "VortexVerse",
                          "Three to Four members per team. \n Questions will merge elements from various fandoms. Be prepared for unexpected connections! \n There will be three rounds starting with Classic Fandoms followed by Mashup Mayhem and ending with Obscure Realms.\n Use of Mobile phones are strictly prohibited.",
                          "C-210"
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
                <div className="card__picture card__picture--6-nontech">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3 bold-white">
                    Act It Out
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    Step into the spotlight with Act It Out! Unleash creativity
                    in entertaining charades, bringing words to life through
                    gestures. From movie titles to quotes, communicate without
                    words. Join us for a laughter-filled evening of spontaneous
                    and hilarious performances!
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
                          "Act It Out",
                          "Three to Five Members per team.\n A Scenario or topic will be given on the spot and the participating need to act accordingly.\n Judging criteria will be based on the dialogue delivery, best concepts, humor sense and equal participation of each and every team member. c\n Use of abusive words will lead to the elimination of the team.",
                          "C-212"
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
        name1={eventInfo.org1Name}
        phone1={eventInfo.org1Phone}
        register={eventInfo.registrationLink}
        venue={eventInfo.venue}
        isVisible={isPopupVisible}
        toggle={() => toggle()}
      />
    </div>
  );
};

export default TechEvents;
