import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import "./RightNav.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 4rem;
  margin-right: 57%;
  z-index: 1;
  .li {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 0rem;
    flex-flow: column nowrap;
    background-color: #ffff;
    opacity: 0.5;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    z-index: 1;
    li {
      color: black;
      padding-top: 1rem;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <i className="fa fa-angle-left"></i>
      </Link>

      <li>
        <NavLink className="link" to="/Home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ opacity: 0.5 }} className="link" to="/Projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ opacity: 0.5 }} className="link" to="/Contact">
          Contact
        </NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
