import React, { useState } from 'react'
import "../styles/chapter.scss"
import classRoom from "../Assets/images/classroom.png"
import questiondata from "../Data/Questions.json"

export default function ChapterQuestionInterface(props) {

    let chapid = props.chapterId-1
    const [currQuestion, setCuestionNum] = useState(0)
    // console.log(questiondata)


    let currChapterQiestions = questiondata.chapters[chapid].questions

    function getchapterOptions() {
        let result = questiondata.chapters[chapid].questions[currQuestion].options
        return result
    }

    function options() {
        let resultcomponent = []
        let chapteroptions = getchapterOptions()

        chapteroptions.forEach((option) => {
            resultcomponent.push(<div onClick={() => {
                setCuestionNum(currQuestion + 1)
            }} className='option'>
                {option}
            </div>)
        })

        return resultcomponent
    }

    return (
        <div id="ChapterQuestionInterface">
            <div className='QuestionContainer'>
                <div className='question'>
                    <h3>{currChapterQiestions[currQuestion].question}</h3>
                    {/* <h3>{questiondata.chapters[chapid].questions[currQuestion]}</h3> */}
                </div>
                <div className='options'>
                    {options()}
                </div>

            </div>
            <div className='questionsImg'>
                <img alt="" src={classRoom} />
            </div>
        </div>
    )
}
