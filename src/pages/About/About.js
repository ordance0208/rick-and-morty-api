import Container from '../../auxillary/Container/Container';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <h3><span className='text-primary'>About this project</span></h3>
        <p>The Rick and Morty Library is a site where you can find all the characters, locations and episodes from the TV show
        Rick and Morty. You can get additional info by pressing on one of the cards.
        This is a project that I did for my web development portfolio. The project utilizes the Rick and Morty API by Axel Fuhrmann, you can learn more about it
        by clicking on the link below.
        Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without 
        claim of ownership and belong to their respective owners.</p>
        <h3><span className='text-primary'>About Me</span></h3>
        <p>Hi, I am Ordan, I am 20 years old and my passion is web development. I am an entry level front end developer constantly expanding my knowledge on the web development field and looking forward into getting an intership.</p>
        <h3><span className='text-primary'>Links</span></h3>
        <a href='https://www.linkedin.com/in/ordan-gramatov/' target='_blank'>LinkedIn</a> <br/>
        <a href='https://github.com/ordance0208' target='_blank'>GitHub Profile</a> <br/>
        <a href='https://github.com/ordance0208/rick-and-morty-api' target='_blank'>GitHub Repository</a> <br/>
        <a href='https://rickandmortyapi.com/' target='_blank'>Rick and Morty API</a> 
      </Container>
    </div>
  )
};

export default About;