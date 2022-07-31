import React from "react";

const headerText = {
  textAlign: "center",
};

const Header = () => {
  return (
    <header>
      <div style={headerText} class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Michael Moreno</h1>
          <p class="lead">Aspiring Full Stack Developer</p>
          <br></br>
          <img alt="" src=""></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
