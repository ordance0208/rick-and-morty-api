import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../../components/CardContainer/CardContainer';
import SearchBox from '../../components/SearchBox/SearchBox';
import Filters from '../../components/Filters/Filters';
import Paginator from '../../components/Paginator/Paginator';
import './ListPage.css'

const ListPage = ({ heading, children, dataInfo, setUrlToFetch, urlToFetch: endpoint, error, filtersDisabled }) => {

  //#region filters
  const [queryString, setQueryString] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  //#endregion

  const [selectedPageIndex, setSelectedPageIndex] = useState(1);

  // Constructs a URL according to the filters and page number 
  const urlConstructor = () => {
    const url = endpoint;
    
    const indexToSliceTo = url.indexOf('=');
    const urlToFetch = `${url.slice(0, indexToSliceTo + 1)}${selectedPageIndex}&name=${queryString}&status=${statusFilter}&gender=${genderFilter}&species=${speciesFilter}`;
  
    return urlToFetch;
  }

  // Change the URL to fetch when any of the filters change
  useEffect(() => {
    setSelectedPageIndex(1);
    setUrlToFetch(urlConstructor());    
  }, [queryString, statusFilter, speciesFilter, genderFilter]);

  // Change the URL to fetch when the page is changed from the paginator
  useEffect(() => {
    setUrlToFetch(urlConstructor());
  }, [selectedPageIndex]);

  // Scroll to top when the newest page renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className='list-page'>
      <h1 className='list-page-heading'>{heading}</h1>
      <SearchBox searchFor={heading.toLowerCase()} setQueryString={setQueryString} />
      {filtersDisabled || <Filters setStatusFilter={setStatusFilter} setGenderFilter={setGenderFilter} setSpeciesFilter={setSpeciesFilter}/>}
      <CardContainer>
        {error ? <p style={{'textAlign' : 'center'}}>No Results</p> : children}
      </CardContainer>     
        {(dataInfo && !error) && <Paginator pageCount={dataInfo.pages} onPageChange={setSelectedPageIndex} selectedPageIndex={selectedPageIndex}/>}
    </div>
  );
};

export default ListPage;