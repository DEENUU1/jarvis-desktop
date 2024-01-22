import { useWhisper } from '@chengsokdara/use-whisper'

export default function Recorder(){
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

    return (
        <div>
            <p>Recording: {recording ? 'Yes' : 'No'}</p>
            <p>Transcribing: {transcribing}</p>
            <p>Transcribed Text: {transcript.text}</p>
            <button onClick={() => startRecording()}>Start</button>
            <button onClick={() => stopRecording()}>Stop</button>
        </div>
    )
}