import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My <span style={{color: "#EB1D36"}}>name</span> is</h2>
          <h1 className="i-name">Hardik Bachhan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Artist</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Learner</div>
              <div className="i-title-item">Scuba Diver</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web servies and
            online stores.
          </p>
        </div>
        <img src="/svg/scroll-down.svg" alt="|" className="i-scroll"/>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="/img/linkedin_me.png" alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
