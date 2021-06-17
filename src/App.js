
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <main className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
      </Switch>
    </main>
  );
}

export default App;
