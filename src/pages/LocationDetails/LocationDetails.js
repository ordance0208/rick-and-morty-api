import { useState, useEffect } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './LocationDetails.css';

const LocationDetails = ({ match }) => {
  const [location, setLocation] = useState({});
  const [locationResidents, setLocationResidents] = useState([]);
  const [noResidents, setNoResidents] = useState(false);

  const locationApiEndpoint = 'https://rickandmortyapi.com/api/location/';

  const fetchLocationDetails = async() => {
    try {
      const response = await fetch(`${locationApiEndpoint}${match.params.id}`);
      const data = await response.json();
      setLocation(data);
    } catch(err) {  
      console.log(`Cannot fetch data: ${err}`);
    }
  };

  const fetchResidents = async() => {
    let charactersApiEndpoint = 'https://rickandmortyapi.com/api/character/';

    if(Object.keys(location).length === 0) return;

    if(location.residents.length === 0) {      
      setNoResidents(true);
    }

    for(let i = 0; i < location.residents.length; i++) {

      const indexToSliceFrom = location.residents[i].lastIndexOf('/'); 
      const characterIndex = location.residents[i].slice(indexToSliceFrom + 1);

      charactersApiEndpoint += `${characterIndex},`;
    }

    charactersApiEndpoint = charactersApiEndpoint.slice(0, charactersApiEndpoint.length - 1);
    
    try {
      const response = await fetch(charactersApiEndpoint);
      const data = await response.json();

      if(Array.isArray(data)) {
        setLocationResidents(data);
      } else {
        setLocationResidents([data]);
        console.log('false');
      }

    } catch (err) {
      console.log(`Cannot fetch data: ${err}`);
    }
  }

  useEffect(fetchLocationDetails, []);
  useEffect(fetchResidents, [location]);

  return (
    <div className='location-details'>
      <div className='details-container'>     
        <h3 className='location-name'>Name: {location.name}</h3>
        <p className='location-detail'>Type: {location.type || '--'}</p>
        <p className='location-detail'>Dimension: {location.dimension}</p>
        <h3 className='location-residents'>Location residents:</h3>
        <CardContainer>
          {noResidents ? 'No residents' : locationResidents.map((resident) => {
            return <CharacterCard character={resident} key={resident.id}/>
          })}
        </CardContainer>
      </div>
    </div>
  );
};

export default LocationDetails;