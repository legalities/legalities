import React, { useState } from 'react'
import "../styles/chapter.scss"
import classRoom from "../Assets/images/classroom.png"
import questiondata from "../Data/Questions.json"
import { useNavigate } from 'react-router-dom';


export default function ChapterQuestionInterface(props) {

    // console.log(props)
    // chaoter states
    // 0 : show video tecture
    // 1 : take Quiz
    // 2 : SHow Result and option to move to next chapter or question answer session
    // 3 : Question answer session with Ai
    const [chapterState, setChapterState] = useState(0)

    const navigate = useNavigate()

    let chapterId = props.chapterId
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
                if (currQuestion >= questiondata.chapters[chapterId].totalQuestions - 1) {
                    // console.log(questiondata.chapters[chapterId].totalQuestions)
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
            {
                chapterState === 0 &&
                <div className='tectureVideoCaontainer' >
                    <iframe src="https://www.youtube.com/embed/VRGZmn4-_YY?si=N6HiDlyvgw1aAs8e" className='LectureVideo' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <br />
                    <div className='chapternavigationButtonConntainer'>
                        <button onClick={() => {
                            navigate("/Landing")
                        }} className='ChangechaoterStateBtn'>Back</button>
                        <button onClick={() => {
                            setChapterState(chapterState + 1)
                        }} className='ChangechaoterStateBtn'>Next</button>
                    </div>
                </div>
            }
            {chapterState === 1 &&
                <>
                    <div className='QuizContainer'>
                        <div className='QuestionContainer'>
                            <div className='question'>
                                <h3>{currChapterQiestions[currQuestion].question}</h3>
                            </div>
                            <div className='options'>
                                {options()}
                            </div>

                        </div>
                        <div className='questionsImg'>
                            <img alt="" src={classRoom} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
