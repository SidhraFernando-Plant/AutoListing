import React from 'react'
import { useState } from 'react';

export default function Feature(props) {
    const [input, setInput] = useState("");
    
    const inputChange = (e) => {
        setInput(e.target.value);
        props.handleChange(e.target.value, props.idx);
    }

    return (
        <div className="mb-1">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" onChange={inputChange}></textarea>
        </div>
    )
}
