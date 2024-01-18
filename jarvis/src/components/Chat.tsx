'use client'
import {useState, useEffect} from "react";

export default function Chat({sessionId}: { sessionId: string }) {
    const [messages, setMessages] = useState()
    const [message, setMessage] = useState('')
    const [model, setModel] = useState('gpt-3.5-turbo-16k-0613')
    const [isLoading, setIsLoading] = useState(false)


    const fetchChatHistory = async () => {
        const response = await fetch("http://16.171.185.186" + `/chat/${sessionId}`)
        const data = await response.json()
        setMessages(data);
    }

    const sendMessage = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch("http://16.171.185.186" + `/chat/${sessionId}`, {
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


    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <>
            <div className="max-w-lg mx-auto my-8 p-4 border rounded-md shadow-lg">
                {messages?.map((message: any, index: number) => (
                    <div
                        key={index}
                        className={`mb-4 p-4 rounded-md`}
                    >
                        {message.type === 'system' ? (
                            <p>{message.content}</p>
                        ) : (
                            <>
                                <p className="font-bold">
                                    {message.type === 'human' ? 'You:' : 'AI:'}
                                </p>
                                <p>{message.content}</p>
                            </>
                        )}
                    </div>
                ))}

                <div>
                    <form onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}