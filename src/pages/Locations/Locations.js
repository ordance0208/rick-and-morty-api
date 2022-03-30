import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import LocationCard from '../../components/LocationCard/LocationCard';
import Container from '../../components/Container/Container';
import { fetchPage } from '../../utils/requests';
import './Locations.css';

const Locations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/location/?page=1');
  const [error, setError] = useState(false);

  useEffect(() => fetchPage(urlToFetch, setLocationsData, setDataInfo, setError), [urlToFetch]);
  
  return (
    <div className='locations'>
      <Container>
        <ListPage heading={'Locations'} dataInfo={dataInfo} urlToFetch={urlToFetch} filtersDisabled={true} error={error} setUrlToFetch={setUrlToFetch}>
        {locationsData.map((location) => {
          return <LocationCard location={location} key={location.id}/>
        })}
        </ListPage>
      </Container>
    </div>
  );
};

export default Locations;