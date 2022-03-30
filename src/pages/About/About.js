import Container from '../../components/Container/Container';
import TextGroup from '../../components/TextGroup/TextGroup';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <Container>
        <TextGroup heading='About This Project'>
          <p>
            Here you will find all the characters, locations and episodes from the TV show
            Rick and Morty. You can get additional information by clicking on the cards.
            This is a project that I did for my web development portfolio. This project utilizes the Rick and Morty API by Axel Fuhrmann, you can learn more about it
            by clicking on the link below.
            <strong> Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without 
            claim of ownership and belong to their respective owners.</strong>
          </p>
        </TextGroup>
        <TextGroup heading='About Me'>
          <p>
            I am Ordan Gramatov a guy with passion for web development. I am an entry level front end developer constantly expanding my knowledge on the web development field and looking forward into getting an intership.
          </p>
        </TextGroup>
        <TextGroup heading='Links'>
          <a href='https://www.linkedin.com/in/ordan-gramatov/' target='_blank'>LinkedIn</a> <br/>
          <a href='https://github.com/ordance0208' target='_blank'>GitHub Profile</a> <br/>
          <a href='https://github.com/ordance0208/rick-and-morty-api' target='_blank'>GitHub Repository</a> <br/>
          <a href='https://rickandmortyapi.com/' target='_blank'>Rick and Morty API</a> 
        </TextGroup>   
      </Container>
    </div>
  )
};

export default About;