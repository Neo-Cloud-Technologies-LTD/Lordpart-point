import React from "react";
import "./footer.css";
import {   MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-grid">
        <div className="lp-col">
          <div className="lp-brand-row">
            <LogoMark />
            <div>
              <strong>LORDPART POINT</strong>
              <span>GLOBAL LIMITED</span>
            </div>
          </div>
          <p className="lp-tagline">
            Building the future with precision, integrity, and excellence.
          </p>
          <div className="lp-socials">
            <a className="lp-social-btn" href="#" aria-label="FaFacebook">
              <FaFacebook size={16} strokeWidth={2} />
            </a>
            <a className="lp-social-btn" href="#" aria-label="FaInstagram">
              <FaInstagram size={16} strokeWidth={2} />
            </a>
            <a className="lp-social-btn" href="#" aria-label="FaTwitter">
              <FaTwitter size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="lp-col">
          <h4 className="lp-col-title">Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Process</a></li>
          </ul>
        </div>

        <div className="lp-col">
          <h4 className="lp-col-title">Services</h4>
          <ul>
            <li><a href="#">Building Construction</a></li>
            <li><a href="#">Infrastructure</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">Design &amp; Build</a></li>
          </ul>
        </div>

        <div className="lp-col">
          <h4 className="lp-col-title">Contact Us</h4>
          <div className="lp-contact-item">
            <MapPin size={16} strokeWidth={1.8} />
            <span>1st Avenue, MIB plaza Gwarinpa, NEO CLOUD TECHNOLOGIES, Abuja, Nigeria.</span>
          </div>
          <div className="lp-contact-item">
            <Phone size={16} strokeWidth={1.8} />
            <span>08166198180</span>
          </div>
          <div className="lp-contact-item">
            <Mail size={16} strokeWidth={1.8} />
            <span>neocloudtechnologies@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="lp-bottom-bar">
        <p>@2026 LORDPART POINT GLOBAL LIMITED NIGERIA LTD</p>
        <div className="lp-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of services</a>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg className="lp-logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32V12L20 4L20 16L8 24V32Z" fill="#1a2942" stroke="#c9a13b" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M20 16L32 8V28L20 36V16Z" fill="#c9a13b" stroke="#c9a13b" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}