import React, { useState, useEffect } from 'react';

interface IOperationDateProps{
    value: string|undefined;
}

function OperationDate(props: IOperationDateProps): JSX.Element {
    const {value} = props; 
    if (!value) return <span/>;
    
    return <span className="date">{(new Date(value)).toUTCString()}</span>;
}

export default OperationDate;