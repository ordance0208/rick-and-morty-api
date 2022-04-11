import { useState, useEffect, useContext  } from 'react';
import ListPage from '../../components/MiscellaneusComponents/CardList/CardList';
import LocationCard from '../../components/Cards/LocationCard/LocationCard';
import Container from '../../components/UtilityComponents/Container/Container';
import ApiContext from '../../contexts/ApiContext';
import { fetchPage } from '../../utils/requests';
import './Locations.css';

const Locations = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('');
  const [error, setError] = useState(false);

  const { locations } = useContext(ApiContext);

  useEffect(() => { setUrlToFetch(`${locations}?page=1`) } , []);
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