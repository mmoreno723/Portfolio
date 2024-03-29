import React from "react";
import Header from "../Header";
import "../../App.css";

const aboutMeBox = {
  width: "60%",
  margin: "auto",
  marginTop: "30px",
  padding: "10px",
};

const jumboColor = {
  backgroundColor: "#373F51",
};

const abtMeText = {
  fontSize: "20px",
};

export default function AboutMe() {
  return (
    <>
      <div style={jumboColor} class="jumbotron text-white jumbotron-fluid">
        <div>
          <Header />
        </div>
        <div id="#aboutMeBox" style={aboutMeBox}>
          <div>
            <h3 id="headerText">About Me</h3>
            <p style={abtMeText}>
              Welcome to my portfolio! I'm an aspiring full-stack developer
              based in South Florida. I recently obtained a certificate in web
              development from a coding boot camp administred by Columbia
              University.
            </p>
            <br></br>
            <p style={abtMeText}>
              I'm looking to dive into the programming world to learn about new
              technologies and create user-friendly websites. I'm excited to
              improve on the skills I have learned and eager to gain more
              valuable knowledge.
            </p>
            <br></br>
            <p style={abtMeText}>
              Navigate through my portfolio to see more about my projects and to
              view my resume.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
