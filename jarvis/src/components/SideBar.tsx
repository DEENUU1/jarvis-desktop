import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {getConversations} from "@/lib/chat"
import Link from "next/link"
import {ThemeSwitcher} from "@/app/ThemeSwitch";
import { Button } from "@/components/ui/button"

export default async function Sidebar() {
    const data = await getConversations();
    return (
    <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
                <SheetTitle><Link href="/">Jarvis</Link></SheetTitle>
            </SheetHeader>

            <div>
                <ThemeSwitcher/>
            </div>
            <SheetHeader>
                <SheetTitle>Previous Chats</SheetTitle>
            </SheetHeader>

            <div>
                {data.session_ids.map((conversationId: string) => (
                    <Link href={`/${conversationId}`} key={conversationId}>
                        <h2 className="mb-2 border-2 rounded-2xl p-2 hover:bg-blue-100 border-gray-500">{conversationId}</h2>
                    </Link>
                ))}
            </div>
        </SheetContent>
    </Sheet>
    )
}