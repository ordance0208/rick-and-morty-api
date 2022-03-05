import { useContext, useEffect, useState } from 'react';
import DataContext from '../../contexts/DataContext';
import ListPage from '../ListPage/ListPage';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Locations.css';

const Locations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const { locations: apiUrl } = useContext(DataContext);

  const fetchLocations = async() => {   
    if(!apiUrl || locationsData.length !== 0) return; 
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setLocationsData(data.results);
      console.log(data);
    } catch(err) {
      console.log('Can\'t fetch data!', err);
    }
  };

  useEffect(fetchLocations, [apiUrl]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <ListPage heading={'Locations'}>
      {locationsData.map((location) => {
        return <LocationCard location={location} key={location.id}/>
      })}
    </ListPage>
  )
};

export default Locations;