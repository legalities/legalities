import React from 'react'
import Header from '../Components/Header.jsx'
import Navbar from '../Components/Navbar.jsx'
import ChapterLeftBar from '../Pages/Chapters/ChapterLeftBar.jsx'
import train from "../Assets/graphy/train.webp"
import image from "../Assets/images/whatAreRights.png"
import { useNavigate } from 'react-router-dom'


export default function WhatIsRights() {
    const navigate = useNavigate()
    return (
        <div id='ChapterDefault' >
            <div id='chapterInterface'>
                <Header bg="#DFEDFD" txtcolor="#67A9F6" headertitle="What Are Right" />
                <ChapterLeftBar />
            </div>
            <div style={{
                width:"100vw",
                display:"flex",
                alignItems:'center',
                justifyContent:"center",
            }}>
                <img alt='' style={{
                    // width:"min(90%, 90vw)"
                    height:"80vh",
                }} src={image} onClick={() => {
                    navigate("/landing")
                }} />
            </div>
            <div className="train-container">
                <img alt="" src={train} className='chapter-pg-train' />
            </div>
            <Navbar />
        </div>
    )
}
