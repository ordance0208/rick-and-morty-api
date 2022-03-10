import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import Container from '../../auxillary/Container/Container';
import { fetchPage } from '../../requests/requests';
import './Episodes.css'

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/episode/?page=1');

  useEffect(() => fetchPage(urlToFetch, setEpisodesData, setDataInfo), [urlToFetch]);
  
  return (
    <div className='episodes'>
      <Container>
        <ListPage heading={'Episodes'} dataInfo={dataInfo} setNextPage={setUrlToFetch}>
          {episodesData.map((episode) => {
            return <EpisodeCard episode={episode} key={episode.id}/>        
          })}
        </ListPage>
      </Container>
    </div>
  )
};

export default Episodes;