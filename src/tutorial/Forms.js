import React, { useState } from 'react'

function Forms() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello to all");
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlFor="firstName">Name :</lable>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>
                    <div className='form-control'>
                        <lable htmlFor="email">Email :</lable>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </article>
        </>
    )
}
export default Forms
