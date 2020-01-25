import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterCard(props) {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setChar(response.data.result);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  const { image, name } = char;
  return (
    <div>
    <img src={image}/>
    <h2>Character's Name: {name}</h2>
  </div>

  );
}


