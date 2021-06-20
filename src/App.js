
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Index from './pages/Index';
import New from './pages/New';
import NotFound from './pages/NotFound';
import Show from './pages/Show';
import { apiURL } from './util/apiURL';
const API = apiURL()

const App = () => {
  const [transactions, setTransactions] = useState([])

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction)
      setTransactions(prevTransaction => [...prevTransaction, res.data])
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/transactions`)
      setTransactions(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [transactions])

  return (
    <main className="App">
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/transactions"}>
          <Index transactions={transactions}/>
        </Route>
        <Route exact path={"/transactions/new"}>
          <New addTransaction={addTransaction}/>
        </Route>
        <Route exact path={"/transactions/:index"}>
          <Show addTransaction={addTransaction}/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;