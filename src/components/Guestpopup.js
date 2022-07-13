import React from "react";
import "./css/Guestpopup.css";
import { auth } from "../firebase";
function Guestpopup() {
  const signIn = (el) => {
    el.preventDefault();

    auth
      .signInWithEmailAndPassword("guest@netflixclone.come", "pas123")
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="Guestpopup__main">
      <h2>click here to login as a guest</h2>
      <button onClick={signIn}>Login as a Guest </button>
    </div>
  );
}

export default Guestpopup;
