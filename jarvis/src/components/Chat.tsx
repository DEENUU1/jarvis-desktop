'use client'
import {useState, useEffect} from "react";

export default function Chat({sessionId}: {sessionId: string}) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("http://16.171.185.186" + `/chat/${sessionId}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    })

    return (
        <>
            <div className="max-w-lg mx-auto my-8 p-4 border rounded-md shadow-lg">
                {data?.map((message: any, index: number) => (
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
            </div>
        </>
    )
}