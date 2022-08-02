import React from "react";

const bgkColor = {
  backgroundColor: "#3eaee7",
};

const tabs = {
  color: "white",
  width: "40px",
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul
        style={bgkColor}
        className="nav nav-tabs d-flex justify-content-around"
      >
        <li className="nav-item">
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
        <li className="nav-item">
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

        <li className="nav-item">
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
