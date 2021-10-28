import React from "react";
import "./Google.css";
import logo from "./Logo.png";
import { Button } from "@mui/material";
import { auth, provider } from "../fbase";

function Google() {
  const Login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div class="google_auth">
      <div className="google_auth_container">
        <div className="logo__section">
          <img src={logo} alt="logo"></img>
          <p>Drive</p>
        </div>
        <div className="google__body">
          <p>Store, access, and share your files in one secure place</p>
          <span>
            Store any and every file. Access files anytime, anywhere from your
            desktop and mobile devices. Control how files are shared.
          </span>
        </div>
      </div>
      <center>
        <Button
          onClick={() => {
            Login();
          }}
        >
          Start Free Trail
        </Button>
      </center>
    </div>
  );
}

export default Google;
