import React, { useState, useEffect } from 'react';
import Price from '../../components/Price';
import ShareCount from '../../components/ShareCount';
import OperationDate from '../../components/OperationDate';
import AssetHistoryTableItem from './AssetHistoryTableItem';

function AssetHistoryTable(props) {
    const {items} = props;

    return (
        <div class="table-responsive">
            <table class="table table-striped table-sm portfolio-table">
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
                    <td colSpan="4">Overall</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default AssetHistoryTable;