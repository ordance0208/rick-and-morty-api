import { useState } from 'react';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import './Filters.css';

const Filters = ({setStatusFilter, setGenderFilter, setSpeciesFilter}) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='filters'>
      <button onClick={() => setHidden(!hidden)}>{hidden ? 'Show Filters' : 'Hide Filters'}</button>
      {!hidden && <div className='filter-group'>
      <TypeFilter filterFields={['Alive', 'Dead', 'Unknown']} setFilter={setStatusFilter} filterTitle='Status'/>
      <TypeFilter filterFields={['Male', 'Female', 'Genderless', 'Unknown']} setFilter={setGenderFilter} filterTitle='Gender'/>
      <TypeFilter filterFields={['Human', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Robot', 'Cronenberg', 'Planet', 'Alien', 'Disease']}
      setFilter={setSpeciesFilter} filterTitle='Species'/>
    </div> }     
    </div>
  );
};

export default Filters;
