import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name: "Thanos",
        age: 42,
        message: "What did it cost?",
    });
    const[name, setName]= useState("tony Stark")
    const[age, setAge]= useState(32)
    const[message, setMessage]= useState("I am Iron Man")
    const changeMesaage = () => {
        setPerson({ ...person, message: "Everything!!" });
        setMessage("OKay!!");
    }
    return (
        <div>
            <>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{message}</h3>
                <button className="btn" onClick={changeMesaage}>Change my message</button>

            </>
        </div>
    )
}
export default UseStateObject;
