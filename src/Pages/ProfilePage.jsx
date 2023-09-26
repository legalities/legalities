import React from 'react'
import Header from "../Components/Header.jsx"
import Navbar from '../Components/Navbar.jsx'

export default function ProfilePage() {
    return (
        <div>
            <Header bg="#DFEDFD" txtcolor="#67A9F6" headertitle="Hey User name" />
            <p style={{ textAlign: "center" }}>Profile Page</p>
            <Navbar />
        </div>
    )
}
