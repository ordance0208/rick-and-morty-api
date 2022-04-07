import { useState, useEffect, useContext } from 'react';
import Container from '../../components/UtilityComponents/Container/Container';
import CharacterInfoContainer from '../../components/InformationContainers/CharacterInfoContainer/CharacterInfoContainer';
import ApiContext from '../../contexts/ApiContext';
import { fetchSingleSubject } from '../../utils/requests';
import './CharacterDetails.css';

const CharacterDetails = ({ match }) => {
  const [character, setCharacter] = useState({});
  const { characters: characterEndpoint } = useContext(ApiContext);

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