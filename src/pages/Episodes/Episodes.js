import { useContext, useEffect, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import ListPage from '../ListPage/ListPage';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import './Episodes.css'

const Episodes = () => {
  const [episodesData, setEpisodesData] = useState([]);
  const { episodes: apiUrl } = useContext(DataContext);

  const fetchEpisodes = async() => {   
    if(!apiUrl || episodesData.length !== 0) return; 
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEpisodesData(data.results);
      console.log(data);
    } catch(err) {
      console.log('Can\'t fetch data!', err);
    }
  };

  useEffect(fetchEpisodes, [apiUrl]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <ListPage heading={'Episodes'}>
      {episodesData.map((episode) => {
        return <EpisodeCard episode={episode} key={episode.id}/>        
      })}
    </ListPage>
  )
};

export default Episodes;