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
        console.log("Exception in /portfolio", ex);
    } 
});

app.listen(port, () => {
    console.log(`Tinkoff Backend listening at http://localhost:${port}`)
  });

!(async function run() {
    try {
        /*console.log(await api.portfolio());

        console.log("\n");

        console.log(await api.portfolioCurrencies());

        console.log("\n");*/

        /*
        await api.sandboxClear();

        const marketInstrument = await api.searchOne({ ticker: 'AAPL' });// as MarketInstrument;
        const { figi } = marketInstrument;
        console.log(await api.setCurrenciesBalance({ currency: 'USD', balance: 1000 })); // 1000$ на счет
        console.log("\n");
        console.log(await api.portfolioCurrencies());
        console.log("\n");
        console.log(await api.instrumentPortfolio({ figi })); // В портфеле ничего нет
        console.log("\n");
        console.log(await api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 })); // Покупаем AAPL
        console.log("\n");
        console.log(await api.instrumentPortfolio({ figi })); // Сделка прошла моментально
        console.log("\n");
        console.log(await api.orderbookGet({ figi })); // получаем стакан по AAPL
        console.log("\n");
        console.log(
            await api.candlesGet({
            from: '2019-08-19T18:38:33.131642+03:00',
            to: '2019-08-19T18:48:33.131642+03:00',
            figi,
            interval: '1min',
            }) // Получаем свечи за конкретный промежуток времени.
        );

        api.orderbook({ figi, depth: 10 }, (x) => {
            console.log(x.bids);
        });
        api.candle({ figi }, (x) => {
            console.log(x.h);
        });*/
    } catch (ex) {
        console.log("Exception", ex);
    }
})();