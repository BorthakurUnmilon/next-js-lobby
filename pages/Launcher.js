import React from "react";

const Launcher = ({ setIsPlayClicked }) => {
  return (
    <div>
      <iframe
        id="iframeEl"
        width="100%"
        height="100%"
        frameBorder="0"
        src=""
        scrolling="yes"
      >
        <button onClick={() => setIsPlayClicked(false)}>close</button>
      </iframe>
    </div>
  );
};

export default Launcher;
