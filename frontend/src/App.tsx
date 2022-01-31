import React, { useState, useEffect } from 'react';
import './css/App.css';
import './css/Bootsrtap-template.css';
import DataProvider, { ICurrencyBalance, IPortfolio } from './DataProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNavigation from './components/LeftNavigation';
import PortfolioPage from './pages/portfolio/Portfolio.Page';
import AssetPage from './pages/asset/Asset.Page';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [portfolio, setPortfolio] = useState<IPortfolio>();
  const [accounts, setAccounts] = useState(null);
  const [currenciesBalance, setCurrenciesBalance] = useState<ICurrencyBalance>();
  const [allStocks, setAllStocks] = useState(null);

  async function loadData(){
    const portfolio = await DataProvider.fetchPortfoloio();
    const accounts = await DataProvider.fetchAccount();
    const currenciesBalance = await DataProvider.fetchCurrenciesBalance();
    const allStocks = await DataProvider.fetchAllStocks();
    setCurrenciesBalance(currenciesBalance);
    setPortfolio(portfolio);
    setAccounts(accounts);
    setAllStocks(allStocks);
  }

  useEffect(() => {
    // @ts-expect-error
    window.feather.replace();// icons
    loadData();
  });

  if (!portfolio) return (<div>No data</div>);

  return (
    <div className="App">
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 app-title" href="#">Мои Тинькофф Инвестиции</a>
      </nav>

      <div className="container-fluid app-content-wrapper">
          <Router>
            <LeftNavigation />
            <main role="main" className="app-content col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route path="/stocks/rus">
                <PortfolioPage data={portfolio.stocks.rus} currencyBalance={currenciesBalance?.RUB} currency={"RUB"} />
              </Route>
              <Route path="/stocks/usd">
                <PortfolioPage data={portfolio.stocks.usd} currencyBalance={currenciesBalance?.USD} currency={"USD"} />
              </Route>
              <Route path="/stocks/eur">
                <PortfolioPage data={portfolio.stocks.eur} currencyBalance={currenciesBalance?.EUR} currency={"EUR"} />
              </Route>
              <Route path="/etfs">
                <PortfolioPage data={portfolio.etfs} currencyBalance={currenciesBalance?.RUB} currency={"EUR"} />
              </Route>
              <Route path="/bonds">
                <PortfolioPage data={portfolio.bonds} currencyBalance={currenciesBalance?.RUB} currency={"EUR"} />
              </Route>
              <Route path="/asset/:ticker" component={AssetPage} />
            </Switch>  
            </main>
          </Router>
      </div>
    </div>
  );
}

export default App;
