import React from 'react';

export default function Todo(props) {
    console.log(props)
    return (
        <div>
            <p>{props.item}</p>
            <button onClick={()=> props.deleteFn(props.itemIndex)}>Delete</button>
            <hr />
        </div> 
    )
}