import React from 'react'
import classes from './Footer.module.css'
function Footer(props) {
    const handlePost = ()=>{
        console.log("click")
        props.handlePost()
    }
    return (
        <div className={classes.footer}>
            <select>
                <option>Only me</option>
            </select>
            <button onClick={handlePost}>Post</button>
        </div>
    )
}

export default Footer
