import React from "react";
import "./hero.css";
import heroBg from "./hero-bg.jpg";

export default function Hero() {
  return (
    <section className="lp-hero-wrap">
      <div
        className="lp-hero"
      style={{
  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%),
                     linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.4) 100%),
                     url(${heroBg})`,
}}
      >
        <div className="lp-hero-content">
          <p className="lp-eyebrow">Let's Build Together</p>
          <h1 className="lp-hero-title">Have a project in Mind?</h1>
          <p className="lp-hero-sub">
            We will love to hear about it. Let's turn your vision into a remarkable reality.
          </p>
        </div>

        <div className="lp-hero-badge">
          <LogoMark />
          <div className="lp-hero-badge-text">
            <strong>LORDPART POINT</strong>
            <span>GLOBAL LIMITED</span>
          </div>
        </div>
      </div>
    </section>
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
