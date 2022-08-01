import React from "react";

const jumboText = {
  textAlign: "center",
};

export default function Resume() {
  return (
    <>
      <div style={jumboText} class="jumbotron">
        <h1 class="display-4">Resume</h1>
      </div>
      <div class="mx-auto">
        <iframe
          class="mx-auto"
          title="Resume"
          src="Michael Moreno FS Resume.pdf#toolbar=0"
          width="80%"
          height="1100px"
        ></iframe>
      </div>
    </>
  );
}
