import React from "react";
import Header from "../Header";

const card = {
  width: "50%",
  margin: "auto",
  padding: "10px",
};

export default function AboutMe() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="card" style={card}>
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">
            Welcome to my portfolio, I'm an aspiring full-stack web developer
            with a certificate in web development from Columbia University
          </p>
        </div>
      </div>
    </>
  );
}
