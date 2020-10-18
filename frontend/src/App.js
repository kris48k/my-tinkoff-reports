import React, { useState, useEffect } from 'react';
import './css/App.css';
import './css/Bootsrtap-template.css';
import DataProvider from './DataProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import LeftNavigation from './components/LeftNavigation';
import PortfolioTable from './components/PortfolioTable';
import StocksRubPage from './pages/Stocks.Rub.Page';



function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [accounts, setAccounts] = useState(null);

   async function loadData(){
    const portfolio = await DataProvider.fetchPortfoloio();
    const accounts = await DataProvider.fetchAccount();
    setPortfolio(portfolio);
    setAccounts(accounts);
    console.log(accounts);
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
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div class="container-fluid">
        <div class="row">

            <LeftNavigation />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <StocksRubPage data={portfolio.stocks.rus} />
            </main>
        </div>
      </div>
    
    </div>
  );
}

export default App;
