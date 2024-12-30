import React, { useState } from "react";
import styled from "styled-components";
const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: black;
  color: white;
  border-top: 2px solid white;

  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const FooterSection = () => {
  return (
    <Footer>
      <p>© 2024 Manasa Rao. All rights reserved.</p>
    </Footer>
  );
};

export default FooterSection;
