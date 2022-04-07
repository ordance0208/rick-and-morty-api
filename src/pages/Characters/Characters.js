import React, { useState, useEffect, useContext } from 'react';
import ListPage from '../../components/CardList/CardList';
import CharacterCard from '../../components/Cards/CharacterCard/CharacterCard';
import Container from '../../components/UtilityComponents/Container/Container';
import ApiContext from '../../contexts/ApiContext';
import { fetchPage } from '../../utils/requests';
import './Characters.css';

const Characters = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('');
  const [error, setError] = useState(false);

  const { characters } = useContext(ApiContext);

  useEffect(() => { setUrlToFetch(`${characters}?page=1`) } , []);
  useEffect(() => { fetchPage(urlToFetch, setCharactersData, setDataInfo, setError) }, [urlToFetch]);

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