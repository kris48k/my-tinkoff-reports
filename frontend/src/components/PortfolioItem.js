import React, { useState, useEffect } from 'react';
import Price from './Price';

function PortfolioItem(props) {
    console.log("in portfolio imte", props);
    const {ticker, balance, name, averagePositionPrice, expectedYield} = props.item || {};
    const overall = (balance*averagePositionPrice.value).toFixed(2);
    const displayName = name.substring(0,20) + (name.length > 20 ? "..." : "");
    return (
        <tr className="portfolio-item">
            <td>{ticker}</td>
            <td>{displayName}</td>
            <td className='number'><Price {...averagePositionPrice} /></td>
            <td className='number'>{balance}</td>
            <td className='number'>{overall}</td>
            <td className='number'><Price {...expectedYield} /></td>
        </tr>
    );
}

export default PortfolioItem;