import { useState, useEffect, useContext } from 'react';
import Container from '../../components/Container/Container';
import EpisodeInfoContainer from '../../components/EpisodeInfoContainer/EpisodeInfoContainer';
import ApiContext from '../../contexts/ApiContext';
import { fetchSingleSubject, fetchMultipleCharacters } from '../../utils/requests';
import './EpisodeDetails.css';

const EpisodeDetails = ({ match }) => {
  const [episode, setEpisode] = useState({});
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  const { episodes: episodesEndpoint } = useContext(ApiContext);
  const { characters: charactersEndpoint } = useContext(ApiContext);

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