import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioTable(props) {
    const {items} = props;
    if (!props.items || !props.items.length) return (
        <div>no data</div>
    );
    
    return (
      <div class="table-responsive">
        <table class="table table-striped table-sm">
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
          </tbody>
        </table>
      </div>
    );
}

export default PortfolioTable;