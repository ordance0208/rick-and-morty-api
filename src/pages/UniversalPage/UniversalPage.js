import { useContext, useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import LocationCard from '../../components/LocationCard/LocationCard';
import { fetchPage } from '../../requests/requests';
import SearchBox from '../../components/SearchBox/SearchBox';
import ReactPaginate from 'react-paginate';
import DataContext from '../../contexts/DataContext';
import Container from '../../auxillary/Container/Container';
import CardContainer from '../../components/CardContainer/CardContainer';
import './UniversalPage.css';
import './Paginator.css';

const UniversalPage = ({ location }) => {
  const [subjectData, setSubjectData] = useState([]);
  const [dataInfo, setDataInfo] = useState({});
  const [urlToFetch, setUrlToFetch] = useState('');
  const [error, setError] = useState(false);

  const [queryString, setQueryString] = useState('');
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);

  const currentPath = location.pathname.substring(1);
  const neededEndpoint = useContext(DataContext)[currentPath];

  const chooseContainerType = (subject) => {
    switch(currentPath) {
      case 'characters' : return (<CharacterCard character={subject} key={subject.id}/>);
      case 'locations' : return (<LocationCard location={subject} key={subject.id}/>);
      case 'episodes' : return (<EpisodeCard episode={subject} key={subject.id}/>);
      default : return;
    }
  };

  const urlConstructor = () => `${neededEndpoint}?page=${selectedPageIndex}&name=${queryString}`;

  useEffect(() => {
    setUrlToFetch(urlConstructor());
  }, [queryString, selectedPageIndex]);

  useEffect(() => {    
    setUrlToFetch(neededEndpoint);
  }, [currentPath]);

  useEffect(() => {
    if(!urlToFetch) return;
    console.log(urlToFetch);
    fetchPage(urlToFetch, setSubjectData, setDataInfo, setError);
  }, [urlToFetch]);

  return (
    <div className='universal-page'>
      <Container>
        <h1 className='heading'>{currentPath.charAt(0).toUpperCase() + currentPath.substring(1)}</h1>
        <SearchBox searchFor={currentPath} setQueryString={setQueryString}/>
        <CardContainer>
          {error ? <p>Error</p> : subjectData.map(chooseContainerType)}
        </CardContainer>
        {dataInfo && <ReactPaginate 
          renderOnZeroPageCount={null}
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
        />}
      </Container>
    </div>
  );
};

export default UniversalPage;