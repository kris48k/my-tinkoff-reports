import React, { useState, useEffect } from 'react';
import './css/App.css';
import './css/Bootsrtap-template.css';
import DataProvider from './DataProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import LeftNavigation from './components/LeftNavigation';
import PortfolioTable from './components/PortfolioTable';
import StocksRubPage from './pages/Stocks.Rub.Page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [currenciesBalance, setCurrenciesBalance] = useState(null);

   async function loadData(){
    const portfolio = await DataProvider.fetchPortfoloio();
    const accounts = await DataProvider.fetchAccount();
    const currenciesBalance = await DataProvider.fetchCurrenciesBalance();
    setCurrenciesBalance(currenciesBalance);
    setPortfolio(portfolio);
    setAccounts(accounts);

    console.log(accounts, currenciesBalance);
  }

  useEffect(() => {
    window.feather.replace();// icons
    loadData();
  });

  if (!portfolio) return (<div>No data</div>);

  return (
    <div className="App">
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Мои Тинькофф Инвестиции</a>
      </nav>

      <div class="container-fluid">
        <div class="row">
          <Router>
            <LeftNavigation />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route path="/stocks/rus">
                <StocksRubPage data={portfolio.stocks.rus} currencyBalance={currenciesBalance.RUB} currency={"RUB"} />
              </Route>
              <Route path="/stocks/usd">
                <StocksRubPage data={portfolio.stocks.usd} currencyBalance={currenciesBalance.USD} currency={"USD"} />
              </Route>
              <Route path="/stocks/eur">
                <StocksRubPage data={portfolio.stocks.eur} currencyBalance={currenciesBalance.EUR} currency={"EUR"} />
              </Route>
            </Switch>
              
            </main>
          </Router>
        </div>
      </div>
    
    </div>
  );
}

export default App;
