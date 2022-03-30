import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import Container from '../../auxillary/Container/Container';
import { fetchPage } from '../../utils/requests';
import './Episodes.css'

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/episode/?page=1');
  const [error, setError] = useState(false);

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