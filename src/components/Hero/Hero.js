import Container from '../UtilityComponents/Container/Container';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <img className='hero-image' src={require('../../assets/images/rick-and-morty-hero-image.png')} alt='hero page'/>
        <h1 className='hero-heading'>The Rick & Morty Library</h1>
        <p className='hero-text'>Here you will find all the characters, locations and episodes from the TV show Rick and Morty.</p>
      </Container>
    </div>
  )
};

export default Hero;