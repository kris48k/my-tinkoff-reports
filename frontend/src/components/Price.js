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
    return <div className="price">{value.toFixed(2) + " " + curr}</div>;
}

export default Price;