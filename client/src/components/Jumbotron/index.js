import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{  clear: "both", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
