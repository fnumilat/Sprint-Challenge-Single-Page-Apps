import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => setData(res.data.results))
    .catch(err => console.log(err))
  }, []);
  console.log(data)

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div>
      {data.map((char) => {
          return <CharacterDetails key={char.id} char={char} />
        })}
      </div>
    </section>
  );
}

function CharacterDetails({char}) {
  const { image, name } = char;
  return (
    <div>
      <Link to={`/CharacterCard/${char.id}`}>
      <img src={image}/>
      <h2>Character's Name: {name}</h2>
      </Link>
    </div>

  )
}

export default CharacterList;