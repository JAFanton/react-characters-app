import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((e) => {
        console.log("Error getting characters from the API");
      });
  }, []);

  return (
    <>
      <h2>List of characters in our API</h2>

      { characters === null
            ? <h2>Loading...</h2>
            : <h2>Numbers of characters in our API: {characters.length}</h2>
      }

      {/* characters && ensures to check if the new array is truthy using the useState property from earlier (Null is automatically falsy, and so if the new array returns with any info it is then truthy) */}
      {characters &&
        characters.map((characterDetails, index) => {
          return (
            <div key={index} className="box">
              <h3>{characterDetails.name}</h3>
              <p>Occupation: {characterDetails.occupation}</p>
              <p>Weapon of choice: {characterDetails.weapon}</p>
              
              <Link to={`/characters/${characterDetails.id}`}>More Details</ Link>
            </div>
          );
        })}
    </>
  );
}

export default Homepage;
