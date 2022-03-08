import './CharacterInfoContainer.css';
 
const CharacterInfoContainer = ({character}) => {
  return (
    <div className='character-info-container'>
      <img className='character-image' src={character.image} alt='character img'/>
      <h3 className='character-name'>Name: {character.name}</h3>
      <p className='other-info'>Status: {character.status}</p>
      <p className='other-info'>Species: {character.species}</p>
      <p className='other-info'>Type: {character.type || '--'}</p>
      <p className='other-info'>Gender: {character.gender  }</p>
    </div>
  )
};

export default CharacterInfoContainer;