import React, { useState, useReducer } from 'react'
import Modal from './modal';
import {data} from '../Data';

function Index() {
    const [name, setName] = useState('')
    const [people, setPeople] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            {showModal && <modal />}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit">AddUser</button>
            </form>
        </>
    )
}
export default Index
