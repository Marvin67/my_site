import React, { Component } from "react";
import "./Navbar.css";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 130px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav>
        <div></div>
        <Burger />
      </Nav>
    );
  }
}
