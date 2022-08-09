import React from "react";
import "../App.css";

const bgkColor = {
  backgroundColor: "#3eaee7",
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
