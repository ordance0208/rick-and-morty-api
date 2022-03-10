import { useState, useEffect } from 'react';
import Container from '../../auxillary/Container/Container';
import LocationInfoContainer from '../../components/LocationInfoContainer/LocationInfoContainer';
import { fetchMultipleCharacters, fetchSingleSubject } from '../../requests/requests';
import './LocationDetails.css';

const LocationDetails = ({ match }) => {
  const [location, setLocation] = useState({});
  const [locationResidents, setLocationResidents] = useState([]);

  const locationApiEndpoint = 'https://rickandmortyapi.com/api/location/';

  useEffect(() => fetchSingleSubject(`${locationApiEndpoint}${match.params.id}`, setLocation), []);
  useEffect(() => fetchMultipleCharacters('https://rickandmortyapi.com/api/character/', location, setLocationResidents, 'residents'), [location]);

  return (
    <div className='location-details'>
      <Container>
        <LocationInfoContainer location={location} locationResidents={locationResidents}/>
      </Container>
    </div>
  );
};

export default LocationDetails;