import React from "react";
import "../../App.css";

const jumboText = {
  textAlign: "center",
};

export default function Portfolio() {
  return (
    <>
      <div style={jumboText} class="jumbotron bg-white jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Portfolio</h1>
          <p class="lead">A display of my recent projects</p>
        </div>
      </div>
      <div id="boxes" className="container-fluid">
        <div id="indBox">
          <img
            id="portfolioImg"
            src={require("../../images/successful-search.png")}
            alt="News Crawler"
          ></img>
          <h5>News Crawler</h5>
          <p>
            An application that allows a user to search for news articles from
            around the world
          </p>
          <p>Tools/technologies used: HTML, CSS, JavaScript</p>
          <a
            id="btn"
            href="https://github.com/mmoreno723/group-project-1"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit the Repo
          </a>
        </div>
        <div id="indBox">
          <img
            id="portfolioImg"
            src={require("../../images/JATE.png")}
            alt="JATE"
          ></img>
          <h5>PWA Text Editor</h5>
          <p>
            Progressive Web Application that combines the server and client side
            while utilizing webpacks.
          </p>
          <p>Tools/technologies used: Webpack PWA, Manifest</p>
          <a
            id="btn"
            href="https://github.com/mmoreno723/PWA-Text-Editor"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit the Repo
          </a>
        </div>
        <div id="indBox">
          <div>
            <img
              id="portfolioImg"
              src={require("../../images/work-scheduler.png")}
              alt="Work Scheduler"
            ></img>
            <h5>Work Scheduler</h5>
            <p>
              An application that allows a user to add and delete events from a
              real-time calendar.
            </p>
            <p>Tools/technologies used: HTML, CSS, jQuery</p>
            <a
              id="btn"
              href="https://github.com/mmoreno723/work-schedule-repo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
        </div>
        <div id="indBox">
          <img
            id="portfolioImg"
            src={require("../../images/country-profile.png")}
            alt="Country Profile"
          ></img>
          <h5>Country Profile Index</h5>
          <p>
            Search for any country in the world to find facts like population,
            capital, and demonym.
          </p>
          <p>Tools/technologies used: JavaScript, REST API</p>
          <a
            id="btn"
            href="https://github.com/mmoreno723/Country-Profile-Index"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit the Repo
          </a>
        </div>
        <div id="indBox">
          <img
            id="portfolioImg"
            src={require("../../images/e-commerce.png")}
            alt="E-Commerce ORM"
          ></img>
          <h5>E-Commerce ORM</h5>
          <p>
            A backend object-relational mapper which allows a user to view all
            of their inventory in an organized database.
          </p>
          <p>Tools/technologies used: Node.js, MySql, Insomnia</p>
          <a
            id="btn"
            href="https://github.com/mmoreno723/E-Commerce-ORM-Repo"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit the Repo
          </a>
        </div>
        <div id="indBox">
          <div>
            <img
              id="portfolioImg"
              src={require("../../images/social-media-backend.png")}
              alt="Social Media Backend"
            ></img>
            <h5>Backend Social Network API</h5>
            <p>
              An API that utilizes CRUD to manage a database of thoughts and
              friends of a user.
            </p>
            <p>Tools/technologies used: MongoDB, NoSql, Express.js</p>
            <a
              id="btn"
              href="https://github.com/mmoreno723/social-network-backend-api/tree/main"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
