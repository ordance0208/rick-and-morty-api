import { Route, Switch } from 'react-router-dom';
import DataContext from '../../contexts/DataContext';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Locations from '../../pages/Locations/Locations';
import Episodes from '../../pages/Episodes/Episodes';
import Characters from '../../pages/Characters/Characters'
import CharacterDetails from '../../pages/CharacterDetails/CharacterDetails';
import LocationDetails from '../../pages/LocationDetails/LocationDetails';
import NotFound from '../../pages/NotFound/NotFound';
import About from '../../pages/About/About';
import EpisodeDetails from '../../pages/EpisodeDetails/EpisodeDetails';
import UniversalPage from '../../pages/UniversalPage/UniversalPage';
import './App.css';

function App() {
  const apiEndpoints = {
    characters: 'https://rickandmortyapi.com/api/character/',
    locations: 'https://rickandmortyapi.com/api/location/',
    episodes: 'https://rickandmortyapi.com/api/episode/'
  };

  return (
    <div className="App">
      <DataContext.Provider value={apiEndpoints}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/characters/'component={Characters}/>
          <Route path='/character/:id' component={CharacterDetails} />
          <Route path='/locations' component={Locations} />
          <Route path='/location/:id' component={LocationDetails} />
          <Route path='/episodes' component={Episodes}/>
          <Route path='/episdoe/:id' component={EpisodeDetails} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
