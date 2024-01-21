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
import { ScrollArea } from "@/components/ui/scroll-area"

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

            <Link href={"/file"}>Upload file</Link>


            <ScrollArea className="h-[715px] w-[340px] mt-10">
                {data.session_ids.reverse().map((conversationId: string) => (
                    <div>
                        <Link href={`/${conversationId}`} key={conversationId}>
                            <h2 className="mb-2 border-2 rounded-xl p-2 hover:bg-blue-100 border-gray-500">{conversationId}</h2>
                        </Link>
                    </div>
                ))}
            </ScrollArea>
        </SheetContent>
    </Sheet>
    )
}