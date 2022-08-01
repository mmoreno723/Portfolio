import React from "react";

const jumboText = {
  textAlign: "center",
};
const cards = {
  width: "400px",
};

const jumbo = {
  height: "100vh",
};

export default function Contact() {
  return (
    <div style={jumbo} class="jumbotron">
      <div style={jumboText} class="container">
        <h1 class="display-4">Contact Me</h1>
        <p class="lead">Reach out to me!</p>
      </div>
      <div class="container p-1">
        <div class="row row-cols-4">
          <div class="card" style={cards}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              class="card-img-top"
              alt="GitHub Logo"
            ></img>
            <div class="card-body"></div>
            <a
              href="https://github.com/mmoreno723"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              GitHub
            </a>
          </div>
          <div class="card" style={cards}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              class="card-img-top"
              alt="LinkedIn Logo"
            ></img>
            <div class="card-body"></div>
            <a
              href="https://www.linkedin.com/in/michael-moreno-56417a149/"
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              LinkedIn
            </a>
          </div>
          <div class="card" style={cards}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              class="card-img-top"
              alt="Gmail Logo"
            ></img>
            <div class="card-body"></div>
            <a
              href="mailto: morenomichael723@gmail.com"
              class="btn btn-primary"
            >
              Send Me an Email
            </a>
          </div>
          <div class="card" style={cards}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              class="card-img-top"
              alt="Phone Icon"
            ></img>
            <div class="card-body">Phone Number: (661) 993-3560</div>
          </div>
        </div>
      </div>
    </div>
  );
}
