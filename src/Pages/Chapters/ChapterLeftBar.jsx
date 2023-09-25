import React from 'react'
import "../../styles/chapter.scss"
import langHindi from "../../Assets/icons/langHindi.png"
import langchinese from "../../Assets/icons/langchinese.png"
import langenglish from "../../Assets/icons/langenglish.png"
// import { Link } from 'react-router-dom'

export default function ChapterLeftBar() {
    return (
        <div className='chapterLeftBar'>
            <img alt="" src={langHindi} />
            <img alt="" src={langenglish} />
            <img alt="" src={langchinese} />
        </div>
    )
}
