import React from "react";
import "../App.css";

const footerText = {
  textAlign: "center",
};

const linkColor = {
  color: "black",
};

const Footer = () => {
  return (
    <footer style={footerText}>
      <div>
        <div>Get In Touch</div>
        <p>
          Reach out to me if you have any questions or would like to hear about
          my current availability.
        </p>
        <div>
          <a id="footerBtn" href="mailto: morenomichael723@gmail.com">
            Send me an Email
          </a>
        </div>
      </div>
      <br></br>
      <div id="linkBox">
        <div>
          <a
            href="https://github.com/mmoreno723"
            target="_blank"
            rel="noreferrer"
          >
            <i style={linkColor} class="fa-brands fa-github fa-2x"></i>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/michael-moreno-56417a149/"
            target="_blank"
            rel="noreferrer"
          >
            <i style={linkColor} class="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@morenomichael723"
            target="_blank"
            rel="noreferrer"
          >
            <i style={linkColor} class="fa-solid fa-m fa-2x"></i>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/michael_moreno3/"
            target="_blank"
            rel="noreferrer"
          >
            <i style={linkColor} class="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
      <br></br>
      <div>
        <div>© 2022 Michael Moreno</div>
        <div>Designed & Coded by Michael Moreno</div>
      </div>
    </footer>
  );
};

export default Footer;
