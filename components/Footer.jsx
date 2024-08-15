import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>@2023 KA Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/kenneth-aladi/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/kenneth-aladi/" target="_blank">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
