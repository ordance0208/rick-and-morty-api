import { useContext, useEffect, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import ListPage from '../ListPage/ListPage';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './Characters.css';

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const { characters: apiUrl } = useContext(DataContext);

  const fetchCharacters = async() => {   
    if(!apiUrl || charactersData.length !== 0) return; 
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCharactersData(data.results);
      console.log(data);
    } catch(err) {
      console.log('Can\'t fetch data!', err);
    }
  };

  useEffect(fetchCharacters, [apiUrl]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ListPage heading={'Characters'}>
      {charactersData.map((character) => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </ListPage>
  )
};

export default Characters;