import { useEffect, useState } from 'react';
import CharacterInfoContainer from '../../components/CharacterInfoContainer/CharacterInfoContainer';
import Container from '../../auxillary/Container/Container'
import { fetchSingleSubject } from '../../requests/requests';
import './CharacterDetails.css';

const CharacterDetails = ({match}) => {
  const [character, setCharacter] = useState({});
  const characterApiEndpoint = 'https://rickandmortyapi.com/api/character/';

  useEffect(() => fetchSingleSubject(`${characterApiEndpoint}${match.params.id}`, setCharacter), []);
  
  return (
    <div className='character-details'>
      <Container>
       <CharacterInfoContainer character={character}/>
      </Container>
    </div>
  )
};

export default CharacterDetails;