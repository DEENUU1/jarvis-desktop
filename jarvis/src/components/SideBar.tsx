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
import {ThemeSwitcher} from "@/app/ThemeSwitch";


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
                <ThemeSwitcher/>
            </div>
            <div>
                {data.session_ids.map((conversationId: string) => (
                    <Link href={`/${conversationId}`} key={conversationId}>
                        <h2>{conversationId}</h2>
                    </Link>
                ))}
            </div>
        </SheetContent>
    </Sheet>
    )
}