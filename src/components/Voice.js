
import {AudioOutlined} from "@ant-design/icons"
import React, {useState, useEffect} from "react"
import axios from "axios"
import {Button, Input} from "antd"
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import Speech from "speak-tts";

const Voice = () => {
    const[isRecording, setIsRecording] = useState(false)

    const{
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();

    const useEffect(() => {
        
    }, [])

    const recordingClickHandler = () => {
        if (isRecording) {
            setIsRecording(false);
            SpeechRecognition.stop
        } else {
            setIsRecording(true)
            SpeechRecognition.startListening()
        }
    }

    return (
        <div style = {{position: "fixed", bottom: 100}}>
            <Button
                type = "primary"
                icon = {<AudioOutlined/>}
                size = "large"
                danger = {isRecording}   //turn button to color red
                style = {{ marginLeft: "5px"}}
            >
            {isRecording ? "recording..." : "click to record"}
            </Button>
        </div>
        
    )
}

export default Voice