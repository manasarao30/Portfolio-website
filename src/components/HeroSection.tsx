import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-x: hidden;

  scroll-margin-top: 70px;
  padding: 0;

  .profile-image {
    background-image: url("./images/mana.png");
    background-size: cover;
    padding-top: 200px;
    margin-top: 100px;
    background-position: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto 20px;
  }
  @media (max-width: 768px) {
    .profile-image {
      margin-top: 30px;
    }
  }

  @media (max-width: 576px) {
    .profile-image {
      margin-top: 20px;
    }
  }

  h1 {
    font-size: 4rem;
    font-family: "Share Tech Mono", serif;

    margin-bottom: 20px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      font-size: 1.5rem;
      background-color: white;
      color: black;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: gray;
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }

    .hero p {
      font-size: 1.2rem;
    }

    .hero .buttons button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    .hero .profile-image {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 576px) {
    .hero h1 {
      font-size: 1.5rem;
    }

    .hero p {
      font-size: 1rem;
    }

    .hero .buttons button {
      padding: 6px 12px;
      font-size: 0.8rem;
    }

    .hero .profile-image {
      width: 100px;
      height: 100px;
    }
  }
`;

const playClickSound = () => {
  const audio = new Audio("./sounds/click.mp3");
  audio.play();
};
const HeroSection = () => (
  <Hero id="home">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: "100px" }}
    >
      <div className="profile-image"></div>
      <h1>Hi, my name is Manasa.</h1>
      <p>I'm a Software Engineer based in the United States.</p>
      <div className="buttons">
        <button
          onClick={() => {
            playClickSound();
            window.open("https://www.linkedin.com/in/manasarao30/", "_blank");
          }}
        >
          LinkedIn
        </button>
        <button
          onClick={() => {
            playClickSound();
            window.open("https://github.com/manasarao30", "_blank");
          }}
        >
          GitHub
        </button>
      </div>
    </motion.div>
  </Hero>
);

export default HeroSection;
