import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;

  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  border-bottom: 2px solid white;

  .logo {
    font-size: 2rem;
    font-family: "Share Tech Mono", serif;
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }

  .nav-links {
    display: flex;
    gap: 15px;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.5rem;

      &:hover {
        color: gray;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu-icon {
    display: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 999;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;

    a {
      text-decoration: none;
      color: white;
      font-size: 2rem;

      &:hover {
        color: gray;
      }
    }

    &.active {
      transform: translateY(0);
    }
    .close-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 2.5rem;
      cursor: pointer;
      color: white;

      &:hover {
        color: gray;
      }
    }
  }
`;

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const playSound = () => {
    const audio = new Audio("./sounds/click.mp3");
    audio.play();
  };

  return (
    <Header>
      <a href="#home" className="logo" onClick={playSound}>
        MANASA RAO
      </a>
      <nav className="nav-links">
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
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <FaTimes className="close-icon" onClick={closeMenu} />
        <a
          href="#home"
          onClick={() => {
            closeMenu();
            playSound();
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            closeMenu();
            playSound();
          }}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => {
            closeMenu();
            playSound();
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => {
            closeMenu();
            playSound();
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            closeMenu();
            playSound();
          }}
        >
          Contact
        </a>
      </div>
    </Header>
  );
};

export default HeaderComponent;
