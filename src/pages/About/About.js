import Container from '../../auxillary/Container/Container';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <h3><span className='text-primary'>About this project</span></h3>
        <p>On this site you can find all the characters, locations and episodes and details for them from the TV Show Rick and Morty. This is a project made in React that I did for my front-end portfolio. In this project I used the <a target='_blank' href='https://rickandmortyapi.com/'><span className='text-primary'>Rick and Morty API.</span></a>
        <br/>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.</p>
      </Container>
    </div>
  )
};

export default About;