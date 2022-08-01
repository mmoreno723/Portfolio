import React from "react";

const centerText = {
  textAlign: "center",
};
const cards = {
  width: "40%",
};

const jumbo = {
  height: "100vh",
};

// const whiteText = {
//   whiteSpace: "normal",
// };

export default function Contact() {
  return (
    <div style={jumbo} className="jumbotron">
      <div style={centerText} className="container">
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">Reach out to me!</p>
      </div>
      <div className="container-fluid">
        <div className="row  mx-auto">
          <div className="col-sm-3 card" style={cards}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              className="card-img-top"
              alt="GitHub Logo"
            ></img>
            <div className="card-body"></div>
            <a
              href="https://github.com/mmoreno723"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
          </div>

          <div className="col-sm-3 card" style={cards}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              className="card-img-top"
              alt="LinkedIn Logo"
            ></img>
            <div className="card-body"></div>
            <a
              href="https://www.linkedin.com/in/michael-moreno-56417a149/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
          </div>
          <div className="col-sm-3 card" style={cards}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              className="card-img-top"
              alt="Gmail Logo"
            ></img>
            <div className="card-body"></div>
            <a
              href="mailto: morenomichael723@gmail.com"
              className="btn btn-primary"
            >
              Send Me an Email
            </a>
          </div>
          <div className="col-sm-3 card" style={cards}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              className="card-img-top"
              alt="Phone Icon"
            ></img>
            <div style={centerText} className="card-body">
              (661) 993-3560
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
