import React, { useState, useEffect } from 'react';
import Price from '../../components/Price';
import {Link} from "react-router-dom";

function PortfolioTableItem(props) {
    const {ticker, balance, name, averagePositionPrice, expectedYield, overall} = props.item || {};
    const displayName = name;//.substring(0,20) + (name.length > 20 ? "..." : "");

    return (
        <tr className="portfolio-item">
            <td>
                <Link to={`/asset/${ticker}`} className="nav-link active portfolio-item--ticker-link">
                    {ticker}
                </Link>
            </td>
            <td>{displayName}</td>
            <td className='number'><Price {...averagePositionPrice} /></td>
            <td className='number'>{balance}</td>
            <td className='number'><Price {...overall} /></td>
            <td className='number'><Price {...expectedYield} /></td>
        </tr>
    );
}

export default PortfolioTableItem;