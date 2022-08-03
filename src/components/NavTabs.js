import React from "react";
import "../App.css";

const bgkColor = {
  backgroundColor: "#3eaee7",
  height: "45px",
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
      <ul
        id="tabs"
        style={bar}
        className="nav nav-tabs d-flex justify-content-around"
      >
        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#aboutMe"
            onClick={() => handlePageChange("AboutMe")}
            // className={
            //   currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            // }
          >
            About Me
          </a>
        </li>
        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // className={
            //   currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            // }
          >
            Portfolio
          </a>
        </li>

        <li id="indTabs" className="nav-item">
          <a
            style={tabs}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // className={
            //   currentPage === "Resume" ? "nav-link active" : "nav-link"
            // }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
