import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CardContainer from '../../components/CardContainer/CardContainer';
import './ListPage.css'

const ListPage = ({ heading, children, dataInfo, setNextPage }) => {

  const handleNextPage = (e) => {
    const url = dataInfo.next || dataInfo.prev; 
    const indexToSliceTo = url.indexOf('=');
    setNextPage(url.slice(0, indexToSliceTo + 1) + (e.selected+1));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className='list-page'>
      <h1 className='list-page-heading'>{heading}</h1>
      <CardContainer>
        {children}
      </CardContainer>
      {dataInfo.pages && <ReactPaginate 
        renderOnZeroPageCount={null}
        pageCount={dataInfo.pages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        className='paginator'
        pageClassName='paginator-page'
        pageLinkClassName='paginator-link'
        previousClassName='paginator-prev-button'
        nextClassName='paginator-next-button'
        onPageChange={handleNextPage}
        />}
    </div>
  );
};

export default ListPage;