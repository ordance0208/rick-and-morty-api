import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import LocationCard from '../../components/LocationCard/LocationCard';
import Container from '../../auxillary/Container/Container';
import { fetchPage } from '../../requests/requests';
import './Locations.css';

const Locations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/location/?page=1');

  useEffect(() => fetchPage(urlToFetch, setLocationsData, setDataInfo), [urlToFetch]);
  
  return (
    <div className='locations'>
      <Container>
        <ListPage heading={'Locations'} dataInfo={dataInfo} setNextPage={setUrlToFetch}>
        {locationsData.map((location) => {
          return <LocationCard location={location} key={location.id}/>
        })}
        </ListPage>
      </Container>
    </div>
  );
};

export default Locations;