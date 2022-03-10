import CardContainer from '../CardContainer/CardContainer';
import CharacterCard from '../CharacterCard/CharacterCard';
import './EpisodeInfoContainer.css';

const EpisodeInfoContainer = ({episode, episodeCharacters}) => {
  return (
    <div className='episode-info-container'>
      <div className='info-holder'>
        <h3 className='episode-name'>Name: {episode.name}</h3>
        <p className='other-info'>Air Date: {episode.air_date}</p>
        <p className='other-info'>Episode: {episode.episode}</p>
        <h3 className='other-info'>Episode Characters:</h3>
      </div>
      <CardContainer>
        {episodeCharacters.length === 0 ? <p style={{'textAlign' : 'center'}}>No Residents</p> : episodeCharacters.map((resident) => {
          return <CharacterCard character={resident} key={resident.id}/>
        })}
      </CardContainer>
    </div>
  )
};

export default EpisodeInfoContainer;