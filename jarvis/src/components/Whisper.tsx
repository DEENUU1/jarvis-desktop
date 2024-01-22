'use client'

import { useWhisper } from '@chengsokdara/use-whisper'
import { GrMicrophone } from "react-icons/gr";
import { HiMicrophone } from "react-icons/hi";
import {Button} from "@nextui-org/react";
import {useEffect} from "react";


interface RecorderProps {
    onTranscriptUpdate: (transcript: string) => void;
}

export default function Recorder({onTranscriptUpdate}: RecorderProps){
    const {
        recording,
        speaking,
        transcribing,
        transcript,
        pauseRecording,
        startRecording,
        stopRecording,
    } = useWhisper({
        apiKey: process.env.OPENAI_API_TOKEN,
        removeSilence: true, // lower costs
        streaming: false, // this feature send audio every 1 seconds and It's expensive to use real time transcription
        nonStop: true,
        stopTimeout: 3000, // 3 seconds timeout, after 3 seconds of silence the audio will be sent
    })

    const handleToggleRecording = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    useEffect(() => {
        onTranscriptUpdate(transcript.text);
    }, [transcript]);


    return (
        <>
            <Button color="primary"  isIconOnly variant="bordered" onClick={handleToggleRecording}>
                {recording ? <HiMicrophone/> : <GrMicrophone/>}
            </Button>
        </>
    )
}