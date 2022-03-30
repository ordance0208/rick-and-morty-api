import React, { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Container from '../../components/Container/Container';
import { fetchPage } from '../../utils/requests';
import './Characters.css';

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/character/?page=1');
  const [error, setError] = useState(false);

  useEffect(() => {fetchPage(urlToFetch, setCharactersData, setDataInfo, setError)}, [urlToFetch]);

  return (
    <div className='characters'>
      <Container>
        <ListPage heading={'Characters'} dataInfo={dataInfo} urlToFetch={urlToFetch} error={error} setUrlToFetch={setUrlToFetch}>
          {charactersData.map((character) => {
            return <CharacterCard character={character} key={character.id} />
          })}
        </ListPage>
      </Container>
    </div>
  )
};

export default Characters;