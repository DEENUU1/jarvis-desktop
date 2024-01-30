'use client'
import {useState, useEffect} from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import Recorder from "@/components/Whisper";
import Speech from "@/components/TextToSpeech";
import {Switch} from "@nextui-org/react";
import Markdown from 'react-markdown'
import gfm from 'remark-gfm';

export default function Chat({sessionId}: { sessionId: string }) {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [model, setModel] = useState('gpt-3.5-turbo-16k-0613')
    const [isLoading, setIsLoading] = useState(false)
    const [autoRead, setAutoRead] = useState(false);

    function getLastAiContent(response: any): string | undefined {
        const aiContents = response
            // @ts-ignore
            .filter(item => item.type === 'ai')
            // @ts-ignore
            .map(item => item.content);
        console.log(`${aiContents.length > 0 ? aiContents[aiContents.length - 1] : undefined}`)
        return aiContents.length > 0 ? aiContents[aiContents.length - 1] : undefined;
    }

    const fetchChatHistory = async () => {
        try {
            const response = await fetch(process.env.API_URL + `/chat/${sessionId}`);
            const data = await response.json();
            setMessages(data);


            // Run Speech component with updated text
            const speechComponent = new Speech({text: getLastAiContent(data), autoRead: autoRead});
            speechComponent.updateSpeech();
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch(process.env.API_URL + `/chat/${sessionId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({'message': message, 'model': model})
            });

            if (response.ok) {
                console.log("message send");
            } else {
                console.log(response)
                console.log("message not send");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            await fetchChatHistory();
        }
    }

    const updateTranscript = (newTranscript: string) => {
        setMessage(newTranscript);
    };

    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <>
            <div className="flex h-screen antialiased">
                <div className="flex flex-col flex-auto h-full p-6">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4">
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                {messages?.map((message: any, index: number) => (
                                    <div key={index}>
                                        {message.type === 'system' ? (
                                            <p>{message.content}</p>
                                        ) : (
                                            <div className={`grid grid-cols-12 gap-y-2`}>
                                                {message.type === 'ai' ? (
                                                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                                        <div className="flex flex-row items-center">
                                                            <div
                                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">AI
                                                            </div>

                                                            <div
                                                                className="relative ml-3 text-sm bg-gray-200 dark:bg-black py-2 px-4 shadow rounded-xl">
                                                                <div className="whitespace-pre-wrap">
                                                                    <Markdown
                                                                        remarkPlugins={[gfm]}>{message.content}
                                                                    </Markdown>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                                        <div
                                                            className="flex items-center justify-start flex-row-reverse">
                                                            <div
                                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">You
                                                            </div>
                                                            <div
                                                                className="relative mr-3 text-sm  bg-gray-200 dark:bg-black py-2 px-4 shadow rounded-xl">
                                                                <div className="whitespace-pre-wrap">
                                                                    <Markdown
                                                                        remarkPlugins={[gfm]}>{message.content}
                                                                    </Markdown>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <form onSubmit={sendMessage}>
                            <div className="flex flex-row items-center  rounded-xl w-full px-4">
                                <div className="mr-4">
                                    <Recorder onTranscriptUpdate={updateTranscript}/>
                                </div>
                                <div className="flex-grow">
                                    <div className="relative w-full">
                                        <Input
                                            type="text"
                                            variant={"bordered"}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <Button type="submit" color="primary" variant="bordered" isLoading={isLoading}>
                                        {isLoading ? 'Sending' : 'Send'}
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <div className="flex flex-row items-center rounded-xl w-full px-4 mt-5">
                            <div>
                                {autoRead ? (
                                    <Switch defaultSelected onChange={() => setAutoRead(!autoRead)}>
                                        Auto read
                                    </Switch>
                                ) : (
                                    <Switch onChange={() => setAutoRead(!autoRead)}>
                                        Enable auto read
                                    </Switch>
                                )}
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}