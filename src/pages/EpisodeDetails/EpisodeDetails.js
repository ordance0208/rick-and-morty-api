import { useState, useEffect, useContext } from 'react';
import Container from '../../auxillary/Container/Container';
import EpisodeInfoContainer from '../../components/EpisodeInfoContainer/EpisodeInfoContainer';
import { fetchSingleSubject, fetchMultipleCharacters } from '../../requests/requests';
import DataContext from '../../contexts/DataContext';
import './EpisodeDetails.css';

const EpisodeDetails = ({match}) => {
  const [episode, setEpisode] = useState({});
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  const { episodes: episodesEndpoint } = useContext(DataContext);
  const { characters: charactersEndpoint } = useContext(DataContext);

  useEffect(() => fetchSingleSubject(`${episodesEndpoint}${match.params.id}`, setEpisode), []);
  useEffect(() => fetchMultipleCharacters(charactersEndpoint, episode, setEpisodeCharacters, 'characters'), [episode])

  return (
    <div className='episode-details'>
      <Container>
        <EpisodeInfoContainer episode={episode} episodeCharacters={episodeCharacters}/>
      </Container>
    </div>
  );
};

export default EpisodeDetails;