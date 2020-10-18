import React, { useState, useEffect } from 'react';
import PortfolioTable from '../components/PortfolioTable';



function StocksRubPage(props) {
    
    const {data} = props;
    
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
