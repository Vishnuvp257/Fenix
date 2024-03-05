import React from "react";
import i1 from "../img/aubit3.jpg";
import i2 from "../img/aubit1.jpg";
import i3 from "../img/aubit2.jpg";

const About = () => {
  return (
    <div id="about" class="section-about" style={{marginTop:'10rem'}}>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary white letter-spacing">About Us</h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <p class="paragraph">
            <b>Computer Science and Engineering</b> Department at Anna
            University-BIT Campus is dedicated to fostering academic excellence
            and innovation in the rapidly evolving field of computer science.
            Committed to providing a dynamic learning environment, our
            department offers a comprehensive curriculum that covers
            foundational principles and cutting-edge technologies. Our esteemed
            faculty, consisting of experienced educators and industry experts,
            guide students in exploring diverse facets of computer science,
            including software development, artificial intelligence, data
            science, and more. We strive to cultivate a culture of research and
            problem-solving, preparing our students to excel in the global
            technology landscape. With state-of-the-art facilities and a focus
            on hands-on learning, the department aims to nurture future leaders
            and contributors to the ever-expanding realm of computer science.
          </p>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              srcset={`${i1} 300w, ${i1} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Pic1"
              class="composition__photo composition__photo--p1"
              src={i1}
            />

            <img
              srcset={`${i2} 300w, ${i2} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo2"
              class="composition__photo composition__photo--p2"
              src={i2}
            />

            <img
              srcset={`${i3} 300w, ${i3} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Pic33"
              class="composition__photo composition__photo--p3"
              src={i3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
