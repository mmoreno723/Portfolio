import React from "react";
import "../App.css";
import menuBar from "./MenuBar";

const bgkColor = {
  backgroundColor: "#3eaee7",
};

const menuTab = {
  color: "white",
  textAlign: "right",
  marginRight: "25px",
};

const tabs = {
  color: "white",
  width: "40px",
  fontSize: "23px",
};

const bar = {
  width: "60%",
  margin: "auto",
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={bgkColor}>
      <div onClick={menuBar}>
        <i id="hamburgerMenu" style={menuTab} class="fa fa-bars fa-2x"></i>
      </div>

      <div id="menuLinks">
        <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")}>
          About Me
        </a>
        <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
      </div>

      <ul id="tabs" style={bar} className="nav nav-tabs">
        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#aboutMe"
            onClick={() => handlePageChange("AboutMe")}
          >
            About Me
          </a>
        </li>
        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </a>
        </li>

        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
