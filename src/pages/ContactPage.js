import React, { Component } from "react";
import Navbar from "../components/Navbar";

import "./ContactPage.css";
import gif from "./../images/ptica.gif";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        email: "eva.smuc@gmail.com",
        location: "Zagreb, Croatia",
        resume: "PDF file",
      },
    };
  }

  render() {
    const { email, location, resume } = this.state.info;
    return (
      <div>
        <Navbar></Navbar>
        <div className="big-img-div">
          <img src={process.env.PUBLIC_URL + "/img/1.JPG"} />
          {/* <div className="toggle-div">
            <button className="toggle-btn">Change background photo</button>
          </div> */}

          <div className="contact-info">
            <div className="bird-div">
              <img className="bird-gif" src={gif}></img>
            </div>

            <div className="columns">
              <div className="col">
                {" "}
                <p className="info-type">email</p>
                <p className="real-info">{email}</p>
              </div>
              <div className="col">
                <p className="info-type">location</p>
                <p className="real-info">{location}</p>
              </div>
              <div className="col">
                <p className="info-type">resume</p>
                <p className="real-info">{resume}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
