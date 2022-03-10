import CardContainer from '../CardContainer/CardContainer';
import CharacterCard from '../CharacterCard/CharacterCard';
import './LocationInfoContainer.css';

const LocationInfoContainer = ({location, locationResidents}) => {  
  return (
    <div className='location-info-container'>
      <div className='info-holder'>
        <h3 className='location-name'>Name: {location.name}</h3>
        <p className='other-info'>Type: {location.type || '--'}</p>
        <p className='other-info'>Dimension: {location.dimension}</p>
        <h3 className='other-info'>Location Residents:</h3>
      </div>
      <CardContainer>
        {locationResidents.length === 0 ? <p style={{'textAlign' : 'center'}}>No Residents</p> : locationResidents.map((resident) => {
          return <CharacterCard character={resident} key={resident.id}/>
        })}
      </CardContainer>
    </div>
  );
};

export default LocationInfoContainer;