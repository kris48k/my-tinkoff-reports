import React, { useState, useEffect } from 'react';

function OperationDate(props: { value: string; }) {
    const {value} = props; 
    if (!value) return "";
    
    return <span className="date">{(new Date(value)).toUTCString()}</span>;
}

export default OperationDate;