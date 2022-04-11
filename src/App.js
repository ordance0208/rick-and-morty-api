import { Route, Switch } from 'react-router-dom';
import ApiContext from './contexts/ApiContext';
import TitleComponent from './components/UtilityComponents/TitleComponent/TitleComponent';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import Locations from './pages/Locations/Locations';
import LocationDetails from './pages/LocationDetails/LocationDetails';
import Episodes from './pages/Episodes/Episodes';
import EpisodeDetails from './pages/EpisodeDetails/EpisodeDetails';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  const apiEndpoints = {
    characters: 'https://rickandmortyapi.com/api/character/',
    locations: 'https://rickandmortyapi.com/api/location/',
    episodes: 'https://rickandmortyapi.com/api/episode/'
  };

  return (
    <div className="App">
      <ApiContext.Provider value={apiEndpoints}>
        <Route path='/' component={TitleComponent} />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/characters/'component={Characters}/>
          <Route path='/character/:id' component={CharacterDetails} />
          <Route path='/locations' component={Locations} />
          <Route path='/location/:id' component={LocationDetails} />
          <Route path='/episodes' component={Episodes}/>
          <Route path='/episode/:id' component={EpisodeDetails} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
