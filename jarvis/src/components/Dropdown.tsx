'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import {useTheme} from "next-themes";

export default function DropDownMenu(){
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span><Link href={"/file"}>Upload file</Link></span>
                        {/*<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={toggleTheme}>
                        <span>{theme === 'light' ? 'Light' : 'Dark'} Theme</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span><Link href="https://github.com/DEENUU1/jarvis-backend">Source code</Link></span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}