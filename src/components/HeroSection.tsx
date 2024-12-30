import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  text-align: center;
  min-height: 100vh; 
  padding: 0; 

  .profile-image {
    background-image: url('./images/mana.png');
    background-size: cover;
    background-position: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto 20px; 
  }

  h1 {
    font-size: 4rem;
    font-family: 'Share Tech Mono', serif;

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
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: gray;
        color: white;
      }
    }
  }
`;
const playClickSound = () => {
  const audio = new Audio("./sounds/click.mp3");
  audio.play();
};
const HeroSection = () => (
  <Hero>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-image"></div>
      <h1>Hi, my name is Manasa.</h1>
      <p>I'm a Software Engineer based in the United States.</p>
      <div className="buttons">
        <button onClick={() => {
          playClickSound();
          window.open('https://www.linkedin.com/in/manasarao30/', '_blank');
        }}>
          LinkedIn
        </button>
        <button onClick={() => {
          playClickSound();
          window.open('https://www.linkedin.com/in/manasarao30/', '_blank');
        }}>
          GitHub
        </button>
      </div>
    </motion.div>
  </Hero>
);

export default HeroSection;
