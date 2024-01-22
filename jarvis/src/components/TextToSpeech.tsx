import React, { useState, useEffect } from "react";

export default function Speech({ text }: {text: string}) {
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<any>(null);
    const [rate, setRate] = useState<any>(1);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            utterance.rate = rate;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;
        setIsPaused(true);
        synth.pause();
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;
        setIsPaused(false);
        synth.cancel();
    };


    const handleRateChange = (event: any) => {
        setRate(parseFloat(event.target.value));
    };

    const rateOptions = [0.5, 1, 1.5, 2];

    return (
        <div>
            <select>
                {rateOptions.map((option) => (
                    <option value={option} defaultValue={1} onChange={handleRateChange} >{option}</option>
                ))}
            </select>

            <button onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};
