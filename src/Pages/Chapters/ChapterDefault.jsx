import React from 'react'
import "../../styles/chapter.scss"
import Navbar from "../../Components/Navbar.jsx"
import Header from "../../Components/Header.jsx"
import ChapterLeftBar from "./ChapterLeftBar.jsx"
import train from "../../Assets/graphy/train.webp"
import { useParams } from 'react-router-dom'
import ChapterQuestionInterface from "../../Components/ChapterQuestionInterface.jsx"
import { UserProgress } from '../../Store'

export default function ChapterDefault() {

  const { id } = useParams()

  let chapterId = id - 1;

  // user user progress to unload main page cards
  UserProgress(id)

  return (
    <div id='ChapterDefault' >
      <div id='chapterInterface'>
        <Header bg="#DFEDFD" txtcolor="#67A9F6" headertitle="Right to education" />
        <ChapterLeftBar />
      </div>
      <div>
        <ChapterQuestionInterface chapterId={chapterId} />
      </div>
      <div className="train-container">
        <img alt="" src={train} className='chapter-pg-train' />
      </div>
      <Navbar />
    </div>
  )
}
