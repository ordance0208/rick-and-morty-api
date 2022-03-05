import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import DataContext from '../../contexts/DataContext';
import Container from '../../auxillary/Container/Container';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Characters from '../../pages/Characters/Characters';
import Locations from '../../pages/Locations/Locations';
import Episodes from '../../pages/Episodes/Episodes';
import CharacterDetails from '../../pages/CharacterDetails/CharacterDetails';
import './App.css';

const apiUrl = 'https://rickandmortyapi.com/api';
const apiUrls = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode'
}

function App() {
  const [apiData, setApiData] = useState({});

  const fetchApiData = async() => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(data);
    } catch(err) {
      console.log('Can\'t fetch data!');
    }
  }

  useEffect(fetchApiData, []);

  return (
    <div className="App">
      <DataContext.Provider value={apiData}>
        <Container>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/characters' component={Characters}/>
            <Route path='/character/:id' component={CharacterDetails}/>
            <Route path='/locations' component={Locations}/>
            <Route path='/episodes' component={Episodes}/>
          </Switch>
        </Container>
      </DataContext.Provider>
    </div>
  );
}

export default App;
