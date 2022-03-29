import { useEffect, useState } from 'react';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import './Filters.css';

const Filters = ({setStatusFilter, setGenderFilter, setSpeciesFilter}) => {
  const [hidden, setHidden] = useState(true);

  const [statusFilterValue, setStatusFilterValue] = useState('');
  const [genderFilterValue, setGenderFilterValue] = useState('');
  const [speciesFilterValue, setSpeciesFilterValue] = useState('');

  const updateFilters = () => {
    setStatusFilter(statusFilterValue);
    setGenderFilter(genderFilterValue);
    setSpeciesFilter(speciesFilterValue);
  };

  const clearFilters = () => {
    setStatusFilterValue('');
    setGenderFilterValue('');
    setSpeciesFilterValue('');
  };

  useEffect(updateFilters, [statusFilterValue, genderFilterValue, speciesFilterValue]);

  return (
    <div className='filters'>
      <div className='filters-button-group'>
        <button className='filters-button' onClick={() => setHidden(!hidden)}>{hidden ? 'Show Filters' : 'Hide Filters'}</button>
        <button className='filters-button' onClick={clearFilters}>Reset Filters</button>
      </div>
      {hidden || <div className='filter-group'>
        <TypeFilter filterFields={['Alive', 'Dead', 'Unknown']} filterTitle='Status' setFilterValue={setStatusFilterValue} filterValue={statusFilterValue}/>
        <TypeFilter filterFields={['Male', 'Female', 'Genderless', 'Unknown']} filterTitle='Gender' setFilterValue={setGenderFilterValue} filterValue={genderFilterValue}/>
        <TypeFilter filterFields={['Human', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Robot', 'Cronenberg', 'Planet', 'Alien', 'Disease']}
        filterTitle='Species' setFilterValue={setSpeciesFilterValue} filterValue={speciesFilterValue}/>
      </div> }     
    </div>
  );
};

export default Filters;
