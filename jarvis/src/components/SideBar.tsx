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
import {ScrollArea} from "@/components/ui/scroll-area"
import DropDownMenu from "@/components/Dropdown";
import {useState, useEffect} from "react"
import Conversations from "@/components/ConversationList";


export default function Sidebar() {
    const [conversations, setConversations] = useState([]);
    const [isHover, setIsHover] = useState(false);

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

    return (
        <Sheet>
            <SheetTrigger className="mt-3 ml-3">
            <span
                className="bg-gray-100 text-black hover:bg-gray-300 rounded-xl font-medium dark:text-white text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{cursor: isHover ? 'pointer' : 'default'}}
            >
                Open
            </span>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="mb-5"><Link href="/">Jarvis</Link></SheetTitle>
                </SheetHeader>

                <DropDownMenu/>

                <SheetDescription>
                    <ScrollArea className="h-[715px] w-[340px] mt-5">
                        <Conversations conversations={conversations}
                                       handleDeleteConversation={handleDeleteConversation}/>
                    </ScrollArea>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}