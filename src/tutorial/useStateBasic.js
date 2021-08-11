import React, { useState } from 'react';
//some basic rules of hooks
//component
//must be in the component body


function UseStateBasic() {
    const [Day, setDay] = useState("Today is a rainy day!!");
    const handleClick = () => {
        if (Day === "Today is a rainy day!!") {
            setDay = ("Today is beautiful and sunny day!!")
        }
        else { setDay = ("Today is a rainy day!!") }
    
};
return (
    <div>
        <>
            <h1>{Day}</h1>
            <button type="button" className="btn" onClick={handleClick}>
                change my day</button>
        </>
    </div>
)
}

export default UseStateBasic
