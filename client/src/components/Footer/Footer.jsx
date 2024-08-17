import React from "react";
import "./Footer.css";
import { SiAbstract } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Abstract</h3>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <h4 style={{ marginTop: "1.5rem", paddingBottom: "0" }}>Contact Us</h4>
          <ul>
            <li>info@abstract.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-rights">
          <SiAbstract className="logo" />
          <p>© Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
