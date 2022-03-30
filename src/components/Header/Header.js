import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import HamburgerMenuOverlay from '../../helpers/HamburgerMenuOverlay/HamburgerMenuOverlay';
import './Header.css';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened(true);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <header id='header'>
      <Container>
        {menuOpened && <HamburgerMenuOverlay onClick={closeMenu}/>}
        <h1 className='title'>The Rick & Morty Library</h1>
        <nav className='main-nav'>
          <ul className={menuOpened ? 'active' : ''}>
            <li><NavLink activeClassName='active-nav-link' exact to='/' onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/characters' onClick={closeMenu}>Characters</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/locations' onClick={closeMenu}>Locations</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/episodes' onClick={closeMenu}>Episodes</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/about' onClick={closeMenu}>About</NavLink></li>
          </ul>
        </nav>
        <HamburgerButton onClick={menuOpened ? closeMenu : openMenu} menuOpened={menuOpened}/>    
      </Container>
    </header>
  )
};

export default Header;