import React, {  useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './Characters.css';
import Container from '../../auxillary/Container/Container';

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/character/?page=1');

  const fetchCharacters = async() => {   
    try {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setCharactersData(data.results);
      setDataInfo(data.info);
    } catch(err) {
      console.log(`Cannot fetch data ${err}`);
    }
  };

  useEffect(fetchCharacters, [urlToFetch]);
  useEffect(() => document.title = 'The R&M Library | Characters');

  return (
    <Container>
      <div className='characters'>
        <ListPage heading={'Characters'} dataInfo={dataInfo} setNextPage={setUrlToFetch}>
        {charactersData.map((character) => {
          return <CharacterCard character={character} key={character.id} />
        })}
        </ListPage>
      </div>
    </Container>
  )
};

export default Characters;