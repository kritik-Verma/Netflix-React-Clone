import React from "react";
import "./css/My_list.css";
import Nav from "../components/Nav";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

function My_list(props) {
  return (
    <div>
      <Nav activeState={props} />
      <Demo />
      <Footer />
    </div>
  );
}

export default My_list;
