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


export default async function Sidebar() {
    const data = await getConversations();
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
                {data.session_ids.reverse().map((conversationId: string) => (
                    <div className="flex">
                        <Link href={`/${conversationId}`} key={conversationId}>
                            <h2 className="mb-2 border-2  rounded-xl p-2 hover:bg-blue-100 border-gray-500">{conversationId}</h2>
                        </Link>
                        <DeleteConversationButton sessionId={conversationId}/>
                    </div>
                ))}
            </ScrollArea>
            </SheetDescription>
        </SheetContent>
    </Sheet>
    )
}