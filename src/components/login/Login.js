import React from "react";
import { Button } from "@material-ui/core";

import { auth, provider } from "../../firebase";

import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.internetmatters.org/wp-content/uploads/2020/07/discord-hero-1.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
