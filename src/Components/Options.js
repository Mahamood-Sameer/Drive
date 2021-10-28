import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Options({ Icon, title }) {
  return title === "My Drive" ? (
    <Link to={`/Drive/${title}`} className="options options_blue">
      <Icon className="options__icons" />
      <p>{title}</p>
    </Link>
  ) : (
    <div className="options">
      <Icon className="options__icons" />
      <p>{title}</p>
    </div>
  );
}

export default Options;
