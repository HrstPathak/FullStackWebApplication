import React from "react";
import "./Footer.css";
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
function footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-icon">
          <a href="https://instagram.com/_succulent_for_sale?igshid=YmMyMTA2M2Y=">
            <FaInstagram className="instagram iconE" />
          </a>
          <a href="https://wa.me/919548253073?text=Hello%20there">
            <FaWhatsapp className="whatsapp iconE" />
          </a>
          <a href="https://m.facebook.com/100011219499577/">
            <FaFacebook className="facebook iconE" />
          </a>
          <span>
            <FaYoutube className="youtube iconE" />
          </span>
        </div>
        <div className="footer-inner-div">
          <div>
            <div className="footer-header">About</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Plant info</div>
          </div>
          <div>
            <div className="footer-header">Help</div>
            <div>Payment</div>
            <div>Shipping</div>
            <div>Return</div>
          </div>
          <div>
            <div className="footer-header">Policy</div>
            <div>Return Policy</div>
            <div>Term of Use</div>
            <div>Privacy</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
