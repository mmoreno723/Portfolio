import React from "react";

const jumboText = {
  textAlign: "center",
};

// const cards = {
//   flex: ""
// };
export default function Portfolio() {
  return (
    <>
      <div style={jumboText} class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Portfolio</h1>
          <p class="lead">A display of projects I've worked on</p>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-3">
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">News Crawler</h5>
              <p class="card-text">
                An application that allows a user to search for news articles
                from around the world
              </p>
              <p>Tools/technologies used: HTML, CSS, JavaScript</p>
            </div>
            <a
              href="https://github.com/mmoreno723/group-project-1"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">PWA Text Editor</h5>
              <p class="card-text">
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
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">Work Scheduler</h5>
              <p class="card-text">
                Allows a user to log events to a create a schedule.
              </p>
              <p>Tools/technologies used: HTML, CSS, jQuery</p>
            </div>
            <a
              href="https://github.com/mmoreno723/work-schedule-repo"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">
                A front end application that generates random passwords based on
                users' inputs.
              </p>
              <p>Tools/technologies used: HTML, CSS, JavaScript</p>
            </div>
            <a
              href="https://github.com/mmoreno723/new-generator-repo"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">E-Commerce ORM</h5>
              <p class="card-text">
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
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
          <div class="col card">
            <div class="card-body">
              <h5 class="card-title">Backend Social Newtork API</h5>
              <p class="card-text">
                An API that utilizes CRUD to manage a database of thoughts and
                friends of a user
              </p>
              <p>Tools/technologies used: MongoDB, NoSQL, Express.js</p>
            </div>
            <a
              href="https://github.com/mmoreno723/social-network-backend-api/tree/main"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit the Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
