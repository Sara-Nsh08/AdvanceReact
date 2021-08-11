import React, { useState, useEffect } from 'react'

function UseEffectBasics() {
    const [value, setValue]= useState(0);
    useEffect(() => {
        console.log('call useEffect');
        document.title = `New Messages(${value})`;

    });
    console.log('render component');
    return (
        <>
            <div>
                <h1>{value}</h1>
                <button className='btn' onClick={()=>setValue(value+1)}>Click</button>
            </div>
        </>
    )
}
export default UseEffectBasics
