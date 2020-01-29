import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import SearchForm from "./SearchForm";


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
  margin-left: 10%;
  padding: 20px 20px;
`;

const StyledHeaderTwo = styled.h2`
  font-size: 20px;
  color: red;
  text-decoration: none;
  text-align: center;
`;

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacters(res.data.results);
    })
    .catch(err => console.log(err))
  }, []);
  console.log(characters)


  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <SearchForm chars={characters}/>
      <StyledDiv>
      {characters.map((char) => {
          return <CharacterDetails char={char} />
        })}
      </StyledDiv>

    </section>
  );
}




function CharacterDetails({char}) {
  const { image, name } = char;
  return (
    <div className="Cards">
      <Link key={char.id} to={`/character/${char.id}`}>
      <img src={image}/>
      <StyledHeaderTwo>{name}</StyledHeaderTwo>
      </Link>
    </div>
  )
}

export default CharacterList;