import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Blink from "react-blink-text";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="home-div">
          <div className="blink-text">
            {" "}
            {/* <Blink
              className="bling"
              color="white"
              text="Make your own 90s. Just call them something else."
              fontSize="30"
              opacity="0.5"
            ></Blink> */}
          </div>
          <div className="home-img">
            <img src={process.env.PUBLIC_URL + "/img/8.JPG"} />
          </div>
        </div>
      </div>
    );
  }
}
