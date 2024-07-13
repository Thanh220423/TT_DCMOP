import React from "react";
import "./Footer.css";
import { assets } from "../../assets";

const Footer = () => {
  const date = new Date();

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.ic_logo} alt="" />
          <p>demo 1234 435sdfjhs dfksdnfkl nsdklfn sfn klsdnf kl</p>
          <div className="footer-social-icons">
            <img src={assets.ic_faceBook} alt="" />
            <img src={assets.ic_twitter} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 828 222 998</li>
            <li>TuanThanh220423@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © {date.getFullYear()} www.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
