import { Operation } from '@tinkoff/invest-openapi-js-sdk';
import React, { useState, useEffect } from 'react';
import AssetHistoryTableItem from './AssetHistoryTableItem';

function AssetHistoryTable(props: { items: Array<Operation>; }) {
    const {items} = props;

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm portfolio-table">
            <thead>
                <tr>
                <th>Data</th>
                <th>Operation Type</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => <AssetHistoryTableItem {...item} />)}
                <tr className="portfolio-item portfolio-item-summary">
                    <td colSpan={4}>Overall</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default AssetHistoryTable;