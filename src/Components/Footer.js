import React from "react";
import fulllogo from "../img/Fenix_24.png";
import instalogo from "../img/insta footer.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer__logo-box">
        <picture class="footer__logo">
          <img alt="Full logo" src={fulllogo} />
        </picture>
      </div>

      <div className="footer-row"> 
          <div>
              <h3>CONNECT WITH US</h3>
              <a
                href="https://www.instagram.com/fenix._2k24?igsh=dTB3aW94eml0cjF1 "
                target="_blank"
                rel="noreferrer"
              >
                <img class="footer__img" src={instalogo} alt="" />
              </a>
          </div>

          <div className="address">
            <h3 style={{marginBottom:'10px'}}>ADDRESS </h3>
            <p>University College of Engineering </p>
            <p>Bharathidasan Institute of Technology Campus,</p>
            <p>Anna University, </p>
            <p>Tiruchirappalli - 620 024. </p>
            <p><strong>Email:</strong> fenix2k24.aubit@gmail.com </p>
          </div>

        
      </div>
      <div>
        <p class="text-center" style={{color:'GrayText'}}>@Fenix 2024 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
