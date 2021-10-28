import React from "react";

function Options({ Icon, title }) {
  return title === "My Drive" ? (
    <div className="options options_blue">
      <Icon className="options__icons" />
      <p>{title}</p>
    </div>
  ) : (
    <div className="options">
      <Icon className="options__icons" />
      <p>{title}</p>
    </div>
  );
}

export default Options;
