import { useContext, useEffect, useState } from 'react';
import CharacterInfoContainer from '../../components/CharacterInfoContainer/CharacterInfoContainer';
import Container from '../../components/Container/Container';
import { fetchSingleSubject } from '../../utils/requests';
import DataContext from '../../contexts/DataContext';
import './CharacterDetails.css';

const CharacterDetails = ({match}) => {
  const [character, setCharacter] = useState({});
  const { characters: characterEndpoint } = useContext(DataContext);

  useEffect(() => fetchSingleSubject(`${characterEndpoint}${match.params.id}`, setCharacter), []);
  
  return (
    <div className='character-details'>
      <Container>
       <CharacterInfoContainer character={character}/>
      </Container>
    </div>
  );
};

export default CharacterDetails;