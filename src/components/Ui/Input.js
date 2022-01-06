import React from 'react'

function Input(props) {
    return (
        
            <input onChange={props.onChange} value={props.value} {...props.input}  />
       
    )
}

export default Input
