import React from "react";
import video from "../video/video.mp4";

const Team = () => {
  return (
    <div className="team section-stories" id="team">
      <div className="bg-video team-mobile">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" style={{ color: "white" }}>
          Our Team
        </h2>
      </div>

      <div className="main-section">
        
        <div className="team-container-1">

          <div className="box">
            <h2 className="position">DEAN of the College</h2>
            <p className="heading-tertiary u-margin-bottom-small">
              Dr.T.Senthilkumar <br />
            </p>
          </div>
          <div className="box">
            <h2 className="position">Head of the Department</h2>
            <p className="heading-tertiary u-margin-bottom-small">
              Dr.G.Annapoorani <br />
            </p>
          </div>

        </div>

        <div className="team-container-2">

        <div className="box">
          <h2 className="position">Staff Coordinators</h2>
          <p className="heading-tertiary u-margin-bottom-small">
            Dr.T.Mithila <br />
            Dr.K.Ambika <br />
            Mr.T.Jaison Vimalraj
            <br />
            Mrs.G.Revathi
          </p>
        </div>

        <div className="box">
          <h2 className="position">Student Coordinators</h2>
          <p className="heading-tertiary u-margin-bottom-small">
            Siva P <br />
            Bharath Kumar AR S <br />
            Shindhu R<br />
            Kavya D
          </p>
        </div>
        <div className="box">
          <h2 className="position">Website by</h2>
          <p className="heading-tertiary u-margin-bottom-small">
            Barath S<br />
            Vishnu Prakash B <br />
            Srivarshan S
            <br />
            Balachandar B<br/>
            Aravinth K
          </p>
        </div>

        <div className="box">
          <h2 className="position">For Inquiry</h2>
          <p className="heading-tertiary u-margin-bottom-small">
            Please Contact <br />
          </p>
          <p>
            +91 87545 62466 <br />
            +91 94885 34631
          </p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Team;
