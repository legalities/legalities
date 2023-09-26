import React, { useState } from 'react'
import "../styles/AIAssistantDialogueBox.scss"
import owlMascot from "../Assets/owlMascot.png"
import backIcon from "../Assets/icons/backIcon.png"


export default function AIAssistantDialogueBox({ bottom, left }) {

    const [assistantOutput, setassistantOutput] = useState("Hey, Funny face ! I Am Always Here To Help You")
    const [expanded, setexpanded] = useState(false)


    function chatBotResponse(userInput) {

        userInput = userInput.toLowerCase();

        const responses = [
            { pattern: "hi", response: "Hieie 😎 !! How are you, do you know ? There are total 6 Fundamental rights." },
            { pattern: /hello/i, response: "Hellllo !! how is the day ?" },
            { pattern: /what is (.*)/i, response: `Sorry I don't know what it :( I am still learning 😃.` },
            { pattern: /how (.*)/i, response: "I am still learning, but every 'how' has an answer." },
            // Add more patterns and responses here
        ];

        for (const { pattern, response } of responses) {
            if (userInput.match(pattern)) {
                console.log(userInput.replace(pattern, response))
                setassistantOutput(userInput.replace(pattern, response));
                return
            }
        }
        
        console.log("x")
        setassistantOutput("I'm not sure how to respond to that.");
    }


    // async function replyChat(text) {
    //     // await fetch call 
    //     let Set = false
    //     setassistantOutput("Let Me Think...")

    //     // console.log(text)
    //     // set output
    //     if ((text === 'hello' || text === 'Hello') || (text === 'hi' || text === 'Hi')) {
    //         setassistantOutput("Hey !! How are you, do you know there are total 6 Fundamental rights")
    //         Set = true
    //     }

    //     if (!Set) {
    //         setTimeout(() => {
    //             setassistantOutput("I am still learning sorry :)")
    //         }, 500)
    //     }
    // }

    function expandOrCollapse(backgroundClick) {
        if (!expanded && backgroundClick) {
            document.getElementById('AIAssistantDialogueBox').style.transform = "scale(1)"
            setexpanded(true)
            return
        }
        if (expanded && !backgroundClick) {
            document.getElementById('AIAssistantDialogueBox').style.transform = "scale(0.4)"
            setexpanded(false)
            return
        }
    }


    return (
        <div id='AIAssistantDialogueBox'
            onClick={() => expandOrCollapse(true)}
            style={{
                left: left ? "max(5vw, 5%)" : "auto",
                bottom: bottom ? "max(12vh, 12%)" : "auto",
            }}>

            <div id='collapseAiAssistantBox'
                onClick={() => expandOrCollapse(false)}>
                <p>X</p>
            </div>
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
                        // replyChat(e.target.value)
                        chatBotResponse(e.target.value)
                    }
                    else return
                }} />
                <img height={40} width={44} src={backIcon}
                    onClick={() => {
                        let text = document.getElementById('assistanntinp').value
                        // replyChat(text)
                        chatBotResponse(text)
                    }}
                    alt="" className='backIcon' />
            </div>
        </div>
    )
}
