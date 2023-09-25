import React from 'react'
// import "../../styles/chapter.scss"
import "../styles/chapter.scss"

export default function ChapterHeader(props) {
  return (
    <div className='chapterHeader' style={{
      background: props.bg,
      color: props.txtcolor
    }}>
      <p>{props.headertitle}</p>
    </div>
  )
}
