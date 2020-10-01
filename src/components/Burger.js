import { useState } from "react";
import React, { Component } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.5rem;
    height: 0.15rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    padding: 0;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "translateX(2%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0.5 : 1)};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(2%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0.5 : 1)};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
