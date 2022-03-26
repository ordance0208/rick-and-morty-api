import Container from '../../auxillary/Container/Container';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <img className='hero-image' src={require('../../Assets/images/rick-and-morty-header-image.png')}/>
        <h1 className='hero-heading'>The Rick and Morty Library</h1>
        <p className='hero-text'>Welcome to The Rick and Morty Library here you will informations about all the characters, <br/>locations and episodes from Rick and Morty.</p>
      </Container>
    </div>
  )
};

export default Hero;