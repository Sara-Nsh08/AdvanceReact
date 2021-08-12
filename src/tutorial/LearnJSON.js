import React from 'react';
import axios from 'axios';

function LearnJSON() {
    const handleClick = (b) => {
        const promis = axios.post("http://localhost:4000/users", { //setting the port code
            name: "Sara"
        }, {
            headers: {
                ['content-type']: 'application/json' //setting the server type
            }
        })
        promis.then(response => {
            console.log(response)  //console loging response from server
        })
        promis.catch(error => {
            console.error(Error)    //console logging error from server if any
        })
        let c=b;
        console.log(c);
    }

    return (
        <>
            <h1>hello we are learning json</h1>
            <button type="button" className='btn' onClick={handleClick}>Post User</button>
            {/*<button type="button" className='btn' onClick={getUsers}>Get User</button>*/}
        </>
    )
}
export default LearnJSON
