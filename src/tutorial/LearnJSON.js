import React from 'react';
import axios from 'axios';

function LearnJSON() {
    const handleClick=(b)=> {
        const promis=axios.post("http://localhost:3000/")
    }
    return (
        <>
            <h1>hello</h1>
            <button type="button" className='btn' onClick={handleClick}>Send User</button>
            <button type="button" className='btn' onClick={getUsers}>Get User</button>
        </>
    )
}
export default LearnJSON
