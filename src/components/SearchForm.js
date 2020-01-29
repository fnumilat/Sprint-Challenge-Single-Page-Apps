import React, { useState, useEffect } from "react";
import "../index.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 2%;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 1px;

`;

const StyledImage = styled.img`
  width: 40%;
`;

const StyledHeaderTwo = styled.h2`
  color: #062ad5;
`;

export default function SearchForm(props) {
  console.log(props.chars);


  const[search,setSearched] = useState("");
  const[filtered,setFiltered] = useState([]);

  useEffect(() => {
   
    const filteredChars = props.chars.filter(char=>  char.name.toLowerCase().includes(search) );

   setFiltered(filteredChars);

 }, [search])

 function handleChange(e){
  e.preventDefault();
  setSearched(e.target.value);

}


  return (
    <>

    <section className="search-form">
      <h1 className="form-header">Search Your Character By Name</h1>
     <form className="form">
       <input className="input" value={search} onChange={handleChange} placeholder='Name of the character'/>
       {/* <button className="button" type='Submit'> */}
        {/* Search
       </button> */}


     </form>
    </section>
    <section>
    {filtered.map(filt=>{
         return (
          <StyledDiv>
          <StyledImage src={filt.image}/>
          <StyledHeaderTwo>Character's Name: {filt.name}</StyledHeaderTwo>
          <StyledHeaderTwo>Status: {filt.status}</StyledHeaderTwo>
          <StyledHeaderTwo>Species: {filt.species}</StyledHeaderTwo>
          <StyledHeaderTwo>Gender: {filt.gender}</StyledHeaderTwo>
          <StyledHeaderTwo>Created: {filt.created}</StyledHeaderTwo>
          </StyledDiv>
         )
       })}
    </section>
    </>
  );
    

 
};

