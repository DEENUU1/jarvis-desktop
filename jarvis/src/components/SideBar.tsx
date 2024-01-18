import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {getConversations} from "@/lib/chat"
import Link from "next/link"


export default async function Sidebar() {
    const data = await getConversations();
    return (
    <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
                <SheetTitle>Previous Chats</SheetTitle>
            </SheetHeader>
            <div>
                {data.session_ids.map((conversationId: string) => (
                    <Link href={`/${conversationId}`} key={conversationId}>
                        {conversationId}
                    </Link>
                ))}
            </div>
        </SheetContent>
    </Sheet>
    )
}