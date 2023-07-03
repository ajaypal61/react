import React, { useReducer } from "react";
import reducer from "./Reducer";


const initialValue = 0;

const UseReduce = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <div>
                <h1>{state}</h1>
                <button onClick={() => dispatch({ type: "INC" })}>+</button>
                <button onClick={() => dispatch({ type: "DEC" })}>-</button>
            </div>
        </>
    )
}

export default UseReduce;