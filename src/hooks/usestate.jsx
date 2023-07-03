import React, { useState } from "react";

const UseState = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("sorry")
        }
    }

    return (
        <>
            <div>
                <h1>{num}</h1>
                <div>
                    <button onClick={incNum}>IncNum</button>
                    <button onClick={decNum}>decNum</button>
                </div>
            </div>
        </>
    )
}

export default UseState;