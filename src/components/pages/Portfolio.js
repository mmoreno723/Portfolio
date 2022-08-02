import React from "react";
import "../../App.css";

const jumboText = {
  textAlign: "center",
};

export default function Portfolio() {
  return (
    <>
      <div
        id="changeClr"
        style={jumboText}
        className="jumbotron bg-dark text-white jumbotron-fluid"
      >
        <div className="container">
          <h1 className="display-4">My Portfolio</h1>
          <p className="lead">A display of projects I've worked on</p>
        </div>
      </div>
      <div className="container-fluid">
        <div id="boxes" className="row">
          <div id="box" className="col-sm-4 card">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="News Crawler"
                src="successful-search.png"
              ></img>
              <h5 className="card-title">News Crawler</h5>
              <p className="card-text">
                An application that allows a user to search for news articles
                from around the world
              </p>
              <p>Tools/technologies used: HTML, CSS, JavaScript</p>
            </div>
            <a
              href="https://github.com/mmoreno723/group-project-1"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div className="col-sm-4 card">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="JATE"
                src="text-editor-screenshot.png"
              ></img>
              <h5 className="card-title">PWA Text Editor</h5>
              <p className="card-text">
                Progressive web application text editor and note taker that
                combines the server and client-side and implements web packs to
                allow the user functionality offline
              </p>
              <p>
                Tools/technologies used: Webpack, Webpack PWA, Manifest, Google
                Developer Tools
              </p>
            </div>
            <a
              href="https://github.com/mmoreno723/PWA-Text-Editor"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>

          <div className="col-sm-4 card">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="Work Scheduler"
                src="work-scheduler.png"
              ></img>
              <h5 className="card-title">Work Scheduler</h5>
              <p className="card-text">
                An application that allows a user to add and delete events from
                a real-time calendar.
              </p>
              <p>Tools/technologies used: HTML, CSS, jQuery</p>
            </div>
            <a
              href="https://github.com/mmoreno723/work-schedule-repo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-sm-4 card ">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="Password Generator"
                src="password-generator.png"
              ></img>
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                A front end application that generates random passwords based on
                users' inputs.
              </p>
              <p>Tools/technologies used: HTML, CSS, JavaScript</p>
            </div>
            <a
              href="https://github.com/mmoreno723/new-generator-repo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div className="col-sm-4 card">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="E-Commerce ORM"
                src="e-commerce.png"
              ></img>
              <h5 className="card-title">E-Commerce ORM</h5>
              <p className="card-text">
                A backend object-relational mapper which allows a user to view
                all of their inventory in an organized database
              </p>
              <p>
                Tools/technologies used: Express.js, Node.js, MySQL, Sequelize,
                Insomnia
              </p>
            </div>
            <a
              href="https://github.com/mmoreno723/E-Commerce-ORM-Repo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div className="col-sm-4 card">
            <div className="card-body">
              <img
                id="portfolioImg"
                alt="Social Media Backend"
                src="social-media-backend.png"
              ></img>
              <h5 className="card-title">Backend Social Newtork API</h5>
              <p className="card-text">
                An API that utilizes CRUD to manage a database of thoughts and
                friends of a user
              </p>
              <p>Tools/technologies used: MongoDB, NoSQL, Express.js</p>
            </div>
            <a
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
