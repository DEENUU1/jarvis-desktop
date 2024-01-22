import { Component } from "react";

export default class Speech extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            utterance: null,
        };
    }

    componentDidMount() {
        this.updateSpeech();
    }

    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        if (prevProps.text !== this.props.text || prevProps.autoRead !== this.props.autoRead) {
            this.updateSpeech();
        }
    }

    updateSpeech() {
        // @ts-ignore
        const { text, autoRead } = this.props;
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);

        this.setState({
            utterance: u,
        });

        if (autoRead) {
            try {
                if (synth.speaking) {
                    // Pause if already speaking
                    synth.pause();
                } else {
                    // Otherwise, start or resume playback
                    u.rate = 1;
                    synth.speak(u);
                }
            } catch (error) {
                console.log(error);
            }
        }

        return () => {
            synth.cancel();
        };
    }

}


