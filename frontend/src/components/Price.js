import React, { useState, useEffect } from 'react';

function Price(props) {
    const {value, currency} = props; 
    let curr = "?";
    if (currency == "RUB") {
        curr = "₽";
    } else if (currency == "USD") {
        curr = "$";
    } else if (currency == "EUR") {
        curr = "€";
    }
    const valueDisplay = Number(value.toFixed(2)).toLocaleString();
    return <div className="price">{valueDisplay + " " + curr}</div>;
}

export default Price;