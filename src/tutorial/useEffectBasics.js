import React, { useState, useEffect } from 'react'

function UseEffectBasics() {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        if (value > 1) {                  //react hooks cannot be called inside conditional statements
            document.title = `New Messages(${value})`;//but conditional statements can be called inside hooks
        }

    });
    console.log('render component');
    return (
        <>
            <div>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value + 1)}>Click</button>
            </div>
        </>
    )
}
export default UseEffectBasics
