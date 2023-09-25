import React, { useState } from 'react'
import "../styles/AIAssistantDialogueBox.scss"
import owlMascot from "../Assets/owlMascot.png"
import backIcon from "../Assets/icons/backIcon.png"

export default function AIAssistantDialogueBox({ bottom, left }) {

    const [assistantOutput, setassistantOutput] = useState("Hey, Funny face ! I Am Always Here To Help You")

    async function replyChat(text) {
        // await fetch call 
        let Set = false
        setassistantOutput("Let Me Think...")

        // console.log(text)
        // set output
        // if (text === 'hello' || text === 'hello', text === 'hi', text === 'Hi') {
        // }
        
        if (!Set) {
            setTimeout(() => {
                setassistantOutput("Hey !! How are you, do you know there are total 6 Fundamental rights")
                // setassistantOutput(text)
            }, 500)
        }
    }


    return (
        <div id='AIAssistantDialogueBox' style={{
            left: left ? "max(5vw, 5%)" : "auto",
            bottom: bottom ? "max(12vh, 12%)" : "auto"
        }}>
            <div className='output'>
                <div className='mascot'>
                    <img src={owlMascot} alt="" />
                </div>
                <div className='textoutput'>
                    <p>{assistantOutput}</p>
                </div>
            </div>
            <div className='input'>
                <input type='text' id='assistanntinp' onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        replyChat(e.target.value)
                    }
                    else return
                }} />
                <img height={40} width={44} src={backIcon} alt="" className='backIcon' />
            </div>
        </div>
    )
}
