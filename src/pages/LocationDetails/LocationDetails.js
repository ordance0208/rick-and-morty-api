import { useState, useEffect, useContext } from 'react';
import Container from '../../components/Container/Container';
import LocationInfoContainer from '../../components/LocationInfoContainer/LocationInfoContainer';
import DataContext from '../../contexts/DataContext';
import { fetchMultipleCharacters, fetchSingleSubject } from '../../utils/requests';
import './LocationDetails.css';

const LocationDetails = ({ match }) => {
  const [location, setLocation] = useState({});
  const [locationResidents, setLocationResidents] = useState([]);

  const { locations: locationEndpoint } = useContext(DataContext);
  const { characters: characterEndpoint } = useContext(DataContext);

  useEffect(() => fetchSingleSubject(`${locationEndpoint}${match.params.id}`, setLocation), []);
  useEffect(() => fetchMultipleCharacters(characterEndpoint, location, setLocationResidents, 'residents'), [location]);

  return (
    <div className='location-details'>
      <Container>
        <LocationInfoContainer location={location} locationResidents={locationResidents}/>
      </Container>
    </div>
  );
};

export default LocationDetails;