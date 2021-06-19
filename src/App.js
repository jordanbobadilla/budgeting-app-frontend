
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Index from './pages/Index';
import { apiURL } from './util/apiURL';
const API = apiURL()

const App = () => {
  const [transactions, setTransactions] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/transactions`)
      setTransactions(res.data)
      debugger
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/transactions"}>
          <Index transactions={transactions}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
