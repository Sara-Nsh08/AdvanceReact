import React, { useState } from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevState)=>{ 
                return(prevState+1)

            })
            //setValue(value+1);
        }, 5000)
    }
    return (
        <>
            <section style={{ margin: '4rem,0' }}>
                <h2>A regular Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
                <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
                <button className='btn' onClick={() => setValue(0)}>Reset</button>
            </section>
            <section style={{ margin: '4rem,0' }}>
                <h2>A more Complex Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>Increase later</button>

            </section>

        </>
    )
}

export default UseStateCounter
