import React from "react";
import styled from "styled-components";

const StyledHeaderOne = styled.h1`
  margin-left: -3%;
  margin-top: 4%;
  font-size: 60px;
  color: #062ad5;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <StyledHeaderOne className="ui center">Rick &amp; Morty Fan Page</StyledHeaderOne>
    </header>
  );
}
