import Loader from '../Loader/Loader';
import './CardContainer.css';

const CardContainer = ({children}) => {
  return (
    <div className='card-container'>
      {children ? children : <Loader />}
    </div>
  )
};

export default CardContainer;