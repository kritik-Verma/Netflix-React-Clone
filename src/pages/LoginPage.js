import React, { useState } from "react";
import "./css/LoginPage.css";
import SingUp from "../components/SingUp";
import Guestpopup from "../components/Guestpopup";
function LoginPage() {
  const [singin, setSingin] = useState(false);
  return (
    <div className="loginScreen">
      <Guestpopup />
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="/images/nlogo.png" alt="" />
        <button onClick={() => setSingin(true)} className="loginScreen__btn">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {!singin ? (
          <>
            <h1>Unlimited films,TV programes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates ut ducimus ex sint quaerat, in quia architecto
              voluptuous totam dolore!
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSingin(true)}
                  className="loginScreen__getStarted"
                >
                  GRT Started{" "}
                </button>
              </form>
            </div>
          </>
        ) : (
          <SingUp />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
