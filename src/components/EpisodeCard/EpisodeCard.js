import { Link } from 'react-router-dom';
import './EpisodeCard.css';

const EpisodeCard = ({episode}) => {
  return (
    <Link to={`episode/${episode.id}`}>
      <div className='episode-card'>
        <div className='episode-info'>
          <h3 className='episode-name'>{episode.name}</h3>
          <p className='episode-type'>{episode.air_date}</p>
          <p className='episode-dimension'>{episode.episode}</p>
        </div>
      </div>
    </Link>
  )
};

export default EpisodeCard;