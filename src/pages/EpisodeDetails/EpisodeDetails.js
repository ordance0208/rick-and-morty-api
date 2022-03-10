import { useState, useEffect } from 'react';
import Container from '../../auxillary/Container/Container';
import EpisodeInfoContainer from '../../components/EpisodeInfoContainer/EpisodeInfoContainer';
import { fetchSingleSubject, fetchMultipleCharacters } from '../../requests/requests';
import './EpisodeDetails.css';

const EpisodeDetails = ({match}) => {
  const [episode, setEpisode] = useState({});
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  const locationApiEndpoint = 'https://rickandmortyapi.com/api/episode/';

  useEffect(() => fetchSingleSubject(`${locationApiEndpoint}${match.params.id}`, setEpisode), []);
  useEffect(() => fetchMultipleCharacters('https://rickandmortyapi.com/api/character/', episode, setEpisodeCharacters, 'characters'), [episode])

  return (
    <div className='episode-details'>
      <Container>
        {console.log(episodeCharacters)}
        <EpisodeInfoContainer episode={episode} episodeCharacters={episodeCharacters}/>
      </Container>
    </div>
  );
};

export default EpisodeDetails;