import {getConversationMessages} from "@/lib/chat";


export default async function Chat({sessionId}: {sessionId: string}) {
    const data = await getConversationMessages(sessionId)

    return (
        <>
            <div className="max-w-lg mx-auto my-8 p-4 border rounded-md shadow-lg">
                {data.map((message, index) => (
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