import React from "react";

const jumboText = {
  textAlign: "center",
};

export default function Resume() {
  return (
    <>
      <div style={jumboText} className="jumbotron">
        <h1 className="display-4">Resume</h1>
      </div>
      <div className="mx-auto">
        <iframe
          className="mx-auto"
          title="Resume"
          src="Michael Moreno FS Resume.pdf#toolbar=0"
          width="80%"
          height="1100px"
        ></iframe>
      </div>
    </>
  );
}
