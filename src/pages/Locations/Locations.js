import { useEffect, useState } from 'react';
import ListPage from '../ListPage/ListPage';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Locations.css';
import Container from '../../auxillary/Container/Container';

const Locations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('https://rickandmortyapi.com/api/location/?page=1');

  const fetchLocations = async() => {    
    try {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setLocationsData(data.results);
      setDataInfo(data.info);
    } catch(err) {
      console.log(`Can't fetch data: `, err);
    }
  };

  useEffect(fetchLocations, [urlToFetch]);
  
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
  )
};

export default Locations;