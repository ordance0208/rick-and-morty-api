import { useEffect, useState } from 'react';
import CharacterInfoContainer from '../../components/CharacterInfoContainer/CharacterInfoContainer';
import './CharacterDetails.css';

const CharacterDetails = ({match}) => {
  const [character, setCharacter] = useState({});
  const characterApiEndpoint = 'https://rickandmortyapi.com/api/character/';

  const fetchCharacterDetails = async() => {
    try {
      const response = await fetch(`${characterApiEndpoint}${match.params.id}`);
      const data = await response.json();
      setCharacter(data);
    } catch(err) {  
      console.log(err);
    }
  };

  useEffect(fetchCharacterDetails, []);

  return (
    <div className='character-details'>
      <CharacterInfoContainer character={character}/>
    </div>
  )
};

export default CharacterDetails;