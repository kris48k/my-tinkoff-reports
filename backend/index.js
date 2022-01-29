import OpenAPI from '@tinkoff/invest-openapi-js-sdk';
import {config} from 'dotenv';
import express from 'express';

config();

const app = express();
const port = process.env.SERVER_PORT;

const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const sandboxApiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox/';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';

const secretToken = process.env.TINKOFF_API_TOKEN; 

const tinkoffApi = new OpenAPI({ apiURL: apiURL, secretToken: secretToken, socketURL });

app.get('/', (req, res) => {
    res.send('OK!');
});

app.get('/api/portfolio', async (req, res) => {
    try {
        const portfolio = await tinkoffApi.portfolio();
        res.send(portfolio);
    } catch (ex) {
        console.log("Exception in /portfolio", ex);
    } 
});

app.get('/api/accounts', async (req, res) => {
    try {
        const accounts = await tinkoffApi.accounts();
        res.send(accounts);
    } catch (ex) {
        console.log("Exception in /accounts", ex);
    } 
});

app.get('/api/currenciesBalance', async (req, res) => {
    try {
        const currencies = await tinkoffApi.portfolioCurrencies();
        res.send(currencies);
    } catch (ex) {
        console.log("Exception in /currencies", ex);
    } 
});

app.get('/api/allstocks', async (req, res) => {
    try {
        const stocks = await tinkoffApi.stocks();
        res.send(stocks);
    } catch (ex) {
        console.log("Exception in /stocks", ex);
    } 
});

app.get('/api/history', async (req, res) => {
    try {
        const figi = req.query.figi;
        const history = await tinkoffApi.operations({from: '2019-01-01', to: (new Date()).toISOString(), figi});
        res.send(history);
    } catch (ex) {
        console.log("Exception in /history", ex);
    } 
})

app.listen(port, () => {
    console.log(`Tinkoff Backend listening at http://localhost:${port}`)
});
