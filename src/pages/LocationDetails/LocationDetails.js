import { useState, useEffect, useContext } from 'react';
import Container from '../../components/UtilityComponents/Container/Container';
import LocationInfoContainer from '../../components/InformationContainers/LocationInfoContainer/LocationInfoContainer';
import ApiContext from '../../contexts/ApiContext';
import extractIds from '../../utils/extractIds';
import { fetchMultipleCharacters, fetchSingleSubject } from '../../utils/requests';
import './LocationDetails.css';

const LocationDetails = ({ match }) => {
  const [location, setLocation] = useState({});
  const [locationResidents, setLocationResidents] = useState([]);

  const { locations: locationEndpoint } = useContext(ApiContext);
  const { characters: characterEndpoint } = useContext(ApiContext);

  useEffect(() => fetchSingleSubject(`${locationEndpoint}${match.params.id}`, setLocation), []);
  useEffect(() => {
    if(Object.keys(location).length === 0 || location.residents.length === 0) return;
    const urlSuffix = extractIds(location.residents);
    fetchMultipleCharacters(`${characterEndpoint}${urlSuffix}`, setLocationResidents);
  }, [location]);

  return (
    <div className='location-details'>
      <Container>
        <LocationInfoContainer location={location} locationResidents={locationResidents}/>
      </Container>
    </div>
  );
};

export default LocationDetails;

