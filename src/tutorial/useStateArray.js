import React from 'react';
import {data} from "./Data";
function UseStateArray() {
    const [people, setPeople]=React.useState(data)
    return (
        <>
        {
        people.map((person) => {
            console.log(person);
            return("I am leaning about Marvel")
        }
    )}
        
        </>
    )
}

export default UseStateArray
