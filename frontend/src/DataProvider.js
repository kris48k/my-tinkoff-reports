import axios from 'axios';
const backendURL = 'http://localhost:3001';

let portfolio_cache;
let accounts_cache;
let currenciesBalance_cache;
let allstocks_cache;

function preparePortfolio(data) {
    const portfolio = {
        stocks:{
            rus: [],
            usd: [],
            eur: []
        },
        etfs: [],
        bonds: [],
        currencies: []
    };
    for (const el of data.positions) {
        el.overall = {
            value: el.balance * el.averagePositionPrice.value,
            currency: el.averagePositionPrice.currency
        };
        if (el.instrumentType == "Stock") {
            if (el.averagePositionPrice.currency == "RUB") {
                portfolio.stocks.rus.push(el);
            } else if (el.averagePositionPrice.currency == "USD") {
                portfolio.stocks.usd.push(el);
            } else if (el.averagePositionPrice.currency == "EUR") {
                portfolio.stocks.eur.push(el);
            }
        } else if (el.instrumentType == "Bond") {
            portfolio.bonds.push(el);
        } else if (el.instrumentType == "Etf") {
            portfolio.etfs.push(el);
        }
    }
    return portfolio;
}

function prepareCurrenciesBalance(currenciesBalance){
    const balance = {};
    currenciesBalance.forEach(e => balance[e.currency] = e.balance);
    return balance;
}

function prepareAllStocks(stocks) {
    const result = {};
    for(let stock of stocks.instruments) {
        result[stock.ticker] = stock;
    }
    return result;
}


export default {
    async fetchPortfoloio(){
        if (portfolio_cache) return portfolio_cache;
        let response = await axios.get("/portfolio");

        if (response.status == 200) {
            portfolio_cache  = preparePortfolio(response.data);
            return portfolio_cache;
        } else {
            console.log("Error in DataProvider/fetchPortfoloio: " + response.status);
        }
    },

    async fetchAccount(){
        if (accounts_cache) return accounts_cache;
        let response = await axios.get("/accounts");

        if (response.status == 200) {
            accounts_cache = response.data;
            return accounts_cache;
        } else {
            console.log("Error in DataProvider/fetchAccounts: " + response.status);
        }
    },

    async fetchCurrenciesBalance(){
        if (currenciesBalance_cache) return currenciesBalance_cache;
        let response = await axios.get("/currenciesBalance");
        
        if (response.status == 200) {
            currenciesBalance_cache = prepareCurrenciesBalance(response.data.currencies);
            return currenciesBalance_cache;
        } else {
            console.log("Error in DataProvider/fetchCurrencies: " + response.status);
        }
    },

    async fetchAllStocks(){
        if (allstocks_cache) return allstocks_cache;
        let response = await axios.get("/allstocks");
        
        if (response.status == 200) {
            allstocks_cache = prepareAllStocks(response.data);
            return allstocks_cache;
        } else {
            console.log("Error in DataProvider/fetchAllStocks: " + response.status);
        }
    },

    async fetchHistory(figi){
        let response = await axios.get("/history", {
            params: { 
                figi
            }
        });
        
        if (response.status == 200) {
            return response.data.operations.filter(item => item.payment!=0);
        } else {
            console.log("Error in DataProvider/history: " + response.status);
        }
    }
}