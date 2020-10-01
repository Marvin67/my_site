import React, { Component } from "react";
import "./Unit.scss";
import { Link } from "react-router-dom";

export default class Unit extends Component {
  render() {
    const { id, img, name, caption } = this.props.unit;
    return (
      <section className="unit">
        {id % 2 === 0 ? (
          <div className="unit-info-left">
            <p className="name">{name}</p>
            <p className="caption">{caption}</p>
          </div>
        ) : null}

        <div className="img-container">
          <Link>
            <img src={img} alt="unit-img" />
          </Link>
        </div>

        {id % 2 === 0 ? null : (
          <div className="unit-info-right">
            <p className="name">{name}</p>
            <p className="caption">{caption}</p>
          </div>
        )}
      </section>
    );
  }
}
