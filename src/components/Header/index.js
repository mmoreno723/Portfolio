import React from "react";

const headerText = {
  textAlign: "center",
};

const portraitImg = {
  width: "280px",
  height: "280px",
  borderRadius: "50%",
};

const imgBox = {
  textAlign: "center",
};

const Header = () => {
  return (
    <header>
      <div style={headerText} class="container">
        <h1 class="display-4">Michael Moreno</h1>
        <p class="lead">Full Stack Developer</p>
        <br></br>
      </div>
      <div style={imgBox}>
        <img
          style={portraitImg}
          alt="Portrait"
          src={require("../../images/MichaelMorenoPortrait.JPG")}
        ></img>
      </div>
    </header>
  );
};

export default Header;
