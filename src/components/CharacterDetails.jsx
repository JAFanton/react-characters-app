import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CharacterDetails() {
  const { characterId } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((e) => {
        console.log("Error getting character details from the API");
      });
  }, []);

  return (
    <>
      {character === null ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Character Details</h2>
      )}

      {character && (
        <div className="box">
          <h3>{character.name}</h3>
          <p>Occupation: {character.occupation}</p>
          <p>Weapon of choice: {character.weapon}</p>
          <Link to='/'>Back</Link>
        </div>
      )}
    </>
  );
}

export default CharacterDetails;
