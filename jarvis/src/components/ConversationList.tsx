import Link from "next/link";
import DeleteConversationButton from "@/components/DeleteConversation";


export default function Conversations(
    {
        conversations,
        handleDeleteConversation
    }: {
        conversations: any,
        handleDeleteConversation: any
    }
) {

    return (
        <>
            {conversations?.map((conversationId: string) => (
                <div key={conversationId} className="flex">
                    <Link href={`/${conversationId}`} key={conversationId}>
                        <h2 className="mb-2 border-2  rounded-xl p-2 hover:bg-blue-100 border-gray-500">{conversationId}</h2>
                    </Link>
                    <DeleteConversationButton sessionId={conversationId} onDelete={handleDeleteConversation}/>
                </div>
            ))}
        </>
    )
}