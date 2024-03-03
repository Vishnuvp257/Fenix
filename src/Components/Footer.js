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
      <div class="row">
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Lorem ipsum dolor sit amet, consectetur adipis occ lore mauris et
            justo euismod.
          </p>
        </div>

        <div class="col-1-of-2">
          <div class="footer__navigation">
            <div class="f">
              <h3>CONNECT WITH US</h3>
              <a
                href="https://www.instagram.com/fenix._2k24?igsh=dTB3aW94eml0cjF1 "
                target="_blank"
                rel="noreferrer"
              >
                <img class="footer__img" src={instalogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span class="copyright">@Fenix 2024 All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
