import React, { useState, useEffect } from 'react';
import DataProvider from '../../DataProvider';
import AssetHistoryTable from './AssetHistoryTable';

function AssetPage(props) {
    
    console.log("onAsset page", props, arguments)
    const {data, currencyBalance, currency, match} = props;
    const ticker = match.params.ticker;
    const [allStocks, setAllStocks] = useState(null);
    const [history, setHistory] = useState(null);
    async function loadData(){
        const allStocks = await DataProvider.fetchAllStocks();
        const figi = allStocks[ticker].figi;
        const history = await DataProvider.fetchHistory(figi);
        setHistory(history);
    }
    
    useEffect(() => {
        window.feather.replace();// icons
        loadData();
    }, [ticker]);
    
    if (!history || !history.operations) return (<div>No Data found</div>)
    const items = history.operations.filter(item => item.payment!=0);

  return (
    
    <div class="asset-page">
        <h3>{match.params.ticker}</h3>
        <AssetHistoryTable items={items} />
    </div>
  );

}

export default AssetPage;
