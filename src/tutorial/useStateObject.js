import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name: "Thanos",
        age: 42,
        message: "What did it cost?",

    });
    const changeMesaage = () => {
        setPerson({ ...person, message: "Everything!!" });
    }
    return (
        <div>
            <>
                <h3>{person.name}</h3>
                <h3>{person.age}</h3>
                <h3>{person.message}</h3>
                <button className="btn" onClick={changeMesaage}>Change my message</button>

            </>
        </div>
    )
}
export default UseStateObject;
