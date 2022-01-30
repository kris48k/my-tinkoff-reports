import { Operation } from '@tinkoff/invest-openapi-js-sdk';
import React, { useState, useEffect } from 'react';
import DataProvider from '../../DataProvider';
import AssetHistoryTable from './AssetHistoryTable';

interface IAssetPageProps {
  match: any;
}

function AssetPage(props: IAssetPageProps) {
    const ticker = props.match?.params?.ticker;
    const [history, setHistory] = useState<Array<Operation>>([]);
    async function loadData(){
        const allStocks = await DataProvider.fetchAllStocks();
        const figi = allStocks[ticker].figi;
        const history = await DataProvider.fetchHistory(figi);
        setHistory(history);
    }
    
    useEffect(() => {
        // @ts-expect-error
        window.feather.replace();// icons
        loadData();
    }, [ticker]);
    
    if (!history || !history.length) return (<div>No Data found</div>)

  return (
    <div className="asset-page">
        <h3>{ticker}</h3>
        <AssetHistoryTable items={history} />
    </div>
  );

}

export default AssetPage;
