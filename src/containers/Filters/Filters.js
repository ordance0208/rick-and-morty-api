import { useState } from 'react';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import './Filters.css';

const Filters = ({setStatusFilter, setGenderFilter, setSpeciesFilter}) => {
  const [hidden, setHidden] = useState(true);
  const [reset, setReset] = useState(null);

  return (
    <div className='filters'>
      <button className='toggle-show-filters' onClick={() => setHidden(!hidden)}>{hidden ? 'Show Filters' : 'Hide Filters'}</button>
      <button className='toggle-show-filters' onClick={reset}>Reset Filters</button>
      {hidden || <div className='filter-group'>
      <TypeFilter setReset={setReset} filterFields={['Alive', 'Dead', 'Unknown']} setFilter={setStatusFilter} filterTitle='Status'/>
      <TypeFilter setReset={setReset} filterFields={['Male', 'Female', 'Genderless', 'Unknown']} setFilter={setGenderFilter} filterTitle='Gender'/>
      <TypeFilter setReset={setReset} filterFields={['Human', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Robot', 'Cronenberg', 'Planet', 'Alien', 'Disease']}
      setFilter={setSpeciesFilter} filterTitle='Species'/>
      </div> }     
    </div>
  );
};

export default Filters;
