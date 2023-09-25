import React, { useState } from 'react'
import "../styles/chapter.scss"
import classRoom from "../Assets/images/classroom.png"
import questiondata from "../Data/Questions.json"
import { useNavigate } from 'react-router-dom';


export default function ChapterQuestionInterface(props) {

    const navigate = useNavigate()

    let chapterId = props.chapterId-1
    const [currQuestion, setCuestionNum] = useState(0)
    // console.log(questiondata)


    let currChapterQiestions = questiondata.chapters[chapterId].questions

    function getchapterOptions() {
        let result = questiondata.chapters[chapterId].questions[currQuestion].options
        return result
    }

    function options() {
        let resultcomponent = []
        let chapteroptions = getchapterOptions()

        chapteroptions.forEach((option) => {
            resultcomponent.push(<div onClick={() => {
                if(currQuestion >= questiondata.chapters[chapterId].totalQuestions -1) {
                    console.log(questiondata.chapters[chapterId].totalQuestions)
                    navigate(`/result/${chapterId}`)
                }
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
                    {/* <h3>{questiondata.chapters[chapterId].questions[currQuestion]}</h3> */}
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
