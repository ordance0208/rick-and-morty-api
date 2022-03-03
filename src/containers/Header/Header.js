import { NavLink } from 'react-router-dom';
import Container from '../../auxillary/Container/Container';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <img className='header-image' src={require('../../images/rick-and-morty-header-image.png')} alt='header-image'/>
        <nav className='main-nav'>
          <ul>
            <li><NavLink activeClassName='active-nav-link' to='/characters'>Characters</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/locations'>Locations</NavLink></li>
            <li><NavLink activeClassName='active-nav-link' to='/episodes'>Episodes</NavLink></li>
          </ul>
        </nav>          
        <div></div>
      </Container>
    </header>
  )
};

export default Header;