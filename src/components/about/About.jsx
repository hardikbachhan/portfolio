import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./about.css";

function About() {
  const theme = useContext(ThemeContext);
  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{
            backgroundColor: theme.state.darkMode ? "#aaa" : "#333",
            border: theme.state.darkMode ? "2px solid #fff" : "2px solid #000",
          }}
        ></div>
        <div
          className="a-card"
          style={{
            border: theme.state.darkMode ? "2px solid #fff" : "2px solid #000",
          }}
        >
          <img src="/img/me.jpg" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am a Graduate majoring in Computer Science Engineering (CSE), from
          Maharaja Agrasen Institute of Technology (MAIT), India. I have
          experience in building Full Stack applications. Currently, I am
          working on my Personal Blog and making Frontend of a Business website
          for a friend. I am results-driven, love to learn new technologies, and
          collaborate with other people to learn something new every day.
        </p>
        <div className="a-award">
          <img src="/img/github.png" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Arctic Code Vault Contributor</h4>
            <p className="a-award-desc">
              Authored a commit on the default branch of Simon game repository
              that was archived in the 2020 Arctic Vault program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
