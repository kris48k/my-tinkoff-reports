import React, { useState, useEffect } from 'react';
import Price from '../../components/Price';
import ShareCount from '../../components/ShareCount';
import OperationDate from '../../components/OperationDate';

function AssetHistoryTableItem(props) {
    const {date, operationType, currency, price, payment, quantityExecuted} = props;

    return (
        <tr className="portfolio-item">
            <td><OperationDate value={date}/></td>
            <td>{operationType}</td>
            <td><ShareCount value={quantityExecuted} operation={operationType}/></td>
            <td className='number'><Price {...{value: price, currency: currency}}/></td>
            <td className='number'><Price {...{value: payment, currency: currency}}/></td>
        </tr>
    );
}

export default AssetHistoryTableItem;