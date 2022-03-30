import { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import './Paginator.css';

const Paginator = ({pageCount, onPageChange, selectedPageIndex}) => {
  const [pageRange, setPageRange] = useState(5);
  const [marginPages, setMarginPages] = useState(2);

  const handleResize = () => {
    setPageRange(window.innerWidth < 650 ? 1 : 5);
    setMarginPages(window.innerWidth < 650 ? 1 : 2);
  }
  
  // Set the paginator page range and margin pages based on screen size
  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <ReactPaginate 
        renderOnZeroPageCount={null}
        //The logic below is only used to prevent logging a warning to the console 
        pageCount={isNaN(pageCount) ? 1 : Math.ceil(pageCount)}
        pageRangeDisplayed={pageRange}
        marginPagesDisplayed={marginPages}
        className='paginator'
        pageClassName='paginator-page'
        pageLinkClassName='paginator-link'
        previousClassName='paginator-prev-button'
        nextClassName='paginator-next-button'
        activeClassName='paginator-active-page'
        onPageChange={(e) => onPageChange(e.selected + 1)}
        forcePage={selectedPageIndex - 1}
        />
  );
};

export default Paginator