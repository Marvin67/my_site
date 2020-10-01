import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectPage.scss";
import { data_1, data_2, data_3, data_4 } from "../data/projectData";
import sucks from "./../images/sucks_slow.gif";

import Navbar from "../components/Navbar";
import UnitList from "../components/UnitList";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units_1: { data: data_1, name: "Berlin_2020", id: 1 },
      units_2: { data: data_2, name: "Varese_2020", id: 2 },
      units_3: { data: data_3, name: "Slettestrand_2019", id: 3 },
      units_4: { data: data_4, name: "Glanllyin_2019", id: 4 },
      selected: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (units_x) => {
    this.setState({ selected: units_x });
  };

  render() {
    const { units_1, units_2, units_3, units_4, selected } = this.state;
    console.log(window.location.href);
    console.log(
      window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    );

    return (
      <div className="project-div">
        <Navbar></Navbar>

        <div className="dashboard">
          <div className="side-div">
            {" "}
            <li>
              <NavLink
                activeStyle={{ opacity: 0.5 }}
                className="project-link"
                to={`/Projects/${units_1.name}`}
                onClick={() => this.handleClick(units_1)}
              >
                {units_1.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ opacity: 0.5 }}
                className="project-link"
                to={`/Projects/${units_2.name}`}
                onClick={() => this.handleClick(units_2)}
              >
                {units_2.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ opacity: 0.5 }}
                className="project-link"
                to={`/Projects/${units_3.name}`}
                onClick={() => this.handleClick(units_3)}
              >
                {units_3.name}
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ opacity: 0.5 }}
                className="project-link"
                to={`/Projects/${units_4.name}`}
                onClick={() => this.handleClick(units_4)}
              >
                {units_4.name}
              </NavLink>
            </li>
          </div>
          {window.location.href.substring(
            window.location.href.lastIndexOf("/") + 1
          ) === "Projects" && (
            <div className="big-img-div">
              <img
                className="back-img"
                src={process.env.PUBLIC_URL + "/img/4.JPG"}
              />
              <div className="text">
                <img className="sucks-gif" src={sucks} />
              </div>
            </div>
          )}

          {selected !== null &&
            window.location.href.substring(
              window.location.href.lastIndexOf("/") + 1
            ) !== "Projects" && <UnitList selectedUnits={selected}></UnitList>}
        </div>
      </div>
    );
  }
}
