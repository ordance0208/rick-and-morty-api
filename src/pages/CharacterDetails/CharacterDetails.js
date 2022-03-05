import { useEffect, useState } from 'react';
import './CharacterDetails.css';

const CharacterDetails = ({match}) => {
  const [character, setCharacter] = useState({});
  console.log(match.params.id);
  
  const characterApi = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacterDetails = async() => {
    try {
      const response = await fetch(`${characterApi}${match.params.id}`);
      const data = await response.json();
      setCharacter(data);
      console.log(data);
    } catch(err) {  
      console.log(err);
    }
  };

  useEffect(fetchCharacterDetails, []);

  return (
    <div className='character-details'>
      <div className='character-details-card'>
        <img className='character-image' src={character.image} alt='character img'/>
        <h3>Name: {character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type || '--'}</p>
        <p>Gender: {character.gender  }</p>
      </div>
    </div>
  )
};

export default CharacterDetails;