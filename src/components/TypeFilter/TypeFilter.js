import { useEffect, useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import './TypeFilter.css';

const TypeFilter = ({filterFields, setFilter, filterTitle}) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    setFilter(active);
  }, [active])

  return (
    <div className='type-filter'>
      <h3 className='filter-title'>{filterTitle}</h3>
      <div className='radio-group'>
        {filterFields.map(type => <RadioButton active={active} setActive={setActive} value={type} key={type}/>)} 
      </div>
    </div>
  )
};

export default TypeFilter;