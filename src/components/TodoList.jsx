import React from "react";


const TodoList = (props) => {

    return (
        <>
            <div>
                <p onClick={() => {
                    props.onSelect(props.id);
                }}>+</p>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;