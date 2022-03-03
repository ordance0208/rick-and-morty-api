import Container from '../../auxillary/Container/Container';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <img className='home-image' src={require('../../images/rick-and-morty-header-image.png')}/>
        <h1>The Rick and Morty Library</h1>
        <p>Here you will find all the characters, <br/>locations and episodes from Rick and Morty.</p>
      </div>
    </div>
  )
};

export default Home;