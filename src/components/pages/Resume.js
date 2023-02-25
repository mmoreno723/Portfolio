import React from "react";

const jumboText = {
  textAlign: "center",
};

export default function Resume() {
  return (
    <>
      <div style={jumboText} className="jumbotron bg-white">
        <h1 className="display-4">Resume</h1>
      </div>
      <div>
        <iframe
          src={require("../../resume/Michael Moreno FS Resume.pdf#toolbar=0")}
          height="1000px"
          width="100%"
          title="Resume"
        ></iframe>
      </div>
    </>
  );
}
