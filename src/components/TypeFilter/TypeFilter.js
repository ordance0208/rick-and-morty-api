import { useEffect, useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import './TypeFilter.css';

const TypeFilter = ({filterFields, filterTitle, setFilterValue, filterValue}) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    setFilterValue(active);
  }, [active]);

  useEffect(() => {
    setActive(filterValue);
  }, [filterValue]);

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