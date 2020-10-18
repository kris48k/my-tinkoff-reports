import React, { useState, useEffect } from 'react';
import PortfolioTable from '../components/PortfolioTable';
import Price from '../components/Price';


function StocksRubPage(props) {
    
    const {data, currencyBalance, currency} = props;
    
    if (!data || !data.length) return (
        <div>
            "No data"
        </div>
    );
    console.log("StocksRubPage",props);
    const shorts = data.filter(e => e.balance < 0);
    const longs = data.filter(e => e.balance > 0);

  return (
    <div class="stocks-rub-page">
        <div className="currency-balance">
            <h6>Currency Balance: <Price value={currencyBalance} currency={currency} /></h6>
        </div>
        
        { shorts && shorts.length>0 &&
            (
                <div>
                    <h6>Short</h6>
                    <PortfolioTable items={shorts} />
                </div>
            )
        }
        { longs && longs.length>0 &&
            (
                <div>
                    <h6>Longs</h6>
                    <PortfolioTable items={longs} />
                </div>
            )
        }
    </div>
  );

}

export default StocksRubPage;
