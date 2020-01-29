import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0d3242;
  padding-bottom: 4%;
  padding-top: .1%;
  border-radius: 5px;
`;

const StyledHeaderOne = styled.h1`
  font-size: 60px;
  color: #FF7800;
`;

const StyledImage = styled.img`
  width: 50%;
  margin-left: 24%;
  border-radius: 3px;
`;



export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StyledHeader>
        <StyledHeaderOne>Welcome to the ultimate fan site!</StyledHeaderOne>
        <StyledImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </StyledHeader>
    </section>
  );
}
