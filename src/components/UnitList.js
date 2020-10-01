import React, { Component } from "react";
import Unit from "./Unit";
import "./UnitList.scss";

export default class UnitList extends Component {
  render() {
    const { data } = this.props.selectedUnits;

    return (
      <section className="unitlist">
        {data.map((unit) => (
          <Unit key={unit.id} unit={unit}></Unit>
        ))}
      </section>
    );
  }
}
