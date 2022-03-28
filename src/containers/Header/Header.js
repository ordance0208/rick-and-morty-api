import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../auxillary/Container/Container';
import HamburgerButton from '../../components/HamburgerButton/HamburgerButton';
import './Header.css';

const Header = () => {
  const [hamburgerMenuOpened, setToggleHamburgerMenuOpened] = useState(false);

  const openHamburgerButton = () => {
    setToggleHamburgerMenuOpened(true);
  };

  const closeHamburgerButton = () => {
    setToggleHamburgerMenuOpened(false);
  };

  return (
    <header id='header'>
      <Container>
        <h1><span className='text-primary'>The Rick & Morty Library</span></h1>
        <nav className='main-nav'>
          <ul className={hamburgerMenuOpened ? 'active' : ''}>
            <li><NavLink activeClassName='active-nav-link' exact to='/' onClick={closeHamburgerButton}>Home</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/characters' onClick={closeHamburgerButton}>Characters</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/locations' onClick={closeHamburgerButton}>Locations</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/episodes' onClick={closeHamburgerButton}>Episodes</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/about' onClick={closeHamburgerButton}>About</NavLink></li>
          </ul>
        </nav>
        <HamburgerButton onClick={openHamburgerButton} buttonActive={hamburgerMenuOpened}/>    
      </Container>
    </header>
  )
};

export default Header;