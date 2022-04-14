import { useState, useEffect, useContext } from 'react';
import Container from '../../components/UtilityComponents/Container/Container';
import EpisodeInfoContainer from '../../components/InformationContainers/EpisodeInfoContainer/EpisodeInfoContainer';
import ApiContext from '../../contexts/ApiContext';
import extractIds from '../../utils/extractIds';
import { fetchSingleSubject, fetchMultipleCharacters } from '../../utils/requests';

const EpisodeDetails = ({ match }) => {
  const [episode, setEpisode] = useState({});
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  const { episodes: episodesEndpoint } = useContext(ApiContext);
  const { characters: charactersEndpoint } = useContext(ApiContext);

  useEffect(() => fetchSingleSubject(`${episodesEndpoint}${match.params.id}`, setEpisode), []);
  useEffect(() => {
    if(Object.keys(episode).length === 0 || episode.characters.length === 0) return;
    const urlSuffix = extractIds(episode.characters);
    fetchMultipleCharacters(`${charactersEndpoint}${urlSuffix}`, setEpisodeCharacters);
  }, [episode])

  return (
    <div className='episode-details'>
      <Container>
        <EpisodeInfoContainer episode={episode} episodeCharacters={episodeCharacters}/>
      </Container>
    </div>
  );
};

export default EpisodeDetails;