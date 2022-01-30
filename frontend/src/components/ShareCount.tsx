import { OperationTypeWithCommission } from '@tinkoff/invest-openapi-js-sdk';
import React, { useState, useEffect } from 'react';

interface IShareCountProps { 
    value: number|undefined; 
    operation: OperationTypeWithCommission|undefined;
}

function ShareCount(props: IShareCountProps): JSX.Element {
    const {value, operation} = props; 
    if (!value) return <span />;
    let displayValue, cssClass;
    if (operation=="Sell") 
    {
        displayValue = "-" + value;
        cssClass = " negative";
    } else {
        displayValue = "+" + value;
        cssClass = " positive";
    }
    
    return <span className={`count ${cssClass}`}>{displayValue}</span>;
}

export default ShareCount;