import { Currency, MoneyAmount } from '@tinkoff/invest-openapi-js-sdk';
import React, { useState, useEffect } from 'react';

type IPriceProps = MoneyAmount | {
    currency? : Currency | undefined,
    value? : number | undefined
};

function Price(props: IPriceProps): JSX.Element {
    const {value, currency} = props || {}; 
    if (!value) return <span/>;
    let curr = "?";
    if (currency === "RUB") {
        curr = "₽";
    } else if (currency === "USD") {
        curr = "$";
    } else if (currency === "EUR") {
        curr = "€";
    }
    const valueDisplay = Number(value.toFixed(2)).toLocaleString();
    return <span className="price">{valueDisplay + " " + curr}</span>;
}

export default Price;