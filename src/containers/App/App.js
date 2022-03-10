import { Route, Switch } from 'react-router-dom';
import DataContext from '../../contexts/DataContext';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Characters from '../../pages/Characters/Characters';
import Locations from '../../pages/Locations/Locations';
import Episodes from '../../pages/Episodes/Episodes';
import CharacterDetails from '../../pages/CharacterDetails/CharacterDetails';
import './App.css';
import LocationDetails from '../../pages/LocationDetails/LocationDetails';
import NotFound from '../../pages/NotFound/NotFound';
import About from '../../pages/About/About';
import EpisodeDetails from '../../pages/EpisodeDetails/EpisodeDetails';

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={''}>
        <Header />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/characters/'component={Characters}/>
            <Route path='/character/:id' component={CharacterDetails}/>
            <Route path='/locations' component={Locations}/>
            <Route path='/location/:id' component={LocationDetails}/>
            <Route path='/episodes' component={Episodes}/>
            <Route path='/episode/:id' component={EpisodeDetails}/>
            <Route path='/about' component={About}/>
            <Route path='*' component={NotFound}/>
          </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
