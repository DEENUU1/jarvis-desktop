'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription
} from "@/components/ui/sheet"
import {getConversations} from "@/lib/chat"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import DropDownMenu from "@/components/Dropdown";
import DeleteConversationButton from "@/components/DeleteConversation";
import {useState, useEffect} from "react"


export default function Sidebar() {
    const [conversations, setConversations] = useState([]);

    const fetchConversations = async () => {
        const data = await getConversations();
        setConversations(data.session_ids.reverse());
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    const handleDeleteConversation = (deletedSessionId: string) => {
        setConversations((prevConversations) => 
            prevConversations.filter((sessionId) => sessionId !== deletedSessionId)
        );
    }

    // const data = await getConversations();
    return (
    <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
                <SheetTitle className="mb-5" ><Link href="/">Jarvis</Link></SheetTitle>
            </SheetHeader>

            <DropDownMenu/>

            <SheetDescription>
            <ScrollArea className="h-[715px] w-[340px] mt-5">
                {conversations?.map((conversationId: string) => (
                    <div className="flex">
                        <Link href={`/${conversationId}`} key={conversationId}>
                            <h2 className="mb-2 border-2  rounded-xl p-2 hover:bg-blue-100 border-gray-500">{conversationId}</h2>
                        </Link>
                        <DeleteConversationButton sessionId={conversationId} onDelete={handleDeleteConversation}/>
                    </div>
                ))}
            </ScrollArea>
            </SheetDescription>
        </SheetContent>
    </Sheet>
    )
}