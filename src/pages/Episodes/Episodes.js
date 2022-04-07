import { useState, useEffect, useContext  } from 'react';
import ListPage from '../../components/CardList/CardList';
import EpisodeCard from '../../components/Cards/EpisodeCard/EpisodeCard';
import Container from '../../components/UtilityComponents/Container/Container';
import ApiContext from '../../contexts/ApiContext';
import { fetchPage } from '../../utils/requests';
import './Episodes.css'

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('');
  const [error, setError] = useState(false);

  const { episodes } = useContext(ApiContext);

  useEffect(() => { setUrlToFetch(`${episodes}?page=1`) } , []);
  useEffect(() => fetchPage(urlToFetch, setEpisodesData, setDataInfo, setError), [urlToFetch]);
  
  return (
    <div className='episodes'>
      <Container>
        <ListPage heading={'Episodes'} dataInfo={dataInfo} urlToFetch={urlToFetch} filtersDisabled={true} setUrlToFetch={setUrlToFetch} error={error}>
          {episodesData.map((episode) => {
            return <EpisodeCard episode={episode} key={episode.id}/>        
          })}
        </ListPage>
      </Container>
    </div>
  )
};

export default Episodes;