import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import Price from './Price';

function PortfolioTable(props) {
    const {items} = props;
    if (!props.items || !props.items.length) return (
        <div>no data</div>
    );
    const currency = props.items[0].overall.currency;
    let sumOverall=0, sumEarned=0;
    props.items.forEach(e => {
      sumOverall += e.overall.value;
      sumEarned += e.expectedYield.value;
    })
    
    return (
      <div class="table-responsive">
        <table class="table table-striped table-sm portfolio-table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Title</th>
              <th>My Avg Price</th>
              <th>Count</th>
              <th>Overall</th>
              <th>Earned</th>
            </tr>
          </thead>
          <tbody>
              {items.map(item => <PortfolioItem key={item.ticker} item={item}/>)}
              <tr className="portfolio-item portfolio-item-summary">
                <td colSpan="4">Overall</td>
                <td className='number'><Price value={sumOverall} currency={currency} /></td>
                <td className='number'><Price value={sumEarned} currency={currency} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default PortfolioTable;