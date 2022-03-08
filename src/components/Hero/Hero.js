import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero-image' src={require('../../Assets/images/rick-and-morty-header-image.png')}/>
      <h1 className='hero-heading'>The Rick and Morty Library</h1>
      <p className='hero-text'>Here you will find all the characters, <br/>locations and episodes from Rick and Morty.</p>
    </div>
  )
};

export default Hero;