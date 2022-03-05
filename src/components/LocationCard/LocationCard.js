import { Link } from 'react-router-dom';
import './LocationCard.css';

const LocationCard = ({location}) => {
  return (
    <Link to={`location/${location.id}`}>
      <div className='location-card'>
        <div className='location-info'>
          <h3 className='location-name'>{location.name}</h3>
          <p className='location-type'>{location.type}</p>
          <p className='location-dimension'>{location.dimension}</p>
        </div>
      </div>
    </Link>
  )
};

export default LocationCard;