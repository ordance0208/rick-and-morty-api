import { Link } from 'react-router-dom';
import './CharacterCard.css'

const CharacterCard = ({character}) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className='character-card'>
      <div className='image-holder'>
        <img className='character-image' src={character.image} alt='character-image'/>
        <p className='character-status' data-status={character.status.toLowerCase()} >{character.status}</p>
      </div>
      <div className='character-info'>
        <h3 className='character-name'>{character.name}</h3>
        <p className='character-species'>{character.species}</p>
      </div>
    </div>
    </Link>
  );
};

export default CharacterCard;
