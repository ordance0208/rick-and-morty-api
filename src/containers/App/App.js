import { Route, Switch } from 'react-router-dom';
import Container from '../../auxillary/Container/Container';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
