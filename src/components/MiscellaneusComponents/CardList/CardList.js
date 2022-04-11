import { useState, useEffect } from 'react';
import CardContainer from '../../UtilityComponents/CardContainer/CardContainer';
import SearchBox from '../../FilterComponents/SearchBox/SearchBox';
import Filters from '../../FilterComponents/Filters/Filters';
import Paginator from '../Paginator/Paginator';
import './CardList.css';

const CardList = ({ heading, children, dataInfo, setUrlToFetch, urlToFetch, error, filtersDisabled }) => {

  //#region filters
  const [queryString, setQueryString] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  //#endregion

  const [selectedPageIndex, setSelectedPageIndex] = useState(1);

  // Constructs a URL according to the filters and page number 
  const urlConstructor = () => {
    const indexToSliceTo = urlToFetch.indexOf('=');
    const url = `${urlToFetch.slice(0, indexToSliceTo + 1)}${selectedPageIndex}&name=${queryString}&status=${statusFilter}&gender=${genderFilter}&species=${speciesFilter}`;
  
    return url;;
  }

  // Changes the URL to fetch when any of the filters change
  useEffect(() => {
    setSelectedPageIndex(1);
    setUrlToFetch(urlConstructor());    
  }, [queryString, statusFilter, speciesFilter, genderFilter]);

  // Changes the URL to fetch when the page is changed from the paginator
  useEffect(() => {
    setUrlToFetch(urlConstructor());
  }, [selectedPageIndex]);

  // Scrolls to top when the newest page renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className='card-list'>
      <h1 className='card-list-heading'>{heading}</h1>
      <SearchBox searchFor={heading.toLowerCase()} setQueryString={setQueryString} />
      {filtersDisabled || <Filters setStatusFilter={setStatusFilter} setGenderFilter={setGenderFilter} setSpeciesFilter={setSpeciesFilter}/>}
      <CardContainer>
        {error ? <p style={{'textAlign' : 'center'}}>No Results</p> : children}
      </CardContainer>     
        {(!error) && <Paginator pageCount={dataInfo.pages} onPageChange={setSelectedPageIndex} selectedPageIndex={selectedPageIndex}/>}
    </div>
  );
};

export default CardList;