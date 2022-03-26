import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../../components/CardContainer/CardContainer';
import SearchBox from '../../components/SearchBox/SearchBox';
import Filters from '../../containers/Filters/Filters';
import './ListPage.css'

const ListPage = ({ heading, children, dataInfo, setUrlToFetch, urlToFetch: endpoint, error }) => {

  //#region filters
  const [queryString, setQueryString] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  //#endregion

  const [selectedPageIndex, setSelectedPageIndex] = useState(1);

  const urlConstructor = () => {
    const url = endpoint;
    
    const indexToSliceTo = url.indexOf('=');
    const urlToFetch = `${url.slice(0, indexToSliceTo + 1)}${selectedPageIndex}&name=${queryString}&status=${statusFilter}&gender=${genderFilter}&species=${speciesFilter}`;
  
    return urlToFetch;
  }

  useEffect(() => {
    setSelectedPageIndex(1);
    setUrlToFetch(urlConstructor());    
  }, [queryString, statusFilter, speciesFilter, genderFilter]);

  useEffect(() => {
    setUrlToFetch(urlConstructor());
  }, [selectedPageIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className='list-page'>
      <h1 className='list-page-heading'>{heading}</h1>
      <SearchBox searchFor={heading.toLowerCase()} setQueryString={setQueryString} />
      <Filters setStatusFilter={setStatusFilter} setGenderFilter={setGenderFilter} setSpeciesFilter={setSpeciesFilter}/>
      <CardContainer>
        {error ? 'Err' : children}
      </CardContainer>
      {dataInfo && <ReactPaginate 
        renderOnZeroPageCount={null}
        // Prevents printing a warning message to the console
        pageCount={dataInfo.pages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        className='paginator'
        pageClassName='paginator-page'
        pageLinkClassName='paginator-link'
        previousClassName='paginator-prev-button'
        nextClassName='paginator-next-button'
        activeClassName='paginator-active-page'
        onPageChange={(e) => setSelectedPageIndex(e.selected + 1)}
        forcePage={selectedPageIndex - 1}
        />}
    </div>
  );
};

export default ListPage;