import React, { Component } from "react";
import home_1 from "./../images/home_1.JPG";
import home_2 from "./../images/home_2.JPG";
import home_3 from "./../images/home_3.JPG";
import home_4 from "./../images/home_4.JPG";
import home_5 from "./../images/home_5.JPG";
import home_6 from "./../images/home_6.JPG";

import "./EnterPage.css";

export default class EnterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [home_1, home_2, home_3, home_4, home_5, home_6],
      selectedImage: home_1,
      num: 0,
    };
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      if (this.state.num < this.state.images.length - 1) {
        this.setState({ num: this.state.num + 1 });
      } else {
        this.setState({ num: 0 });
      }
      this.setState({ selectedImage: this.state.images[this.state.num] });
    }, 3500);

    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  onNameClick = () => {
    this.props.history.push("/Home");
  };

  render() {
    //console.log(this.state.selectedImage);
    return (
      <div className="container">
        <h2 className="schmutzi" onClick={this.onNameClick}>
          schmutzi
        </h2>
        <p className="quote">
          {" "}
          Ils ne chantent pourtant pas très bien, mais ils chantent.{" "}
        </p>

        <img
          className="home-image"
          src={this.state.selectedImage}
          alt={"images"}
        />
      </div>
    );
  }
}
