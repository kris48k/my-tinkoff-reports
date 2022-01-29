import React, { useState, useEffect } from 'react';

function ShareCount(props: { value: number; operation: string; }) {
    const {value, operation} = props; 
    if (!value) return "";
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