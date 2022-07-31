import React from "react";

const jumboText = {
  textAlign: "center",
};

const cards = {
  width: "40%",
};
export default function Portfolio() {
  return (
    <>
      <div style={jumboText} class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Portfolio</h1>
          <p class="lead">A display of projects I've worked on</p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project One</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project Two</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project Three</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project Four</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project Five</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
          <div class="col card" style={cards}>
            <div class="card-body">
              <h5 class="card-title">Project Six</h5>
              <p class="card-text">A Project</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
