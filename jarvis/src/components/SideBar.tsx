import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {getConversations} from "@/lib/conversation"

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
                    <div key={conversationId}>{conversationId}</div>
                ))}
            </div>
        </SheetContent>
    </Sheet>
    )
}