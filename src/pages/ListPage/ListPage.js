import { useEffect, useState } from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import './ListPage.css'

const ListPage = ({ heading, filterType, children }) => {
  return (
    <div className='list-page'>
      <h1 className='list-page-heading'>{heading}</h1>
      <CardContainer>
        {children}
      </CardContainer>
    </div>
  )
};

export default ListPage;