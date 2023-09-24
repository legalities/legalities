import React from 'react'
import "../styles/navbar.scss"

export default function Navbar() {
    return (
        <div id="navbar">
            <p>
                hello, i am not nested
            </p>
            <div id='newparent'>
                <div id="new">
                    I am nested :)
                </div>
            </div>

        </div>
    )
}
