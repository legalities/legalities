import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/navbar.scss"

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="navlinks">
                <Link to='#'><div className="navlink"></div></Link>
                <Link to='#'><div className="navlink"></div></Link>
                <Link to='#'><div className="navlink"></div></Link>
            </div>
        </div>
    )
}
