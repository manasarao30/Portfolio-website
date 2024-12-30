import React, { useState } from "react";
import styled from "styled-components";
const Header = styled.header`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 1000; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black; 
  border-bottom: 2px solid white;

  .logo {
    font-size: 2.5rem;
    cursor: pointer;
    font-family: "Share Tech Mono", serif;

    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: gray;
    }
  }

  nav {
    a {
      text-decoration: none;
      color: white;
      margin: 0 15px;
      cursor: pointer;
      font-size: 2rem;
      transition: color 0.3s ease;

      &:hover {
        color: gray;
      }
    }
  }
`;

const HeaderComponent = () => {
  const playSound = () => {
    const audio = new Audio("./sounds/click.mp3");
    audio.play();
  };

  return (
    <Header>
      <a href="#home" className="logo" onClick={playSound}>
        MANASA RAO
      </a>
      <nav>
        <a onClick={playSound} href="#home">
          Home
        </a>
        <a onClick={playSound} href="#about">
          About
        </a>
        <a onClick={playSound} href="#skills">
          Skills
        </a>
        <a onClick={playSound} href="#projects">
          Projects
        </a>
        <a onClick={playSound} href="#contact">
          Contact
        </a>
      </nav>
    </Header>
  );
};

export default HeaderComponent;
