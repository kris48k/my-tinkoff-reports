import React, { useState, useEffect } from 'react';

function Price(props: { value: number; currency: string }) {
    const {value, currency} = props; 
    if (!value) return "";
    let curr = "?";
    if (currency == "RUB") {
        curr = "₽";
    } else if (currency == "USD") {
        curr = "$";
    } else if (currency == "EUR") {
        curr = "€";
    }
    const valueDisplay = Number(value.toFixed(2)).toLocaleString();
    return <span className="price">{valueDisplay + " " + curr}</span>;
}

export default Price;