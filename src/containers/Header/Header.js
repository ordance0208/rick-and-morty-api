import { NavLink } from 'react-router-dom';
import Container from '../../auxillary/Container/Container';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <h1><span className='text-primary'>The Rick and Morty Library</span></h1>
        <nav className='main-nav'>
          <ul>
            <li><NavLink activeClassName='active-nav-link' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/characters'>Characters</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/locations'>Locations</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/episodes'>Episodes</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/about'>About</NavLink></li>
          </ul>
        </nav>          
      </Container>
    </header>
  )
};

export default Header;