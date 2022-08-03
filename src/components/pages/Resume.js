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
          title="Resume"
          src="Michael Moreno FS Resume.pdf#toolbar=0"
          width="100%"
          height="1100px"
        ></iframe>
      </div>
    </>
  );
}
