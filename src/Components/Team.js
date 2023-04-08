import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import Footer from "./Footer";
import GetTouch from "./GetTouch";
import TeamPage from "../screens/TeamPage";

function Team() {
  return (
    <div className="bg-dark">
      <NavBar />
      <Footer />
    </div>
  );
}

export default Team;
