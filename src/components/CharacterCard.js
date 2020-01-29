import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 2%;
`;

const StyledImage = styled.img`
  width: 40%;
`;

const StyledHeaderTwo = styled.h2`
  color: #062ad5;
`;


export default function CharacterCard(props) {
  const [char, setChar] = useState([]);
  let { id } = useParams();

  

  useEffect(() => {

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setChar(response.data);
          console.log(char);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  const { image, name, status, species, gender, created } = char;
  console.log(char);
  return (
    <StyledDiv>
    <StyledImage src={image}/>
    <StyledHeaderTwo>Character's Name: {name}</StyledHeaderTwo>
    <StyledHeaderTwo>Status: {status}</StyledHeaderTwo>
    <StyledHeaderTwo>Species: {species}</StyledHeaderTwo>
    <StyledHeaderTwo>Gender: {gender}</StyledHeaderTwo>
    <StyledHeaderTwo>Created: {created}</StyledHeaderTwo>
  </StyledDiv>
  );

  
}


