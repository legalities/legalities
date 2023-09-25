import React from 'react'
import "../../styles/chapter.scss"
import Navbar from "../../Components/Navbar.jsx"
import ChapterHeader from "./ChapterHeader.jsx"
import ChapterLeftBar from "./ChapterLeftBar.jsx"
import train from "../../Assets/graphy/train.webp"


export default function ChapterDefault() {
  return (
    <div id='ChapterDefault' >
        <div id='chapterInterface'>
            <ChapterHeader bg="#DFEDFD" txtcolor="#67A9F6" headertitle="Right to education" />
            <ChapterLeftBar />
        </div>
        <div className="train-container"> 
            <img src={train} className='chapter-pg-train' />
        </div>
        <Navbar />
    </div>
  )
}
