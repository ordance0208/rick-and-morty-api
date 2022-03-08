import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import './Episodes.css'
import Container from '../../auxillary/Container/Container';

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/episode/?page=1');

  const fetchEpisodes = async() => {   
    try {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setEpisodesData(data.results);
      setDataInfo(data.info);
      console.log(data);
    } catch(err) {
      console.log(`Can't fetch data: `, err);
    }
  };

  useEffect(fetchEpisodes, [urlToFetch]);
  
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