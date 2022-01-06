import React from 'react'
import classes from './Header.module.css'
function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.tab}>
                <div>
                <a >Compose Post</a>
                <a>Photo/video Album</a>
                <a>Live Video</a>
                </div>
                <span>&#10006;</span>
            </div>
           
        </div>
    )
}

export default Header
